import React from 'react';

const Background = (props) => (
  <div
    className="searchSections-background"
    style={{
      backgroundImage: 'url(' + props?.image?.getURL + '/@@images/image)',
    }}
  />
);

export default Background;
