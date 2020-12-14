/**
 * TrasparenzaView view component.
 * @module components/theme/View/TrasparenzaView
 */

import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { flattenToAppURL } from '@plone/volto/helpers';
import PropTypes from 'prop-types';
import {
  TrasparenzaPlaceholderAfterContent,
  PageHeader,
} from '@italia/components/ItaliaTheme/View';
import { getAmministrazioneTrasparenteTree } from '@italia/actions';
import { LinkList, LinkListItem } from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({});

/**
 * TrasparenzaView component class.
 * @function TrasparenzaView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const TrasparenzaView = ({ content }) => {
  const intl = useIntl();
  const locationContent = useSelector(
    (state) => state.amministrazioneTrasparenteTree,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const url = content['@components']['trasparenza-items']['@id'];
    dispatch(getAmministrazioneTrasparenteTree(url));
  }, []);

  const items = locationContent?.result?.items || [];
  return (
    <>
      <div id="page-document" className="ui container">
        <PageHeader
          content={content}
          readingtime={null}
          showreadingtime={null}
          showdates={null}
          showtopics={true}
          showtassonomiaargomenti={true}
        />
        <section id="trasparenza-page-content">
          {items?.map((item) => (
            <LinkList tag="div">
              <LinkListItem
                tag="a"
                header
                href={flattenToAppURL(item['@id'])}
                size="large"
                className="trasparenza-item-header"
              >
                {item.title}
              </LinkListItem>

              <LinkList tag="div" className="trasparenza-second-level-wrapper">
                {item.items?.map((subItem) => (
                  <LinkListItem
                    className="trasparenza-item"
                    tag="a"
                    href={flattenToAppURL(subItem['@id'])}
                  >
                    {subItem.title}
                  </LinkListItem>
                ))}
              </LinkList>
            </LinkList>
          ))}
        </section>
      </div>
      <TrasparenzaPlaceholderAfterContent content={content} />
    </>
  );
};

TrasparenzaView.propTypes = {
  content: PropTypes.any,
};

export default TrasparenzaView;
