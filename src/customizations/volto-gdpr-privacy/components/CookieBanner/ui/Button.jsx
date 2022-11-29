/*
 * CUSTOMIZATIONS:
 * - customized to use design-react-kit elements instead semantic-ui elements
 * */

import React from 'react';

import { Button as DesignButton } from 'design-react-kit';

/*This component facilitates the customization of buttons*/

const Button = (props) => {
  let { className, ...otherProps } = props;
  className = (className || '') + ' gdpr-privacy-banner-button';
  if (props.className?.indexOf('primary') >= 0) {
    otherProps.color = 'primary';
  }
  if (props.className?.indexOf('close-button') >= 0) {
    otherProps.color = 'link';
    otherProps.outline = true;
  }

  delete otherProps.basic;

  otherProps.className = className;
  return <DesignButton {...otherProps} />;
};

export default Button;
