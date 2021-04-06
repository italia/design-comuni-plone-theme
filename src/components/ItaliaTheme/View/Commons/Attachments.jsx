import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { searchContent, resetSearchContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Attachment } from '@italia/components/ItaliaTheme/View';
import { contentFolderHasItems } from '@italia/helpers';
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
const Attachments = ({ content, folder_name, title, as_article = true }) => {
  const intl = useIntl();
  const url = `${flattenToAppURL(content['@id'])}/${folder_name}`;
  const searchResults = useSelector((state) => state.search.subrequests);
  const dispatch = useDispatch();

  const hasChildren = contentFolderHasItems(content, folder_name);

  useEffect(() => {
    if (hasChildren) {
      dispatch(
        searchContent(
          url,
          {
            'path.depth': 1,
            sort_on: 'getObjPositionInParent',
            metadata_fields: '_all',
            fullobjects: 1,
          },
          folder_name,
        ),
      );

      return () => {
        dispatch(resetSearchContent(folder_name));
      };
    }
    // eslint-disable-next-line
  }, []);

  const attachments = searchResults?.[folder_name]?.items || [];

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
          />
        );
      })}
    </div>
  );

  return !hasChildren ? null : as_article ? (
    <article id={folder_name} className="it-page-section anchor-offset mt-5">
      {title ? (
        <h4 id={`header-${folder_name}`}>{title}</h4>
      ) : (
        <h4 id={`header-${folder_name}`}>
          {intl.formatMessage(messages.attachments)}
        </h4>
      )}
      {attachments.length > 0 && attachments_view}
    </article>
  ) : (
    <div className="mb-5 mt-3">
      <h5>{title}</h5>
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
