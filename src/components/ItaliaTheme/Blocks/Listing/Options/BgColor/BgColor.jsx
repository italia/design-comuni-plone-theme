import React from 'react';
import PropTypes from 'prop-types';
import { ColorListWidget } from '@italia/components/ItaliaTheme';
import { defineMessages, useIntl } from 'react-intl';
import listing_bg_colors from '@italia/components/ItaliaTheme/Blocks/Listing/Options/BgColor/colors';

const messages = defineMessages({
  bg_color: {
    id: 'block_bg_color',
    defaultMessage: 'Colore di sfondo',
  },
});

const BgColor = ({ data, block, onChangeBlock, required = false }) => {
  const intl = useIntl();

  return data.show_block_bg ? (
    <ColorListWidget
      id="bg_color"
      title={intl.formatMessage(messages.bg_color)}
      value={data.bg_color}
      onChange={(name, value) => {
        onChangeBlock(block, {
          ...data,
          [name]: value,
        });
      }}
      intl={intl}
      colors={listing_bg_colors}
    />
  ) : null;
};

BgColor.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default BgColor;
