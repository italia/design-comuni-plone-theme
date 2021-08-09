import React from 'react';

const Background = (props) => (
  <div
    className={`argumentInEvidence-background ${
      props.inEditMode ? 'full-width' : ''
    }`}
    {...props}
  />
);

export default Background;
