import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Container } from 'design-react-kit/dist/design-react-kit';
import SimpleCardTemplateDefault from '@italia/components/ItaliaTheme/Blocks/Listing/SimpleCard/SimpleCardTemplateDefault';
import SimpleCardTemplateCompact from '@italia/components/ItaliaTheme/Blocks/Listing/SimpleCard/SimpleCardTemplateCompact';

import { SimpleCardTemplateAppearance_COMPACT } from '@italia/components/ItaliaTheme/Blocks/Listing/Options/SimpleCardTemplateOptions';

const SimpleCardTemplate = (data) => {
  let content = null;
  switch (data.appearance) {
    case SimpleCardTemplateAppearance_COMPACT:
      content = <SimpleCardTemplateCompact {...data} />;
      break;
    default:
      content = <SimpleCardTemplateDefault {...data} />;
  }

  return (
    <div
      className={cx('', {
        'public-ui': data.isEditMode,
      })}
    >
      <Container className="px-4">{content}</Container>
    </div>
  );
};

SimpleCardTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkMore: PropTypes.any,
};

export default SimpleCardTemplate;
