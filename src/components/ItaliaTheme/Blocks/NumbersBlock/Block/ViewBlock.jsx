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
        <div className="subblock-title font-monospace">
          {redraft(
            data.title,
            config.settings.richtextViewSettings.ToHTMLRenderers,
            config.settings.richtextViewSettings.ToHTMLOptions,
          )}
        </div>
      )}
      {data.text && (
        <div className="subblock-text">
          {redraft(
            data.text,
            config.settings.richtextViewSettings.ToHTMLRenderers,
            config.settings.richtextViewSettings.ToHTMLOptions,
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
