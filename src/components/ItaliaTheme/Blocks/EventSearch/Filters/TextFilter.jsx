import React from 'react';

const TextFilter = ({ value, id, onChange }) => {
  return (
    <div className="mr-lg-3 my-2 my-lg-1 filter-wrapper text-filter">
      <input
        type="text"
        placeholder="Inserici un valore"
        value={value}
        onChange={(e, data) => {
          onChange(id, e.target.value ?? '');
        }}
      />
    </div>
  );
};

export default TextFilter;
