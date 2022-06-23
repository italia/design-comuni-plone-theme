import React from 'react';
import Icon from '@plone/volto/components/theme/Icon/Icon';

import DraftJsDropdownButton from './DraftJsDropdownButton';
import { FontAwesomeIcon } from '@italia/components/ItaliaTheme';

import calloutSVG from '@plone/volto/icons/megaphone.svg';

const CalloutsButton = (props) => {
  const createBlockStyleButton = props.draftJsCreateBlockStyleButton.default;

  const options = [
    {
      block_type: 'callout',
      value: createBlockStyleButton({
        blockType: 'callout',
        children: <FontAwesomeIcon icon={['far', 'square']} />,
      }),
    },
    {
      block_type: 'callout-bg',
      value: createBlockStyleButton({
        blockType: 'callout-bg',
        children: <FontAwesomeIcon icon={['fas', 'square']} />,
      }),
    },
  ];

  return (_props) => (
    <DraftJsDropdownButton
      {..._props}
      optionsList={options}
      content={<Icon name={calloutSVG} size="24px" />}
    />
  );
};

export default CalloutsButton;
