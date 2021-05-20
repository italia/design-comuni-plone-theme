/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';
import TemplatesOptions from '@italia/components/ItaliaTheme/Blocks/Listing/Options/TemplatesOptions';

const messages = defineMessages({
  always_show_image: {
    id: 'always_show_image',
    defaultMessage: "Mostra l'immagine per tutti gli elementi",
  },
  natural_image_size: {
    id: 'natural_image_size',
    defineMessages: "Non alterare le dimensioni naturali dell'immagine",
  },
  show_topics: {
    id: 'show_topics',
    defaultMessage: 'Mostra gli argomenti',
  },
});

const CardWithImageTemplateOptions = (props) => {
  const intl = useIntl();
  //const { data, block, onChangeBlock } = props;

  return (
    <>
      <TemplatesOptions
        fields={[
          'always_show_image',
          'natural_image_size',
          'show_icon',
          'show_section',
          'show_type',
          'hide_dates',
          'show_description',
          'show_topics',
        ]}
        fieldsConfig={{
          always_show_image: {
            default: false,
            label: intl.formatMessage(messages.always_show_image),
          },
          natural_image_size: {
            default: false,
            label: intl.formatMessage(messages.natural_image_size),
          },
          show_section: { default: false },
          hide_dates: { default: false },
          show_topics: { label: intl.formatMessage(messages.show_topics) },
        }}
        {...props}
      />
    </>
  );
};

CardWithImageTemplateOptions.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default CardWithImageTemplateOptions;
