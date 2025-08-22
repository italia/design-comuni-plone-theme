import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichText,
  RichTextSection,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

import BandoTextTipologia from 'design-comuni-plone-theme/components/ItaliaTheme/View/BandoView/BandoTextTipologia';
import BandoTextDestinatari from 'design-comuni-plone-theme/components/ItaliaTheme/View/BandoView/BandoTextDestinatari';
import BandoTextEnte from 'design-comuni-plone-theme/components/ItaliaTheme/View/BandoView/BandoTextEnte';

const messages = defineMessages({
  descrizione: {
    id: 'descrizione_bando',
    defaultMessage: 'Descrizione',
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
      {richTextHasContent(content?.text) && <RichText data={content?.text} />}

      {/* CIG */}
      {content?.cig && (
        <div className="mb-2">
          <h3 className="h5">CIG</h3>
          {content.cig}
        </div>
      )}
      {/* TIPOLOGIA DEL BANDO */}
      <BandoTextTipologia content={content} />
      {/* DESTINATARI DEL BANDO */}
      <BandoTextDestinatari content={content} />
      {/* ENTE DEL BANDO */}
      <BandoTextEnte content={content} />
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
