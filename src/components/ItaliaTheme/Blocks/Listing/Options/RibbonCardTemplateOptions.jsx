import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextWidget, CheckboxWidget } from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'Titolo',
    defaultMessage: 'Titolo',
  },
  show_detail_link: {
    id: 'show_detail_link',
    defaultMessage: 'Mostra il link al dettaglio',
  },
  show_only_first_ribbon: {
    id: 'show_only_first_ribbon',
    defaultMessage: 'Mostra il nastro solo sulla prima card',
  },
  detail_link_label: {
    id: 'detail_link_label',
    defaultMessage: 'Testo per il link al dettaglio',
  },
  show_block_bg: {
    id: 'Mostra lo sfondo del blocco',
    defaultMessage: 'Mostra lo sfondo del blocco',
  },
});

const RibbonCardTemplateOptions = ({
  data,
  block,
  onChangeBlock,
  required = false,
}) => {
  const intl = useIntl();
  useEffect(() => {
    if (!data.show_detail_link) {
      onChangeBlock(block, {
        ...data,
        detail_link_label: undefined,
      });
    }
  }, [data.show_detail_link]);

  return (
    <>
      <TextWidget
        id="title"
        title={intl.formatMessage(messages.title)}
        required={false}
        value={data.title}
        onChange={(name, value) => {
          onChangeBlock(block, {
            ...data,
            [name]: value,
          });
        }}
      />

      <CheckboxWidget
        id="show_only_first_ribbon"
        title={intl.formatMessage(messages.show_only_first_ribbon)}
        value={
          data.show_only_first_ribbon ? data.show_only_first_ribbon : false
        }
        onChange={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
      />
      <CheckboxWidget
        id="show_detail_link"
        title={intl.formatMessage(messages.show_detail_link)}
        value={data.show_detail_link ? data.show_detail_link : false}
        onChange={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
      />
      {data.show_detail_link && (
        <TextWidget
          id="detail_link_label"
          title={intl.formatMessage(messages.detail_link_label)}
          required={false}
          value={data.detail_link_label}
          onChange={(name, value) => {
            onChangeBlock(block, {
              ...data,
              [name]: value,
            });
          }}
        />
      )}

      <CheckboxWidget
        id="show_block_bg"
        title={intl.formatMessage(messages.show_block_bg)}
        value={data.show_block_bg ? data.show_block_bg : false}
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

RibbonCardTemplateOptions.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default RibbonCardTemplateOptions;
