import { defineMessages, useIntl } from 'react-intl';
import React from 'react';
import moment from 'moment';
import { Chip, ChipLabel } from 'design-react-kit/dist/design-react-kit';

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
  subjects: {
    id: 'subjects',
    defaultMessage: 'Tags',
  },
});

/**
 * Metadata view component class.
 * @function Metadata
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const Metadata = params => {
  const intl = useIntl();
  return (
    <article
      id="ulteriori-informazioni"
      className="it-page-section anchor-offset mt-5"
    >
      <h4 className="mb-3">{intl.formatMessage(messages.other_info)}</h4>
      <p className="text-serif">{intl.formatMessage(messages.modified)}</p>
      <h6>
        <strong>
          {moment(params.content.modified).format('DD-MM-Y HH:MM')}
        </strong>
      </h6>
      {params.content.rights && (
        <>
          <p className="text-serif">{intl.formatMessage(messages.rights)}</p>
          <h6>
            <strong>{params.content.rights}</strong>
          </h6>
        </>
      )}
      {params.content.subjects.length !== 0 && (
        <>
          <p className="text-serif">{intl.formatMessage(messages.subjects)}</p>
          {params.content.subjects.map((item, i) => (
            <Chip
              color=""
              disabled={false}
              large={false}
              simple
              tag="div"
              key={item}
            >
              <ChipLabel tag="span">{item}</ChipLabel>
            </Chip>
            // <div class="chip chip-simple ml-1" key={item}>
            //   <span class="chip-label">{item}</span>
            // </div>
          ))}
        </>
      )}
    </article>
  );
};
export default Metadata;
