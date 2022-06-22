import React from 'react';

import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

/*This component facilitates the customization of Container*/

const Container = (props) => {
  const { Container: DesignContainer } = props.designReactKit;

  return <DesignContainer {...props} />;
};

export default injectLazyLibs(['designReactKit'])(Container);
