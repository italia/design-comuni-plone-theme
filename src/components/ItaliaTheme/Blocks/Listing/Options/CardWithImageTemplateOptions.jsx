import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxWidget } from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  always_show_image: {
    id: 'always_show_image',
    defaultMessage: "Mostra l'immagine per tutti gli elementi",
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
    </>
  );
};

CardWithImageTemplateOptions.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default CardWithImageTemplateOptions;
