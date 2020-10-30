import React from 'react';
import PropTypes from 'prop-types';
import Body from '@italia/components/ItaliaTheme/Blocks/Calendar/Body'
import { getBaseUrl } from '@plone/volto/helpers';

const View = ({ data, id, path,properties, block }) => {
  return (
    <div className="block full-width">
      <div className="calendar">
        <Body data={data} 
              path={getBaseUrl(path)}
              properties={properties}
              block={block}/>
      </div>
    </div>
  );
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired
};

export default View;