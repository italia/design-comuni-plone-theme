/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';
import TemplatesOptions from '@italia/components/ItaliaTheme/Blocks/Listing/Options/TemplatesOptions';

const messages = defineMessages({
  show_topics: {
    id: 'show_topics',
    defaultMessage: 'Mostra gli argomenti',
  },
});

const InEvidenceTemplateOptions = (props) => {
  //  const { data, block, onChangeBlock } = props;
  const intl = useIntl();

  return (
    <>
      <TemplatesOptions
        fields={[
          'show_icon',
          'show_section',
          'show_type',
          'hide_dates',
          'show_description',
          'show_topics',
        ]}
        fieldsConfig={{
          hide_dates: { default: false },
          show_section: { default: false },
          show_topics: { label: intl.formatMessage(messages.show_topics) },
        }}
        {...props}
      />
    </>
  );
};

InEvidenceTemplateOptions.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default InEvidenceTemplateOptions;
