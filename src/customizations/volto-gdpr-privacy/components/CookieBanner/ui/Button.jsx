import React from 'react';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

/*This component facilitates the customization of buttons*/

const Button = (props) => {
  let { className, designReactKit, ...otherProps } = props;
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
  const { Button: DesignButton } = designReactKit;

  return <DesignButton {...otherProps} />;
};

export default injectLazyLibs(['designReactKit'])(Button);
