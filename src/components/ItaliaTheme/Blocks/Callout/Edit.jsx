/**
 * Edit Callout block.
 * @module components/ItaliaTheme/Blocks/Callout/Edit
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { isEqual } from 'lodash';
import { SidebarPortal } from '@plone/volto/components';

import { Callout, CalloutTitle, CalloutText } from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import Sidebar from './Sidebar.jsx';
import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  title: {
    id: 'Type the title…',
    defaultMessage: 'Type the title…',
  },
  text: {
    id: 'Type text…',
    defaultMessage: 'Digita il testo…',
  },
});
/**
 * Edit Calloout block class.
 * @class Edit
 * @extends Component
 */
const Edit = ({
  data,
  onChangeBlock,
  block,
  onSelectBlock,
  onAddBlock,
  index,
  selected,
  onFocusPreviousBlock,
  onFocusNextBlock,
}) => {
  const intl = useIntl();
  const [selectedField, setSelectedField] = useState('title');

  useEffect(() => {
    if (selected) {
      setSelectedField('title');
    } else {
      setSelectedField(null);
    }
  }, [selected]);
  /**
   * Change handler
   * @method onChange
   * @param {object} editorState Editor state.
   * @returns {undefined}
   */
  const onChange = (obj, fieldname) => {
    if (!isEqual(obj[fieldname], data[fieldname])) {
      onChangeBlock(block, {
        ...data,
        [fieldname]: obj[fieldname],
      });
    }
  };

  return __SERVER__ ? (
    <div />
  ) : (
    <div className="public-ui" id={block}>
      <Callout
        highlight={data.style === 'highlight'}
        color={data.color?.replace('callout_', '')}
      >
        <CalloutTitle tag="h4">
          <Icon icon="it-check-circle" padding={false} aria-hidden />

          <TextEditorWidget
            data={data}
            block={block}
            setSelected={() => setSelectedField('title')}
            onSelectBlock={(block) => setSelectedField('title')}
            onChangeBlock={(block, data) => {
              onChange({ ...data, title: data.plaintext }, 'title');
            }}
            selected={selectedField === 'title'}
            placeholder={intl.formatMessage(messages.title)}
            showToolbar={false}
            index={index}
            wrapClass={`title-edit-wrapper ${
              data.title?.blocks?.[0]?.text?.length > 0 ? 'has-text' : ''
            }`}
            // onAddBlock={() => {
            //   setSelectedField('text');
            // }}
            // onFocusNextBlock={() => {
            //   setSelectedField('text');
            // }}
            // onFocusPreviousBlock={onFocusPreviousBlock}
          />
        </CalloutTitle>
        <CalloutText>
          <TextEditorWidget
            data={data}
            block={block}
            setSelected={() => setSelectedField('text')}
            onSelectBlock={(block) => setSelectedField('text')}
            onChangeBlock={(block, data) => {
              onChange({ ...data, title: data.value }, 'text');
            }}
            selected={selectedField === 'text'}
            placeholder={intl.formatMessage(messages.text)}
            index={index}
            // onFocusNextBlock={onFocusNextBlock}
            // onFocusPreviousBlock={() => {
            //   setSelectedField('title');
            // }}
          />
        </CalloutText>
      </Callout>

      <SidebarPortal selected={selected || false}>
        <Sidebar data={data} block={block} onChangeBlock={onChangeBlock} />
      </SidebarPortal>
    </div>
  );
};

Edit.propTypes = {
  properties: PropTypes.objectOf(PropTypes.any).isRequired,
  selected: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  onChangeField: PropTypes.func.isRequired,
  onSelectBlock: PropTypes.func.isRequired,
  onDeleteBlock: PropTypes.func.isRequired,
  onAddBlock: PropTypes.func.isRequired,
  onFocusPreviousBlock: PropTypes.func.isRequired,
  onFocusNextBlock: PropTypes.func.isRequired,
  block: PropTypes.string.isRequired,
};

export default Edit;
