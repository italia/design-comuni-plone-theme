  
import React from 'react'
import BodyWrapper from './BodyWrapper'

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

export default Edit;

