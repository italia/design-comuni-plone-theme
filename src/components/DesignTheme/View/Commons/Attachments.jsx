import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { searchContent, resetSearchContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Icon } from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({
  attachments: {
    id: 'attachments',
    defaultMessage: 'Allegati',
  },
  attachment: {
    id: 'attachment',
    defaultMessage: 'Allegato',
  },
});

/**
 * Attachments view component class.
 * @function Attachments
 * @params {object} content Content object.
 * @params {string} folder name where to find images.
 * @returns {string} Markup of the component.
 */
const Attachments = ({ content, folder_name }) => {
  const intl = useIntl();

  const url = flattenToAppURL(content['@id']) + '/' + folder_name;
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
          <h4>{intl.formatMessage(messages.attachments)}</h4>
          <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
            {attachments.map((item, i) => (
              <div
                key={item['@id']}
                className="card card-teaser shadow p-4 mt-3 rounded border"
              >
                <Icon
                  className={undefined}
                  color=""
                  icon="it-clip"
                  padding={false}
                  size=""
                  alt={intl.formatMessage(messages.attachment)}
                  title={intl.formatMessage(messages.attachment)}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href={flattenToAppURL(item['@id'] + '/@@download/file')}>
                      {item.title}
                    </a>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </article>
      ) : null}
    </>
  );
};
export default Attachments;
