import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CheckboxWidget, SelectWidget } from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  show_map_full_width: {
    id: 'show_map_full_width',
    defaultMessage: 'Mostra la mappa a tutta larghezza',
  },
  map_size: {
    id: 'Dimensione della mappa',
    defaultMessage: 'Dimensione della mappa',
  },
  map_size_small: {
    id: 'map_size_small',
    defaultMessage: 'Piccola',
  },
  map_size_medium: {
    id: 'map_size_medium',
    defaultMessage: 'Media',
  },
  map_size_large: {
    id: 'map_size_large',
    defaultMessage: 'Grande',
  },
});

const MapTemplateOptions = ({
  data,
  block,
  onChangeBlock,
  required = false,
}) => {
  const intl = useIntl();
  useEffect(() => {
    if (!data.map_size) {
      onChangeBlock(block, {
        ...data,
        map_size: 'medium',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <CheckboxWidget
        id="show_map_full_width"
        title={intl.formatMessage(messages.show_map_full_width)}
        value={data.show_map_full_width ? data.show_map_full_width : false}
        onChange={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
      />

      <SelectWidget
        id="map_size"
        title={intl.formatMessage(messages.map_size)}
        required={false}
        value={data.map_size}
        onChange={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
        choices={[
          ['small', intl.formatMessage(messages.map_size_small)],
          ['medium', intl.formatMessage(messages.map_size_medium)],
          ['large', intl.formatMessage(messages.map_size_large)],
        ]}
      />
    </>
  );
};

MapTemplateOptions.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default MapTemplateOptions;
