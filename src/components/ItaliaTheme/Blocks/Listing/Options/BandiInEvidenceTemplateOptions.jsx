/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';
import TemplatesOptions from '@italia/components/ItaliaTheme/Blocks/Listing/Options/TemplatesOptions';

const messages = defineMessages({
  show_ente: {
    id: 'show_ente',
    defaultMessage: "Mostra l'ente",
  },
  show_tipologia: {
    id: 'show_tipologia',
    defaultMessage: 'Mostra la tipologia',
  },
});

const BandiInEvidenceTemplateOptions = (props) => {
  const intl = useIntl();
  //const { data, block, onChangeBlock } = props;

  return (
    <>
      <TemplatesOptions
        fields={['show_description', 'show_ente', 'show_tipologia']}
        fieldsConfig={{
          show_ente: {
            default: false,
            label: intl.formatMessage(messages.show_ente),
          },
          show_tipologia: {
            default: false,
            label: intl.formatMessage(messages.show_tipologia),
          },
        }}
        {...props}
      />
    </>
  );
};

BandiInEvidenceTemplateOptions.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default BandiInEvidenceTemplateOptions;
