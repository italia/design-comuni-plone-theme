import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { searchContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';

const messages = defineMessages({
  attachments: {
    id: 'attachments',
    defaultMessage: 'Allegati',
  },
});

/**
 * NewsItemView view component class.
 * @function Attachments
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const Attachments = ({ content, folder_name }) => {
  const intl = useIntl();

  // mi prendo il path sotto cui cercare
  const url = flattenToAppURL(content['@id']) + '/' + folder_name;
  // useSelector will extract subrequest from the state. Il will contain
  // the query results
  const searchResults = useSelector(state => state.search.subrequests);

  // Obtain dispatcher so i will able to dispatch the action
  const dispatch = useDispatch();
  //use effect to perform operation after the component did mount/update and
  // unmount
  React.useEffect(() => {
    // only if we have the folder
    if (content?.items.some(e => e.id === folder_name)) {
      // dispatch the action
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
  }, [dispatch, content, url]);

  const attachments =
    (searchResults &&
      searchResults[folder_name] &&
      searchResults[folder_name].items) ||
    [];

  return (
    <article id="documenti" className="it-page-section anchor-offset mt-5">
      <h4>{intl.formatMessage(messages.attachments)}</h4>
      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
        {attachments.map((item, i) => (
          <div
            key={i}
            className="card card-teaser shadow p-4 mt-3 rounded border"
          >
            ICON
            <div className="card-body">
              <h5 className="card-title">
                <a href={item.id}>{item.title}</a>
              </h5>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
export default Attachments;
