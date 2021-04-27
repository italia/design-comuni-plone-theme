import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxWidget } from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  always_show_image: {
    id: 'always_show_image',
    defaultMessage: "Mostra l'immagine per tutti gli elementi",
  },
  hide_dates: {
    id: 'hide_dates',
    defaultMessage: 'Nascondi le date',
  },
  natural_image_size: {
    id: 'natural_image_size',
    defineMessages: "Non alterare le dimensioni naturali dell'immagine",
  },
});

const CardWithImageTemplateOptions = ({
  data,
  block,
  onChangeBlock,
  required = false,
}) => {
  const intl = useIntl();

  return (
    <>
      <CheckboxWidget
        id="always_show_image"
        title={intl.formatMessage(messages.always_show_image)}
        value={data.always_show_image ? data.always_show_image : false}
        onChange={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
      />
      <CheckboxWidget
        id="hide_dates"
        title={intl.formatMessage(messages.hide_dates)}
        value={data.hide_dates ? data.hide_dates : false}
        onChange={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
      />
      <CheckboxWidget
        id="natural_image_size"
        title={intl.formatMessage(messages.natural_image_size)}
        value={data.natural_image_size ? data.natural_image_size : false}
        onChange={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
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
