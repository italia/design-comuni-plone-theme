import { defineMessages, useIntl } from 'react-intl';
import React from 'react';
import moment from 'moment';

const messages = defineMessages({
  other_info: {
    id: 'other_info',
    defaultMessage: 'Altre informazioni',
  },
  modified: {
    id: 'modified',
    defaultMessage: 'Ultimo aggiornamento',
  },
  rights: {
    id: 'rights',
    defaultMessage: 'Diritti',
  },
});

/**
 * Metadata view component class.
 * @function Metadata
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const Metadata = content => {
  const intl = useIntl();
  return (
    <article
      id="ulteriori-informazioni"
      className="it-page-section anchor-offset mt-5"
    >
      <h4 className="mb-3">{intl.formatMessage(messages.other_info)}</h4>
      <>
        <p className="text-serif">{intl.formatMessage(messages.modified)}</p>
        <h6>
          <strong>{moment(content.modified).format('DD-MM-Y HH:MM')}</strong>
        </h6>
      </>
      {content.rights && (
        <>
          <p className="text-serif">{intl.formatMessage(messages.rights)}</p>
          <h6>
            <strong>{content.rights}</strong>
          </h6>
        </>
      )}
    </article>
  );
};
export default Metadata;
