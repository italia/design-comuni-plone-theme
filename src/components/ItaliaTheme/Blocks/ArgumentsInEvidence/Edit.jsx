  
import React from 'react'
import BodyWrapper from './BodyWrapper'
import PropTypes from 'prop-types';

const Edit = ({ data, id, block, selected, intl, onChangeBlock }) => {
  return (
    <BodyWrapper 
      data={data}
      inEditMode={true}
      draggable={true}
      block={block}
      onChangeBlock={onChangeBlock}
      selected={selected}
      intl={intl}
    />
  )
}
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Edit.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
  block: PropTypes.string.isRequired,
  selected: PropTypes.any,
  intl: PropTypes.any,
  onChangeBlock: PropTypes.func.isRequired,
};

export default Edit;

