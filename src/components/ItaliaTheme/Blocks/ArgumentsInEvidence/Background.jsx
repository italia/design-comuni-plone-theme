import React from 'react';

const Background = ({ inEditMode, ...props }) => (
  <div
    className={`argumentInEvidence-background ${
      inEditMode ? 'full-width' : ''
    }`}
    {...props}
  />
);

export default Background;
