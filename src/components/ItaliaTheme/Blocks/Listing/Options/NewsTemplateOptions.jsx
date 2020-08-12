import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  SelectWidget,
  CheckboxWidget,
  TextWidget,
} from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  appearance: {
    id: 'Aspetto',
    defaultMessage: 'Aspetto',
  },
  simplecard_listing_appearance_description: {
    id: 'simplecard_listing_appearance_description',
    defaultMessage:
      "Qui puoi selezionare, per il template 'Card semplice', un aspetto diverso da quello di default.",
  },
  simplecard_listing_appearance_compact: {
    id: 'simplecard_listing_appearance_compact',
    defaultMessage: 'Compatto',
  },
  title: {
    id: 'Titolo',
    defaultMessage: 'Titolo',
  },
  show_icon: {
    id: 'show_icon',
    defaultMessage: "Mostra l'icona",
  },
  show_section: {
    id: 'show_section',
    defaultMessage: 'Mostra la sezione',
  },
  show_description: {
    id: 'show_description',
    defaultMessage: 'Mostra la descrizione',
  },
  show_detail_link: {
    id: 'show_detail_link',
    defaultMessage: 'Mostra il link al dettaglio',
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

const NewsTemplateOptions = ({
  data,
  block,
  onChangeBlock,
  required = false,
}) => {
  const intl = useIntl();

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

NewsTemplateOptions.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default NewsTemplateOptions;
