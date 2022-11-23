import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichText,
  RichTextArticle,
  richTextHasContent,
} from 'design-volto-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  costi_e_vincoli: {
    id: 'costi_e_vincoli',
    defaultMessage: 'Costi e vincoli',
  },
  costi: {
    id: 'costi',
    defaultMessage: 'Costi',
  },
  vincoli: {
    id: 'vincoli',
    defaultMessage: 'Vincoli',
  },
});

const ServizioCostiVincoli = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content.costi) ||
    richTextHasContent(content.vincoli) ? (
    <>
      <RichTextArticle
        tag_id={'costi-e-vincoli'}
        title={intl.formatMessage(messages.costi_e_vincoli)}
      >
        <RichText
          title={intl.formatMessage(messages.costi)}
          content={content.costi}
        />

        <RichText
          title={intl.formatMessage(messages.vincoli)}
          content={content.vincoli}
        />
      </RichTextArticle>
    </>
  ) : (
    <></>
  );
};

ServizioCostiVincoli.propTypes = {
  costi: PropTypes.shape({
    data: PropTypes.string,
  }),
  vincoli: PropTypes.shape({
    data: PropTypes.string,
  }),
};
export default ServizioCostiVincoli;
