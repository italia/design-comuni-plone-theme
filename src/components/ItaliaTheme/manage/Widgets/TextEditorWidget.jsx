/**
 * Edit text block.
 * @module components/Widgets/TextEditorWidget/TextEditorWidget
 */

import React from 'react';
import { defineMessages } from 'react-intl';
import PropTypes from 'prop-types';

import config from '@plone/volto/registry';
import { TextEditorDraftJSWidget } from './TextEditorDraftJSWidget';
import { TextBlockEdit } from '@plone/volto-slate/Blocks/Text';

const messages = defineMessages({
  text: {
    id: 'Type text…',
    defaultMessage: 'Type text…',
  },
});

//[ToDo]: se togliamo completamente draftjs, togliere la prop editor_type, la condizione e il widget di TextEditorDraftJSWidget

const TextEditorWidget = ({
  editor_type = 'slate',
  showToolbar = true,
  setSelected,
  wrapClass,
  ...props
}) => {
  return editor_type === 'slate' ? (
    <div
      className={wrapClass}
      onClick={() => setSelected()}
      onFocus={() => setSelected()}
      onKeyDown={() => setSelected()}
      role="textbox"
      tabIndex="-1"
    >
      <TextBlockEdit detatched={true} showToolbar={showToolbar} {...props} />
    </div>
  ) : (
    <TextEditorDraftJSWidget {...props} />
  );
};

TextEditorWidget.propTypes = {
  editor_type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  setSelected: PropTypes.func.isRequired,
  onSelectBlock: PropTypes.func.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
  block: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  showToolbar: PropTypes.bool,
  wrapClass: PropTypes.string,
};

export default TextEditorWidget;
