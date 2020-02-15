import { defineMessages, useIntl } from 'react-intl';
import React from 'react';
import { flattenToAppURL } from '@plone/volto/helpers';

const messages = defineMessages({
  attachments: {
    id: 'attachments',
    defaultMessage: 'Allegati',
  },
});

/**
 * NewsItemView view component class.
 * @function RelatedContents
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const RelatedContents = ({ content, folder_name }) => {
  const intl = useIntl();

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
export default RelatedContents;
