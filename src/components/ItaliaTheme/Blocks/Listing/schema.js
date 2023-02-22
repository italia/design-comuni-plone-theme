import { defineMessages } from 'react-intl';

import ListingBlockSchema from '@plone/volto/components/manage/Blocks/Listing/schema';

export const schemaListing = (props) => {
  const intl = props.intl;
  const baseSchema = ListingBlockSchema(props);

  const defaultFieldset = baseSchema.fieldsets.find(
    (fieldset) => fieldset.id === 'default',
  );
  if (defaultFieldset) {
    defaultFieldset.fields = defaultFieldset.fields.filter(
      (field) => field !== 'headline' && field !== 'headlineTag',
    );
  }

  const findFieldset = (fieldset) => {
    return fieldset.id === 'linkmore';
  };

  const linkMoreFieldset = baseSchema.fieldsets.find(findFieldset);
  linkMoreFieldset.fields.push('linkAlign');

  baseSchema.properties.linkAlign = {
    title: intl.formatMessage(messages.alignButton),
    type: 'boolean',
  };

  return baseSchema;
};

const messages = defineMessages({
  alignButton: {
    id: 'alignButton',
    defaultMessage: 'Allinea bottone a destra',
  },
});
