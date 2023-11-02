import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import Icon from '@plone/volto/components/theme/Icon/Icon';

// import DraftJsDropdownButton from 'design-comuni-plone-theme/config/RichTextEditor/ToolbarButtons/DraftJsDropdownButton';

import formatSVG from '@plone/volto/icons/format.svg';

const messages = defineMessages({
  TextSizeButton: {
    id: 'text-size-button',
    defaultMessage: 'Dimensione del testo',
  },
});

/*
const TextSizeButton = (props) => {
  const createInlineStyleButton = props.draftJsCreateInlineStyleButton.default;

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

  return (_props)=>(
    <DraftJsDropdownButton
      {..._props}
      optionsList={options}
      content={<Icon name={formatSVG} size="1em" />}
    />
  );
};
*/

const ButtonIcon = (props) => {
  const intl = useIntl();
  return (
    <Icon
      name={formatSVG}
      size="1.25em"
      title={intl.formatMessage(messages.TextSizeButton)}
    />
  );
};

const TextSizeButton = (props) => {
  const createInlineStyleButton = props.draftJsCreateInlineStyleButton.default;
  return createInlineStyleButton({
    style: 'TEXT_LARGER',
    children: <ButtonIcon />,
  });
};
export default TextSizeButton;
