import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  note_aggiornamento: {
    id: 'note_aggiornamento',
    defaultMessage: 'Note di aggiornamento',
  },
});

const BandoNoteAggiornamento = ({ content }) => {
  const intl = useIntl();
  return content?.update_note ? (
    <div className="mb-4">
      <h3 className="h5">{intl.formatMessage(messages.note_aggiornamento)}</h3>
      <span>{content?.update_note}</span>
    </div>
  ) : (
    <></>
  );
};

BandoNoteAggiornamento.propTypes = {
  content: PropTypes.shape({
    update_note: PropTypes.shape(PropTypes.string),
  }).isRequired,
};
export default BandoNoteAggiornamento;
