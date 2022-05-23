import React from 'react';

import Icon from '@plone/volto/components/theme/Icon/Icon';
import underlineSVG from '@plone/volto/icons/underline.svg';

const UnderlineButton = (props) => {
  const createInlineStyleButton = props.draftJsCreateInlineStyleButton.default;
  return createInlineStyleButton({
    style: 'UNDERLINE',
    children: <Icon name={underlineSVG} size="24px" />,
  });
};

export default UnderlineButton;
