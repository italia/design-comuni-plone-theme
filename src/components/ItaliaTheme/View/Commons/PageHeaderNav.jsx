import React, { useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { LinkList, LinkListItem, Collapse } from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

/**
 * PageHeaderNav view component class.
 * @function PageHeaderNav
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  goToPage: {
    id: 'Vai alla pagina',
    defaultMessage: 'Vai alla pagina',
  },
});

const MAX_VISIBLE_ITEMS = 6;
const PageHeaderNav = ({ content, title }) => {
  const intl = useIntl();
  const [isExpanded, setIsExpanded] = useState(false);
  const excluded_types = ['Image', 'File', 'Folder'];
  const links = content?.items?.filter(
    (item) =>
      excluded_types.indexOf(item['@type']) < 0 && !item.exclude_from_nav,
  );

  let visible_links = links;
  let more_links = [];
  if (links.length > MAX_VISIBLE_ITEMS) {
    visible_links = links.slice(0, MAX_VISIBLE_ITEMS);
    more_links = links.slice(MAX_VISIBLE_ITEMS, links.length);
  }

  const expanded = {
    'aria-expanded': true,
  };
  return visible_links ? (
    <LinkList tag="div">
      {title && (
        <LinkListItem header tag="a">
          {title}
        </LinkListItem>
      )}
      {visible_links.map((item) => (
        <LinkListItem
          item={item}
          tag={UniversalLink}
          title={intl.formatMessage(messages.goToPage) + ': ' + item.title}
          key={item['@id']}
        >
          <span>{item.title}</span>
        </LinkListItem>
      ))}
      {more_links.length > 0 && (
        <>
          <LinkListItem
            size="large"
            className="left-icon"
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded(!isExpanded);
            }}
            {...(isExpanded ? expanded : {})}
          >
            <Icon
              className="right"
              color="primary"
              icon="it-more-items"
              style={{ ariaHidden: true }}
            />
          </LinkListItem>
          <Collapse isOpen={isExpanded}>
            <LinkList>
              {more_links.map((item) => (
                <LinkListItem
                  item={item}
                  tag={UniversalLink}
                  title={
                    intl.formatMessage(messages.goToPage) + ': ' + item.title
                  }
                  key={item['@id']}
                >
                  <span>{item.title}</span>
                </LinkListItem>
              ))}
            </LinkList>
          </Collapse>
        </>
      )}
    </LinkList>
  ) : null;
};
export default PageHeaderNav;

PageHeaderNav.propTypes = {
  params: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  }),
};
