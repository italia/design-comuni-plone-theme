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
import { breakList as customBreakList } from 'design-comuni-plone-theme/config/Slate/extensions/breakList';
import config from '@plone/volto/registry';

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
    data = {},
    ...otherProps
  } = props;

  const { slate } = config.settings;
  const { textblockExtensions } = slate;
  const withBlockProperties = React.useCallback(
    (editor) => {
      const p = {
        ...props,
        showToolbar: showToolbar,
        data: { ...props.data, disableNewBlocks: true },
      };
      editor.getBlockProps = () => p;
      return editor;
    },
    [props, showToolbar],
  );
  //const [uid, setUid] = useState();
  // const getEditor = React.useCallback((editor) => {
  //   setUid(editor.uid);
  //   return editor;
  // });

  //const link_pid = `${uid}-link`;
  // const show_sidebar_editor = useSelector((state) => {
  //   return state['slate_plugins']?.[link_pid]?.show_sidebar_editor;
  // });

  const intl = useIntl();
  const placeholder =
    otherProps.placeholder || intl.formatMessage(messages.text);

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '0px 0px 200px 0px',
  });

  const _value = fieldName ? data[fieldName] : value;

  const selectThis = () => {
    if (setSelected) {
      setSelected(fieldName ?? true);
    } else if (onSelectBlock) {
      onSelectBlock(block);
    }
  };

  const extensions = [...textblockExtensions].map((f) => {
    if (f.name === 'breakList') {
      return customBreakList;
    }
    return f;
  });
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
            extensions={extensions}
            renderExtensions={[withBlockProperties /*, getEditor*/]}
            value={_value}
            block={block /* is this needed? */}
            slateSettings={otherProps.slateSettings}
            onFocus={() => {
              if (!selected) {
                selectThis();
              }
            }}
            onChange={(value, selection, editor) => {
              let v = value;

              let retVal = {
                value: v,
                plaintext: serializeNodesToText(value || []),
              };

              if (fieldName) {
                retVal = { [fieldName]: v };
              }
              onChangeBlock(block, {
                ...data,
                ...retVal,
              });
            }}
            selected={selected}
            placeholder={placeholder}
            onKeyDown={handleKeyDetached}
            editableProps={{
              'aria-multiline': 'true',
            }}
            onBlur={() => {
              // //fix: click on toolbar dropdown items. But you cannot reselect h2 text for example if you go out of the block
              // if (!show_sidebar_editor) {
              //   setSelected(fieldName ? null : false);
              // }
            }}
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
  setSelected: PropTypes.func,
  onChangeBlock: PropTypes.func.isRequired,
  block: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  showToolbar: PropTypes.bool,
  wrapClass: PropTypes.string,
  focusPrevField: PropTypes.func,
  focusNextField: PropTypes.func,
  //from block props:
  properties: PropTypes.objectOf(PropTypes.any).isRequired,
  onFocusPreviousBlock: PropTypes.func.isRequired,
  onFocusNextBlock: PropTypes.func.isRequired,
  onSelectBlock: PropTypes.func.isRequired,
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
