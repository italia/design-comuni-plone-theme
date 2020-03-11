import React from 'react';
import PropTypes from 'prop-types';
import { blocks as customBlocks } from '@design/config';
import TemplateWidget from './TemplateWidget';

const RssStyle = ({ data, block, onChangeBlock, required = false }) => {
  const templatesConfig = customBlocks.blocksConfig.RssBlock.templates;
  console.log(Object.keys(templatesConfig).length);
  if (templatesConfig && Object.keys(templatesConfig).length > 1) {
    return (
      <>
        <div className="sidebar-listing-data listing-style">
          <TemplateWidget
            data={data}
            block={block}
            onChangeBlock={onChangeBlock}
            required={required}
          />
        </div>
      </>
    );
  }

  return null;
};

RssStyle.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default RssStyle;
