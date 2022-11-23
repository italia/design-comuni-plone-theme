import React from 'react';

import Icon from '@plone/volto/components/theme/Icon/Icon';
import circleMenuSVG from '@plone/volto/icons/circle-menu.svg';

const ButtonsButton = (props) => {
  const createBlockStyleButton = props.draftJsCreateBlockStyleButton.default;
  return createBlockStyleButton({
    blockType: 'buttons',
    children: <Icon name={circleMenuSVG} size="24px" />,
  });
};

export default ButtonsButton;
