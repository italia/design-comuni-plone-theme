import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { searchContent, resetSearchContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import Attachment from './Attachment';
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
const Attachments = ({ content, folder_name, folder_title }) => {
  const intl = useIntl();
  const url = `${flattenToAppURL(content['@id'])}/${folder_name}`;
  const searchResults = useSelector(state => state.search.subrequests);
  const dispatch = useDispatch();
  useEffect(() => {
    if (content?.items.some(e => e.id === folder_name)) {
      dispatch(
        searchContent(
          url,
          {
            'path.depth': 1,
            sort_on: 'getObjPositionInParent',
            metadata_fields: '_all',
          },
          folder_name,
        ),
      );
    }
    return () => {
      dispatch(resetSearchContent(folder_name));
    };
  }, [dispatch, content, url, folder_name]);

  const attachments = searchResults?.[folder_name]?.items || [];
  return (
    <>
      {attachments.length > 0 ? (
        <article id="documenti" className="it-page-section anchor-offset mt-5">
          {folder_title ? (
            <h4>{folder_title}</h4>
          ) : (
            <h4>{intl.formatMessage(messages.attachments)}</h4>
          )}
          <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
            {attachments.map((item, i) => (
              <Attachment
                key={item['@id']}
                title={item.title}
                description={item.description}
                download_url={`${item['@id']}/@@download/file`}
              />
            ))}
          </div>
        </article>
      ) : null}
    </>
  );
};
Attachments.propTypes = {
  content: PropTypes.object,
  folder_name: PropTypes.string,
  folder_title: PropTypes.string,
};
export default Attachments;
