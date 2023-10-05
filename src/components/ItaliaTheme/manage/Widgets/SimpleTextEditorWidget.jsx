/**
 * Edit simple text block.
 * @module components/Widgets/SimpleTextEditorWidget/SimpleTextEditorWidget
 *
 * E' un editor di testo da mettere nei blocchi, senza formattazione.
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { useInView } from 'react-intersection-observer';

import { handleKeyDetached } from '@plone/volto-slate/blocks/Text/keyboard';
import {
  uploadContent,
  saveSlateBlockSelection,
} from '@plone/volto-slate/actions';
import { commonSearchBlockMessages } from '../../../../helpers';
import config from '@plone/volto/registry';

const messages = defineMessages({
  text: {
    id: 'Type text…',
    defaultMessage: 'Type text…',
  },
});

const SimpleTextEditorWidget = (props) => {
  const intl = useIntl();
  const {
    data,
    setSelected,
    onSelectBlock,
    onChangeBlock,
    block,
    value,
    selected,
    placeholder,
  } = props;
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '0px 0px 200px 0px',
  });

  const handleKey = (event) => {
    const { slate } = config.settings;

    const handlers = slate.textblockDetachedKeyboardHandlers[event.key];

    if (handlers) {
      // a handler can return `true` to signify it has handled the event in this
      // case, the execution flow is stopped
      const handlerProps = { getBlockProps: () => props };
      return handlers.find((handler) =>
        handler({ editor: handlerProps, event }),
      );
    }
  };

  return (
    <div className="simple-text-editor-widget" ref={ref}>
      <textarea
        readOnly={!inView}
        value={value}
        placeholder={placeholder || intl.formatMessage(messages.text)}
        onChange={(e) => {
          onChangeBlock(block, { ...data, value: e.target.value });
        }}
        onFocus={(e) => {
          if (!selected) {
            if (onSelectBlock) {
              onSelectBlock(block);
            } else {
              setSelected();
            }
          }
        }}
        onKeyUp={handleKey}
      />
    </div>
  );
};

SimpleTextEditorWidget.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  setSelected: PropTypes.func.isRequired,
  onSelectBlock: PropTypes.func.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
  block: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  focusPrevField: PropTypes.func.isRequired,
  focusNextField: PropTypes.func.isRequired,
  //from block props:
  properties: PropTypes.objectOf(PropTypes.any).isRequired,
  onFocusPreviousBlock: PropTypes.objectOf(PropTypes.any).isRequired,
  onFocusNextBlock: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SimpleTextEditorWidget;
