/*
 * CUSTOMIZATIONS:
 * - customized to use design-react-kit elements instead semantic-ui elements
 */
import React from 'react';
import { Container as DesignContainer } from 'design-react-kit';

/*This component facilitates the customization of Container*/

const Container = (props) => {
  return <DesignContainer {...props} />;
};

export default Container;
