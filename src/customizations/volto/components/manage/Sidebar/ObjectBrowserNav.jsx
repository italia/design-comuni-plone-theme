/**
 * Customizations
 * - Add status indicator (circle) for private and pending items in ObjectBrowserNav
 */

import React from 'react';
import { Button, Segment, Popup } from 'semantic-ui-react';
import { useIntl, defineMessages } from 'react-intl';
import cx from 'classnames';
import { flattenToAppURL, getContentIcon } from '@plone/volto/helpers';
import config from '@plone/volto/registry';

import rightArrowSVG from '@plone/volto/icons/right-key.svg';
import { Circle, Icon } from '@plone/volto/components';
import homeSVG from '@plone/volto/icons/home.svg';

const messages = defineMessages({
  browse: {
    id: 'Browse',
    defaultMessage: 'Browse',
  },
  select: {
    id: 'Select',
    defaultMessage: 'Select',
  },
  private: {
    id: 'Private',
    defaultMessage: 'Private',
  },
  pending: {
    id: 'Pending',
    defaultMessage: 'Pending',
  },
  intranet: {
    id: 'intranet',
    defaultMessage: 'Intranet',
  },
  draft: {
    id: 'draft',
    defaultMessage: 'Draft',
  },
  published: {
    id: 'Published',
    defaultMessage: 'Published',
  },
});

const ObjectBrowserNav = ({
  currentSearchResults,
  selected,
  handleClickOnItem,
  handleDoubleClickOnItem,
  mode,
  navigateTo,
  isSelectable,
}) => {
  const intl = useIntl();
  const isSelected = (item) => {
    let ret = false;
    if (selected) {
      selected
        .filter((item) => item != null)
        .forEach((_item) => {
          if (flattenToAppURL(_item['@id']) === flattenToAppURL(item['@id'])) {
            ret = true;
          }
        });
    }
    return ret;
  };

  function getStatusData(type) {
    switch (type) {
      case 'private':
        return {
          color: '#ed4033',
          status: intl.formatMessage(messages.private),
        };
      case 'pending':
        return {
          color: '#f6a808',
          status: intl.formatMessage(messages.pending),
        };
      case 'draft':
        return {
          color: '#f6a808',
          status: intl.formatMessage(messages.draft),
        };
      case 'intranet':
        return {
          status: intl.formatMessage(messages.intranet),
        };
      case 'published':
        return { status: intl.formatMessage(messages.published) };
      default:
        return { color: 'grey' };
    }
  }

  return (
    <Segment as="ul" className="object-listing">
      {currentSearchResults &&
        currentSearchResults.items.map((item) => (
          <li
            role="presentation"
            aria-label={
              item.is_folderish && mode === 'image'
                ? `${intl.formatMessage(messages.browse)} ${item.title}`
                : `${intl.formatMessage(messages.select)} ${item.title}`
            }
            key={item['@id']}
            className={cx('', {
              'selected-item': isSelected(item),

              disabled:
                mode === 'image'
                  ? !config.settings.imageObjects.includes(item['@type']) &&
                    !item.is_folderish
                  : !isSelectable(item),
            })}
            onClick={() => handleClickOnItem(item)}
            onDoubleClick={() => handleDoubleClickOnItem(item)}
          >
            <span
              title={`${item['@id']} (${item['@type']}) - ${
                item?.review_state ? item?.review_state : ''
              }`}
              className="item-wrapper"
            >
              <Popup
                key={item['@id']}
                content={
                  <>
                    <Icon name={homeSVG} size="18px" />{' '}
                    {flattenToAppURL(item['@id'])} ( {item['@type']})
                  </>
                }
                trigger={
                  <span className="icon-wrapper">
                    {item?.review_state && item?.review_state === 'pending' ? (
                      <span className="state">
                        <Circle
                          className="state"
                          color={getStatusData(item?.review_state).color}
                          size="15px"
                        />
                      </span>
                    ) : item?.review_state === 'private' ? (
                      <span className="state">
                        <Circle
                          className="state"
                          color={getStatusData(item?.review_state).color}
                          size="15px"
                        />
                      </span>
                    ) : null}
                    <Icon
                      name={getContentIcon(item['@type'], item.is_folderish)}
                      size="24px"
                    />
                  </span>
                }
              />

              {item.title}
            </span>
            {item.is_folderish && mode === 'image' && (
              <Icon
                className="right-arrow-icon"
                name={rightArrowSVG}
                size="24px"
              />
            )}
            {item.is_folderish && (mode === 'link' || mode === 'multiple') && (
              <div
                role="presentation"
                className="right-arrow-link-mode"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateTo(item['@id']);
                }}
              >
                <Button.Group>
                  <Button
                    basic
                    icon
                    aria-label={`${intl.formatMessage(messages.browse)} ${
                      item.title
                    }`}
                  >
                    <Icon
                      className="right-arrow-icon"
                      name={rightArrowSVG}
                      size="24px"
                    />
                  </Button>
                </Button.Group>
              </div>
            )}
          </li>
        ))}
    </Segment>
  );
};

export default ObjectBrowserNav;
