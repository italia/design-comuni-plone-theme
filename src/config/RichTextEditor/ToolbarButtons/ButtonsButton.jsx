import React from 'react';
import createBlockStyleButton from 'draft-js-buttons/lib/utils/createBlockStyleButton';

import Icon from '@plone/volto/components/theme/Icon/Icon';
import circleMenuSVG from '@plone/volto/icons/circle-menu.svg';

const ButtonsButton = createBlockStyleButton({
  blockType: 'buttons',
  children: <Icon name={circleMenuSVG} size="24px" />,
});

export default React.memo(ButtonsButton);
