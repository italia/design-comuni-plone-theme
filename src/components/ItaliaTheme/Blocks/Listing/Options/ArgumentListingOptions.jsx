import React from 'react';
import PropTypes from 'prop-types';
import { SelectWidget } from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  appearance: {
    id: 'Aspetto',
    defaultMessage: 'Aspetto',
  },
  argument_listing_appearance_description: {
    id: 'Listing argomenti: descrizione del campo Aspetto',
    defaultMessage:
      'Qui puoi selezionare, per la lista degli argomenti, un aspetto diverso da quello di default.',
  },
  argument_listing_appearance_compact: {
    id: 'argument_listing_appearance_compact',
    defaultMessage: 'Compatto',
  },
});

export const ArgumentListingAppearance_COMPACT = 'compact';

const ArgumentListingOptions = ({
  data,
  block,
  onChangeBlock,
  required = false,
}) => {
  const intl = useIntl();

  return (
    <>
      <SelectWidget
        id="appearance"
        title={intl.formatMessage(messages.appearance)}
        required={false}
        description={intl.formatMessage(
          messages.argument_listing_appearance_description,
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
            ArgumentListingAppearance_COMPACT,
            intl.formatMessage(messages.argument_listing_appearance_compact),
          ],
        ]}
      />
    </>
  );
};

ArgumentListingOptions.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default ArgumentListingOptions;
