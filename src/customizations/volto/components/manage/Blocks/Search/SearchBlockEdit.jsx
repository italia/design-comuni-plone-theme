/* CUSTOMIZATIONS:
  - Agid styling
  - Use a limited templates subsets
*/
import React, { useEffect } from 'react';
import { defineMessages } from 'react-intl';
import { compose } from 'redux';

import { SidebarPortal, BlockDataForm } from '@plone/volto/components';
import { addExtensionFieldToSchema } from '@plone/volto/helpers/Extensions/withBlockSchemaEnhancer';
import { getBaseUrl } from '@plone/volto/helpers';
import config from '@plone/volto/registry';

import { SearchBlockViewComponent } from '@plone/volto/components/manage/Blocks/Search/SearchBlockView';
import Schema from '@plone/volto/components/manage/Blocks/Search/schema';
import {
  withSearch,
  withQueryString,
} from '@plone/volto/components/manage/Blocks/Search/hocs';
import { cloneDeep } from 'lodash';

const messages = defineMessages({
  template: {
    id: 'Results template',
    defaultMessage: 'Results template',
  },
});

const SearchBlockEdit = (props) => {
  const {
    block,
    onChangeBlock,
    data,
    selected,
    intl,
    onTriggerSearch,
    querystring = {},
  } = props;
  const { sortable_indexes = {} } = querystring;

  let schema = Schema({ data, intl });
  // Pick a subset of all available templates, not all can be used
  // and not all look good/useful here
  const listingVariations =
    config.blocks.blocksConfig?.listing?.variations?.filter((variation) =>
      config.settings.searchBlockTemplates?.includes(variation.id),
    );
  schema = addExtensionFieldToSchema({
    schema,
    name: 'listingBodyTemplate',
    items: listingVariations,
    intl,
    title: { id: intl.formatMessage(messages.template) },
  });

  let activeItem = listingVariations.find(
    (item) => item.id === data.listingBodyTemplate,
  );

  const listingSchemaEnhancer = activeItem?.schemaEnhancer;
  if (listingSchemaEnhancer)
    schema = listingSchemaEnhancer({
      schema: cloneDeep(schema),
      data,
      intl,
    });

  const { query = {} } = data || {};
  // We don't need deep compare here, as this is just json serializable data.
  const deepQuery = JSON.stringify(query);
  useEffect(() => {
    onTriggerSearch();
  }, [deepQuery, onTriggerSearch]);

  return (
    <>
      <SearchBlockViewComponent
        {...props}
        path={getBaseUrl(props.pathname)}
        mode="edit"
      />
      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          onChangeBlock={onChangeBlock}
          formData={data}
        />
      </SidebarPortal>
    </>
  );
};

export default compose(withQueryString, withSearch())(SearchBlockEdit);
