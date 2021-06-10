/**
 * ViewBlock.
 * @module components/ItaliaTheme/Blocks/Accordion/Block/ViewBlock
 */

import React from 'react';
import PropTypes from 'prop-types';
import redraft from 'redraft';
import config from '@plone/volto/registry';

/**
 * ViewBlock class.
 * @class ViewBlock
 * @extends Component
 */
const ViewBlock = ({ data, isOpen, toggle, id, index }) => {
  return (
    <div className="block-number">
      {data.title && (
        <div className="subblock-title text-monospace">
          {redraft(
            data.title,
            config.settings.ToHTMLRenderers,
            config.settings.ToHTMLOptions,
          )}
        </div>
      )}
      {data.text && (
        <div className="subblock-text">
          {redraft(
            data.text,
            config.settings.ToHTMLRenderers,
            config.settings.ToHTMLOptions,
          )}
        </div>
      )}
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ViewBlock.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ViewBlock;
