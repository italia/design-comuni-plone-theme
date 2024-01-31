import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { searchContent, resetSearchContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import {
  Attachment,
  RichTextSection,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { contentFolderHasItems } from 'design-comuni-plone-theme/helpers';
import PropTypes from 'prop-types';

const messages = defineMessages({
  attachments: {
    id: 'attachments',
    defaultMessage: 'Allegati',
  },
});

/**
 * Attachments view component class.
 * @function Attachments
 * @params {object} content Content object.
 * @params {string} folder name where to find images.
 * @returns {string} Markup of the component.
 */
const Attachments = ({
  content,
  folder_name,
  items,
  title,
  as_section = true,
  article_id = folder_name,
}) => {
  const intl = useIntl();
  const url = content
    ? `${flattenToAppURL(content['@id'])}/${folder_name}`
    : null;
  const key = folder_name + url;
  const searchResults = useSelector((state) => state.search.subrequests);
  const dispatch = useDispatch();

  const hasChildren = folder_name
    ? contentFolderHasItems(content, folder_name)
    : items?.length > 0;

  useEffect(() => {
    if (folder_name && hasChildren) {
      dispatch(
        searchContent(
          url,
          {
            'path.depth': 1,
            sort_on: 'getObjPositionInParent',
            fullobjects: 1,
            // the default maximum b_size allowed in redturtle.volto is 500
            b_size: 499,
          },
          key,
        ),
      );

      return () => {
        dispatch(resetSearchContent(key));
      };
    }
    // eslint-disable-next-line
  }, [key]);

  const attachments = searchResults?.[key]?.items || items || [];

  const attachments_view = (
    <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
      {attachments.map((item, _i) => {
        let itemURL = '#';

        switch (item['@type']) {
          case 'File':
            itemURL = `${item['@id']}/@@download/file`;
            break;

          case 'Link':
            itemURL = item.remoteUrl?.length > 0 ? item.remoteUrl : item['@id'];
            break;

          default:
            itemURL = item['@id'];
        }

        return (
          <Attachment
            key={item['@id']}
            title={item.title}
            description={item.description}
            download_url={itemURL}
            item={item}
          />
        );
      })}
    </div>
  );

  return !hasChildren ? null : as_section ? (
    <RichTextSection
      tag_id={article_id}
      className="it-page-section mb-5"
      title={title ? title : intl.formatMessage(messages.attachments)}
    >
      {attachments.length > 0 && attachments_view}
      {/** aggiunte conditions per attendere il render del componente mentre
       * i risultati della query stanno ancora caricando
       */}
      {searchResults?.[key]?.loading && !searchResults?.[key]?.loaded && <></>}
    </RichTextSection>
  ) : (
    <div className="mb-5 mt-3">
      {title && <h5>{title}</h5>}
      {attachments.length > 0 && attachments_view}
    </div>
  );
};
Attachments.propTypes = {
  content: PropTypes.object,
  folder_name: PropTypes.string,
  title: PropTypes.string,
};
export default Attachments;
