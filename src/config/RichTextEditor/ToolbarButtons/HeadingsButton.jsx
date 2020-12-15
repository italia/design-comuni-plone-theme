import React from 'react';
import createBlockStyleButton from 'draft-js-buttons/lib/utils/createBlockStyleButton';

import DraftJsDropdownButton from './DraftJsDropdownButton';

const HeadingsButton = (props) => {
  const headings = [
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

  return <DraftJsDropdownButton {...props} optionsList={headings} />;
};

export default HeadingsButton;
