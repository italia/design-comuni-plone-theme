import ListingBlockSchema from '@plone/volto/components/manage/Blocks/Listing/schema';

export const schemaListing = (props) => {
  const baseSchema = ListingBlockSchema(props);

  baseSchema.fieldsets[1].fields.push('linkAlign');

  baseSchema.properties.linkAlign = {
    title: 'Allinea bottone a destra',
    type: 'boolean',
  };

  return baseSchema;
};
