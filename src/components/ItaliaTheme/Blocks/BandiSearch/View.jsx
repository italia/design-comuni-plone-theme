import React from 'react';
import PropTypes from 'prop-types';
import Body from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/BandiSearch/Body';
import { getBaseUrl } from '@plone/volto/helpers';

const View = ({ data, id, path, properties, block }) => {
  return (
    <div className="bandi-search">
      <Body
        data={data}
        id={id}
        path={getBaseUrl(path)}
        properties={properties}
        block={block}
      />
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
};

export default View;
