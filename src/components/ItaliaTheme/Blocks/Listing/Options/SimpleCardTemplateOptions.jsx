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

export const SimpleCardTemplateAppearance_COMPACT = 'compact';

const SimpleCardTemplateOptions = ({
  data,
  block,
  onChangeBlock,
  required = false,
}) => {
  const intl = useIntl();
  useEffect(() => {
    onChangeBlock(block, {
      ...data,
      show_icon: data.show_icon == undefined ? true : data.show_icon,
      show_section:
        data.show_section === undefined
          ? data.appearance !== SimpleCardTemplateAppearance_COMPACT
            ? true
            : undefined
          : data.show_section,
      show_description:
        data.show_description === undefined
          ? data.appearance !== SimpleCardTemplateAppearance_COMPACT
            ? true
            : undefined
          : data.show_description,
      show_detail_link:
        data.show_detail_link === undefined ? undefined : data.show_detail_link,
    });
  }, [data.appearance]);

  return (
    <>
      <SelectWidget
        id="appearance"
        title={intl.formatMessage(messages.appearance)}
        required={false}
        description={intl.formatMessage(
          messages.simplecard_listing_appearance_description,
        )}
        value={data.appearance}
        onChange={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
        choices={[
          [
            SimpleCardTemplateAppearance_COMPACT,
            intl.formatMessage(messages.simplecard_listing_appearance_compact),
          ],
        ]}
      />

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
        id="show_icon"
        title={intl.formatMessage(messages.show_icon)}
        value={data.show_icon ? data.show_icon : false}
        onChange={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
      />

      {data.appearance !== SimpleCardTemplateAppearance_COMPACT && (
        <CheckboxWidget
          id="show_section"
          title={intl.formatMessage(messages.show_section)}
          value={data.show_section ? data.show_section : false}
          onChange={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
        />
      )}
      {data.appearance !== SimpleCardTemplateAppearance_COMPACT && (
        <CheckboxWidget
          id="show_description"
          title={intl.formatMessage(messages.show_description)}
          value={data.show_description ? data.show_description : false}
          onChange={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
        />
      )}
      {data.appearance !== SimpleCardTemplateAppearance_COMPACT && (
        <>
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
        </>
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

SimpleCardTemplateOptions.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default SimpleCardTemplateOptions;
