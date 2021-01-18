import React from 'react';
import createBlockStyleButton from 'draft-js-buttons/lib/utils/createBlockStyleButton';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import alignCenterSVG from '@plone/volto/icons/align-center.svg';
import alignLeftSVG from '@plone/volto/icons/align-left.svg';
import alignRightSVG from '@plone/volto/icons/align-right.svg';
import alignJustifySVG from '@plone/volto/icons/align-justify.svg';

import DraftJsDropdownButton from './DraftJsDropdownButton';

const AlignButton = (props) => {
  const options = [
    {
      block_type: 'align-left',
      value: createBlockStyleButton({
        blockType: 'align-left',
        children: <Icon name={alignLeftSVG} size="24px" />,
      }),
      contentWhenSelected: <Icon name={alignLeftSVG} size="24px" />,
    },
    {
      block_type: 'align-center',
      value: createBlockStyleButton({
        blockType: 'align-center',
        children: <Icon name={alignCenterSVG} size="24px" />,
      }),
      contentWhenSelected: <Icon name={alignCenterSVG} size="24px" />,
    },
    {
      block_type: 'align-right',
      value: createBlockStyleButton({
        blockType: 'align-right',
        children: <Icon name={alignRightSVG} size="24px" />,
      }),
      contentWhenSelected: <Icon name={alignRightSVG} size="24px" />,
    },
    {
      block_type: 'align-justify',
      value: createBlockStyleButton({
        blockType: 'align-justify',
        children: <Icon name={alignJustifySVG} size="24px" />,
      }),
      contentWhenSelected: <Icon name={alignJustifySVG} size="24px" />,
    },
  ];

  return (
    <DraftJsDropdownButton
      {...props}
      optionsList={options}
      content={<Icon name={alignLeftSVG} size="24px" />}
    />
  );
};

export default React.memo(AlignButton);
