import React from 'react';
import PropTypes from 'prop-types';
import { blocks } from '~/config';
import TemplateWidget from '@plone/volto/components/manage/Blocks/Listing/TemplateWidget';
import SimpleCardTemplateOptions from '@italia/components/ItaliaTheme/Blocks/Listing/Options/SimpleCardTemplateOptions';
import RibbonCardTemplateOptions from '@italia/components/ItaliaTheme/Blocks/Listing/Options/RibbonCardTemplateOptions';

import DefaultOptions from '@italia/components/ItaliaTheme/Blocks/Listing/Options/DefaultOptions';

const ListingStyle = ({ data, block, onChangeBlock, required = false }) => {
  const templatesConfig = blocks.blocksConfig.listing.templates;

  if (templatesConfig && Object.keys(templatesConfig).length > 1) {
    return (
      <div className="sidebar-listing-data listing-style">
        <TemplateWidget
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
          required={required}
        />

        {data.template &&
          ['default', 'imageGallery'].indexOf(data.template) < 0 && (
            <DefaultOptions
              data={data}
              block={block}
              onChangeBlock={onChangeBlock}
            />
          )}

        {(!data || !data.template || data.template === 'default') && (
          <SimpleCardTemplateOptions
            data={data}
            block={block}
            onChangeBlock={onChangeBlock}
          />
        )}
        {data.template === 'ribbonCardTemplate' && (
          <RibbonCardTemplateOptions
            data={data}
            block={block}
            onChangeBlock={onChangeBlock}
          />
        )}
      </div>
    );
  }

  return null;
};

ListingStyle.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default ListingStyle;
