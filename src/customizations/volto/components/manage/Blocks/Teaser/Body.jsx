/*
Customizations:
- remove unnecessary hasType check and hasType value in dependencies, supported content type is ALL for our use case
- fix relative import
*/

import React from 'react';
import PropTypes from 'prop-types';
import DefaultBody from '@plone/volto/components/manage/Blocks/Teaser/DefaultBody';
import config from '@plone/volto/registry';

const TeaserBody = (props) => {
  const { variation } = props;

  // Compatible with the previous version of the component registry
  // and the Volto 16 one.
  const BodyComponent =
    config.getComponent({ name: 'Teaser' }).component ||
    variation?.template ||
    DefaultBody;

  return <BodyComponent {...props} />;
};

TeaserBody.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
};

export default TeaserBody;
