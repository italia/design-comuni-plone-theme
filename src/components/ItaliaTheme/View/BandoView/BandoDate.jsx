import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichTextSection,
  BandoDates,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  tempi_scadenze: {
    id: 'tempi_e_scadenze',
    defaultMessage: 'Tempi e scadenze',
  },
});

const BandoDate = ({ content }) => {
  const intl = useIntl();
  return content?.effective ||
    content?.scadenza_bando ||
    content?.scadenza_domande_bando ||
    content?.chiusura_procedimento_bando ? (
    <RichTextSection
      tag_id="tempi_e_scadenze"
      title={intl.formatMessage(messages.tempi_scadenze)}
    >
      <BandoDates content={content} />
    </RichTextSection>
  ) : (
    <></>
  );
};

BandoDate.propTypes = {
  content: PropTypes.shape({
    chiusura_procedimento_bando: PropTypes.string,
    scadenza_bando: PropTypes.string,
    scadenza_domande_bando: PropTypes.string,
    effective: PropTypes.string,
  }).isRequired,
};
export default BandoDate;
