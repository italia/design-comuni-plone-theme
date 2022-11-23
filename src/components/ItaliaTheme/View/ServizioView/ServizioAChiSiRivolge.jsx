import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichText,
  RichTextArticle,
  richTextHasContent,
} from 'design-volto-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  a_chi_si_rivolge: {
    id: 'a_chi_si_rivolge',
    defaultMessage: 'A chi si rivolge',
  },
  chi_puo_presentare: {
    id: 'chi_puo_presentare',
    defaultMessage: 'Chi può presentare',
  },
  copertura_geografica: {
    id: 'copertura_geografica',
    defaultMessage: 'Copertura geografica del servizio',
  },
});

const ServizioAChiSiRivolge = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content.a_chi_si_rivolge) ||
    richTextHasContent(content.chi_puo_presentare) ||
    richTextHasContent(content.copertura_geografica) ? (
    <RichTextArticle
      content={content.a_chi_si_rivolge}
      tag_id={'text-a_chi_si_rivolge'}
      field="a_chi_si_rivolge,chi_puo_presentare,copertura_geografica"
      title={intl.formatMessage(messages.a_chi_si_rivolge)}
    >
      <RichText
        title={intl.formatMessage(messages.chi_puo_presentare)}
        title_size="h5"
        content={content.chi_puo_presentare}
      />

      <RichText
        title={intl.formatMessage(messages.copertura_geografica)}
        title_size="h5"
        content={content.copertura_geografica}
      />
    </RichTextArticle>
  ) : (
    <></>
  );
};

ServizioAChiSiRivolge.propTypes = {
  content: PropTypes.shape({
    a_chi_si_rivolge: PropTypes.shape({
      data: PropTypes.string,
    }),
    chi_puo_presentare: PropTypes.shape({
      data: PropTypes.string,
    }),
    copertura_geografica: PropTypes.shape({
      data: PropTypes.string,
    }),
  }),
};
export default ServizioAChiSiRivolge;
