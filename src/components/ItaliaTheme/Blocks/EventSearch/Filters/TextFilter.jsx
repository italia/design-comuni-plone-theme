import React from 'react';

const TextFilter = ({ value, id, onChange }) => {
  return (
    <div className="mr-3 my-1" style={{ minWidth: '38%', flex: 1 }}>
      <input
        type="text"
        placeholder="Inserici un valore"
        value={value}
        onChange={(e, data) => {
          onChange(e.target.value, id);
        }}
      />
    </div>
  );
};

export default TextFilter;
