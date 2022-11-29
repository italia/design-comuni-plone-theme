/* eslint-disable react-hooks/exhaustive-deps */
/**
 * TrasparenzaView view component.
 * @module components/theme/View/TrasparenzaView
 */

import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { flattenToAppURL } from '@plone/volto/helpers';
import PropTypes from 'prop-types';
import {
  TrasparenzaPlaceholderAfterContent,
  PageHeader,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { getAmministrazioneTrasparenteTree } from 'design-comuni-plone-theme/actions';
import { LinkList, LinkListItem } from 'design-react-kit';

/**
 * TrasparenzaView component class.
 * @function TrasparenzaView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const TrasparenzaView = ({ content }) => {
  const locationContent = useSelector(
    (state) => state.amministrazioneTrasparenteTree,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const url = content['@components']['trasparenza-items']?.['@id'];
    if (!!url) {
      dispatch(getAmministrazioneTrasparenteTree(url));
    }
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
