import React from 'react';
import createBlockStyleButton from 'draft-js-buttons/lib/utils/createBlockStyleButton';
import Icon from '@plone/volto/components/theme/Icon/Icon';

import DraftJsDropdownButton from './DraftJsDropdownButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import calloutSVG from '@plone/volto/icons/megaphone.svg';

const CalloutsButton = (props) => {
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

  return (
    <DraftJsDropdownButton
      {...props}
      optionsList={options}
      content={<Icon name={calloutSVG} size="24px" />}
    />
  );
};

export default React.memo(CalloutsButton);
