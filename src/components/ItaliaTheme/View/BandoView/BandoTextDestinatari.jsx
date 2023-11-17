import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  destinatari: {
    id: 'bando_destinatari',
    defaultMessage: 'Destinatari del bando',
  },
});

const BandoTextDestinatari = ({ content }) => {
  const intl = useIntl();
  return content?.destinatari?.length > 0 ? (
    <>
      <h3 className="h5">{intl.formatMessage(messages.destinatari)}</h3>
      {content.destinatari.map((item, i) => (
        <p key={'destinatari-' + i}>{item.title}</p>
      ))}
    </>
  ) : (
    <></>
  );
};

BandoTextDestinatari.propTypes = {
  content: PropTypes.shape({
    destinatari: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        token: PropTypes.string,
      }),
    ),
  }).isRequired,
};
export default BandoTextDestinatari;
