/**
 * Edit text block.
 * @module components/Widgets/TextEditorWidget/TextEditorWidget
 *
 * E' come il componente DetatchedTextBlockEditor di @plone/volto-slate,
 * ma in più ha il withBlockProperties,
 * che serve per getire gli handler (le function di focusPrev e focusNext)
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { useInView } from 'react-intersection-observer';
import { SlateEditor } from '@plone/volto-slate/editor';
import { serializeNodesToText } from '@plone/volto-slate/editor/render';
import { handleKeyDetached } from '@plone/volto-slate/blocks/Text/keyboard';
import {
  uploadContent,
  saveSlateBlockSelection,
} from '@plone/volto-slate/actions';
import SimpleTextEditorWidget from './SimpleTextEditorWidget';

const messages = defineMessages({
  text: {
    id: 'Type text…',
    defaultMessage: 'Type text…',
  },
});

const TextEditorWidget = (props) => {
  const {
    showToolbar = true,
    setSelected,
    wrapClass,
    index,
    properties,
    value,
    fieldName,
    block,
    selected,
    onSelectBlock,
    onChangeBlock,
    data,
    ...otherProps
  } = props;

  const withBlockProperties = React.useCallback(
    (editor) => {
      const p = { ...props, showToolbar: showToolbar };
      editor.getBlockProps = () => p;
      return editor;
    },
    [props],
  );

  const intl = useIntl();
  const placeholder =
    otherProps.placeholder || intl.formatMessage(messages.text);

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '0px 0px 200px 0px',
  });

  const _value = value ?? data[fieldName];

  const selectThis = () => {
    if (onSelectBlock) {
      onSelectBlock(block);
    } else {
      setSelected();
    }
  };
  return (
    <div
      className={wrapClass}
      onClick={() => selectThis()}
      onFocus={() => selectThis()}
      onKeyDown={() => selectThis()}
      role={'textbox'}
      tabIndex="-1"
    >
      {showToolbar ? (
        <div
          className="text-slate-editor-inner detached-slate-editor"
          ref={ref}
        >
          <SlateEditor
            index={index}
            readOnly={!inView}
            properties={properties}
            renderExtensions={[withBlockProperties]}
            value={_value}
            block={block /* is this needed? */}
            slateSettings={otherProps.slateSettings}
            onFocus={() => {
              if (!selected) {
                selectThis();
              }
            }}
            onChange={(value, selection, editor) => {
              let retVal = {
                value,
                plaintext: serializeNodesToText(value || []),
              };
              if (fieldName) {
                retVal = { [fieldName]: value };
              }
              onChangeBlock(block, {
                ...data,
                ...retVal,
                // TODO: also add html serialized value
              });
            }}
            selected={selected}
            placeholder={placeholder}
            onKeyDown={handleKeyDetached}
            editableProps={{ 'aria-multiline': 'true' }}
          />
        </div>
      ) : (
        <div className="text-editor-inner simple-text">
          <SimpleTextEditorWidget {...props} index={index} value={_value} />
        </div>
      )}
    </div>
  );
};

TextEditorWidget.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  setSelected: PropTypes.func.isRequired,
  onSelectBlock: PropTypes.func.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
  block: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  showToolbar: PropTypes.bool,
  wrapClass: PropTypes.string,
  focusPrevField: PropTypes.func,
  focusNextField: PropTypes.func,
  //from block props:
  properties: PropTypes.objectOf(PropTypes.any).isRequired,
  onFocusPreviousBlock: PropTypes.objectOf(PropTypes.any).isRequired,
  onFocusNextBlock: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(
  (state, props) => {
    const blockId = props.block;
    return {
      defaultSelection: blockId
        ? state.slate_block_selections?.[blockId]
        : null,
      uploadRequest: state.upload_content?.[props.block]?.upload || {},
      uploadedContent: state.upload_content?.[props.block]?.data || {},
    };
  },
  {
    uploadContent,
    saveSlateBlockSelection, // needed as editor blockProps
  },
)(TextEditorWidget);
