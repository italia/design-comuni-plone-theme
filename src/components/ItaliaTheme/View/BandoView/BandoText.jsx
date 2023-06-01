import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichText,
  RichTextSection,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  descrizione: {
    id: 'descrizione',
    defaultMessage: 'Descrizione',
  },
  tipologia_bando: {
    id: 'tipologia_bando',
    defaultMessage: 'Tipologia del bando',
  },
  destinatari: {
    id: 'bando_destinatari',
    defaultMessage: 'Destinatari del bando',
  },
  ente: {
    id: 'bando_ente',
    defaultMessage: 'Ente erogatore',
  },
});

const BandoText = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content?.text) ||
    content?.tipologia_bando ||
    content?.destinatari?.length > 0 ||
    content?.ente_bando?.length > 0 ? (
    <RichTextSection
      tag_id={'text-body'}
      title={intl.formatMessage(messages.descrizione)}
      show_title={true}
    >
      {/* DESCRIZIONE DEL BANDO */}
      {richTextHasContent(content?.text) && (
        <RichText title_size="h5" title={''} data={content?.text} />
      )}
      {/* TIPOLOGIA DEL BANDO */}
      {content?.tipologia_bando && (
        <>
          <h5>{intl.formatMessage(messages.tipologia_bando)}</h5>
          <span>{content.tipologia_bando.title}</span>
        </>
      )}
      {/* DESTINATARI DEL BANDO */}
      {content?.destinatari?.length > 0 && (
        <>
          <h5>{intl.formatMessage(messages.destinatari)}</h5>
          {content.destinatari.map((item, i) => (
            <p key={'destinatari-' + i}>{item.title}</p>
          ))}
        </>
      )}
      {/* ENTE DEL BANDO */}
      {content?.ente_bando?.length > 0 && (
        <>
          <h5>{intl.formatMessage(messages.ente)}</h5>
          {content.ente_bando.map((item, i) => (
            <span key={'ente_' + i}>
              {item}
              {i < content.ente_bando.length - 1 ? ', ' : ''}
            </span>
          ))}
        </>
      )}
    </RichTextSection>
  ) : (
    <></>
  );
};

BandoText.propTypes = {
  content: PropTypes.shape({
    text: PropTypes.shape({
      data: PropTypes.string,
    }),
    tipologia_bando: PropTypes.shape({
      title: PropTypes.string,
      token: PropTypes.string,
    }),
    ente_bando: PropTypes.arrayOf(PropTypes.string),
    destinatari: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        token: PropTypes.string,
      }),
    ),
  }).isRequired,
};
export default BandoText;
