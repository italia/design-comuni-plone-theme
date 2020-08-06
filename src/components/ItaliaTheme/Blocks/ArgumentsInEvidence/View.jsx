import React from 'react';
import PropTypes from 'prop-types';
import BodyWrapper from './BodyWrapper'
import { useIntl } from 'react-intl';

const View = ({ data, id }) => {
  const currentIntl =  useIntl();

  return (
    <div className="block full-width">
      <BodyWrapper 
        data={data}
        inEditMode={false}
        draggable={false}
        intl={currentIntl}
      />
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
  id: PropTypes.string.isRequired,
};

export default View;