import React from 'react';
import PropTypes from 'prop-types';
import Body from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Calendar/Body';
import { getBaseUrl } from '@plone/volto/helpers';

const View = ({ data, path, id }) => {
  return (
    <div className="block full-width">
      <div className="calendar">
        <Body data={data} path={getBaseUrl(path)} block={id} />
      </div>
    </div>
  );
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default View;
