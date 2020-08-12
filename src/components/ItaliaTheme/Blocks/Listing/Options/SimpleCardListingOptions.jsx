import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SelectWidget, CheckboxWidget } from '@plone/volto/components';
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
});

export const SimpleCardListingAppearance_COMPACT = 'compact';

const SimpleCardListingOptions = ({
  data,
  block,
  onChangeBlock,
  required = false,
}) => {
  const intl = useIntl();
  useEffect(() => {
    onChangeBlock(block, {
      ...data,
      show_icon: true,
      show_section:
        data.appearance !== SimpleCardListingAppearance_COMPACT
          ? true
          : undefined,
      show_description:
        data.appearance !== SimpleCardListingAppearance_COMPACT
          ? true
          : undefined,
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
            SimpleCardListingAppearance_COMPACT,
            intl.formatMessage(messages.simplecard_listing_appearance_compact),
          ],
        ]}
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

      {data.appearance !== SimpleCardListingAppearance_COMPACT && (
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
      {data.appearance !== SimpleCardListingAppearance_COMPACT && (
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
      {data.appearance !== SimpleCardListingAppearance_COMPACT && (
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
      )}
    </>
  );
};

SimpleCardListingOptions.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default SimpleCardListingOptions;
