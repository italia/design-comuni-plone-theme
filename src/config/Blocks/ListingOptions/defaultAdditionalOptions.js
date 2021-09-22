// import { defineMessages } from 'react-intl';
// import { addSchemaField } from '@italia/config/Blocks/ListingOptions';
// import config from '@plone/volto/registry';

//const messages = defineMessages({
// title: {
//   id: 'Titolo',
//   defaultMessage: 'Titolo',
// },
//});

/** DEFAULT **/

const addDefaultAdditionalOptions = (schema, formData, intl, position = 0) => {
  let pos = position;
  // addSchemaField(
  //   schema,
  //   'title',
  //   intl.formatMessage(messages.title),
  //   null,
  //   null,
  //   pos,
  // );
  // pos++;

  return pos;
};

export default addDefaultAdditionalOptions;
