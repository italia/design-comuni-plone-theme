/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';

import { SelectWidget } from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';
import DefaultOptions from '@italia/components/ItaliaTheme/Blocks/Listing/Options/DefaultOptions';
import TemplatesOptions from '@italia/components/ItaliaTheme/Blocks/Listing/Options/TemplatesOptions';

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
});

export const SimpleCardTemplateAppearance_COMPACT = 'compact';

const SimpleCardTemplateOptions = (props) => {
  const { data, block, onChangeBlock } = props;
  const intl = useIntl();

  return (
    <>
      <SelectWidget
        id="appearance"
        title={intl.formatMessage(messages.appearance)}
        required={false}
        description={intl.formatMessage(
          messages.simplecard_listing_appearance_description,
        )}
        value={data.appearance || ''}
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
      <DefaultOptions {...props} />

      {data.appearance === SimpleCardTemplateAppearance_COMPACT ? (
        <TemplatesOptions fields={['show_icon']} {...props} />
      ) : (
        <TemplatesOptions
          fields={[
            'show_icon',
            'hide_dates',
            'show_section',
            'show_type',
            'show_description',
            'show_detail_link',
            'show_path_filters',
          ]}
          fieldsConfig={{
            hide_dates: { default: false },
            show_type: { default: false },
            show_detail_link: { default: false },
            show_path_filters: { default: false },
          }}
          {...props}
        />
      )}
    </>
  );
};

SimpleCardTemplateOptions.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default SimpleCardTemplateOptions;
