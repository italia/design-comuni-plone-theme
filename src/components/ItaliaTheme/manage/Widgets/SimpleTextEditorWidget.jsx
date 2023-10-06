/**
 * Edit simple text block.
 * @module components/Widgets/SimpleTextEditorWidget/SimpleTextEditorWidget
 *
 * E' un editor di testo da mettere nei blocchi, senza formattazione.
 */

import React, { useRef, useEffect } from 'react';

import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { useInView } from 'react-intersection-observer';

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

  const fieldRef = useRef();

  const handleKey = (event) => {
    const { slate } = config.settings;

    const handlers = slate.textblockDetachedKeyboardHandlers[event.key];

    if (handlers) {
      // a handler can return `true` to signify it has handled the event in this
      // case, the execution flow is stopped
      const handlerProps = {
        getBlockProps: () => {
          return { ...props };
        },
      };
      return handlers.find((handler) =>
        handler({ editor: handlerProps, event }),
      );
    }
  };

  useEffect(() => {
    if (selected) {
      fieldRef.current.focus();
    }
  }, [selected]);

  return (
    <div className="simple-text-editor-widget" ref={ref}>
      <span
        className="simple-text-input"
        contentEditable={inView} //se è in view è editabile, altrimenti è readOnly
        role="textbox"
        tabIndex={0}
        placeholder={placeholder || intl.formatMessage(messages.text)}
        onInput={(e) => {
          onChangeBlock(block, { ...data, value: e.target.textContent });
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
        onKeyDown={handleKey}
        ref={fieldRef}
      ></span>
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
