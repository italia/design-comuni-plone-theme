import React from 'react';
import createBlockStyleButton from 'draft-js-buttons/lib/utils/createBlockStyleButton';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import textSVG from '@plone/volto/icons/text.svg';
import DraftJsDropdownButton from './DraftJsDropdownButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const CalloutsButton = (props) => {
  const options = [
    {
      block_type: 'callout',
      value: createBlockStyleButton({
        blockType: 'callout',
        children: <FontAwesomeIcon icon="square" className={`far `} />,
      }),
    },
    {
      block_type: 'callout-bg',
      value: createBlockStyleButton({
        blockType: 'callout-bg',
        children: <FontAwesomeIcon icon="square" className={`fas `} />,
      }),
    },
  ];

  return (
    <DraftJsDropdownButton
      {...props}
      optionsList={options}
      content={<Icon name={textSVG} size="24px" />}
    />
  );
};

export default CalloutsButton;
