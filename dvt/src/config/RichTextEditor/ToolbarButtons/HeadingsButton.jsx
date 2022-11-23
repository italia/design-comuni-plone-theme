import React from 'react';

import Icon from '@plone/volto/components/theme/Icon/Icon';
import textSVG from '@plone/volto/icons/text.svg';
import DraftJsDropdownButton from './DraftJsDropdownButton';

const HeadingsButton = (props) => {
  const createBlockStyleButton = props.draftJsCreateBlockStyleButton.default;

  const options = [
    {
      block_type: 'header-two',
      value: createBlockStyleButton({
        blockType: 'header-two',
        children: <h2>H2</h2>,
      }),
    },
    {
      block_type: 'header-three',
      value: createBlockStyleButton({
        blockType: 'header-three',
        children: <h3>h3</h3>,
      }),
    },
    {
      block_type: 'header-four',
      value: createBlockStyleButton({
        blockType: 'header-four',
        children: <h4>h4</h4>,
      }),
    },
    {
      block_type: 'header-five',
      value: createBlockStyleButton({
        blockType: 'header-five',
        children: <h5>h5</h5>,
      }),
    },
    {
      block_type: 'header-six',
      value: createBlockStyleButton({
        blockType: 'header-six',
        children: <h6>h6</h6>,
      }),
    },
  ];

  return (_props) => (
    <DraftJsDropdownButton
      {..._props}
      optionsList={options}
      content={<Icon name={textSVG} size="24px" />}
    />
  );
};

export default HeadingsButton;
