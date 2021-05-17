import React from 'react';
import createInlineStyleButton from 'draft-js-buttons/lib/utils/createInlineStyleButton';
import Icon from '@plone/volto/components/theme/Icon/Icon';

// import DraftJsDropdownButton from '@italia/config/RichTextEditor/ToolbarButtons/DraftJsDropdownButton';

import formatSVG from '@plone/volto/icons/format.svg';

/*
const TextSizeButton = (props) => {
  const options = [
    {
      block_type: 'text-larger',
      value: createInlineStyleButton({
        style: 'TEXT_LARGER',
        children: <Icon name={formatSVG} size="1.25em" />,
      }),
    },
    {
      block_type: 'text-smaller',
      value: createInlineStyleButton({
        style: 'TEXT_SMALLER',
        children: <Icon name={formatSVG} size="0.75em" />,
      }),
    },
  ];

  return (
    <DraftJsDropdownButton
      {...props}
      optionsList={options}
      content={<Icon name={formatSVG} size="1em" />}
    />
  );
};
*/

const TextSizeButton = createInlineStyleButton({
  style: 'TEXT_LARGER',
  children: <Icon name={formatSVG} size="1.25em" title="Più grande" />,
});

export default React.memo(TextSizeButton);
