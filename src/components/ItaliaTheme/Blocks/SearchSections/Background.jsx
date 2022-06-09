import React from 'react';

const Background = (props) => (
  <>
    <div className="searchSections-background">
      <figure className="img-wrapper">
        {props?.image && (
          <img
            src={`${props?.image?.getURL}/@@images/image`}
            alt="imgalt"
            title="imgtitle"
          ></img>
        )}
      </figure>
    </div>
  </>
);

export default Background;
