import React from 'react';
import PropTypes from 'prop-types';
import { ColorListWidget } from '@italia/components/ItaliaTheme';
import { defineMessages, useIntl } from 'react-intl';
import config from '@plone/volto/registry';

const messages = defineMessages({
  items_color: {
    id: 'listing_items_color',
    defaultMessage: "Colore dell'elemento",
  },
});

const ItemsColor = ({ data, block, onChangeBlock, required = false }) => {
  const intl = useIntl();
  let listing_items_colors =
    config.blocks.blocksConfig.listing?.listing_items_colors || [];
  return (
    <ColorListWidget
      id="items_color"
      title={intl.formatMessage(messages.items_color)}
      value={data.items_color}
      onChange={(name, value) => {
        onChangeBlock(block, {
          ...data,
          [name]: value,
        });
      }}
      intl={intl}
      colors={listing_items_colors}
    />
  );
};

ItemsColor.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default ItemsColor;
