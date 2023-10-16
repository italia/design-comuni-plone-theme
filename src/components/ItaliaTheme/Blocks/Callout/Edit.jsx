/**
 * Edit Callout block.
 * @module components/ItaliaTheme/Blocks/Callout/Edit
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
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
  selected,
  ...otherProps
}) => {
  const intl = useIntl();
  const [selectedField, setSelectedField] = useState('title');

  useEffect(() => {
    if (selected && !selectedField) {
      setSelectedField('title');
    } else if (!selected) {
      setSelectedField(null);
    }
  }, [selected]);

  useEffect(() => {
    if (!selected && selectedField) {
      onSelectBlock(block);
    }
  }, [selectedField]);

  return __SERVER__ ? (
    <div />
  ) : (
    <div className="public-ui" id={block}>
      <Callout
        highlight={data.style === 'highlight'}
        color={data.color?.replace('callout_', '')}
      >
        <CalloutTitle tag="h4">
          {data.icon && <Icon icon={data.icon} padding={false} aria-hidden />}

          <TextEditorWidget
            {...otherProps}
            showToolbar={false}
            data={data}
            block={block}
            fieldName="title"
            onChangeBlock={onChangeBlock}
            selected={selectedField === 'title'}
            placeholder={intl.formatMessage(messages.title)}
            setSelected={() => {
              setSelectedField('title');
            }}
            focusNextField={() => {
              setSelectedField('text');
            }}
            onSelectBlock={onSelectBlock}
          />
        </CalloutTitle>
        <CalloutText>
          <TextEditorWidget
            {...otherProps}
            data={data}
            fieldName="text"
            block={block}
            onSelectBlock={onSelectBlock}
            selected={selectedField === 'text'}
            placeholder={intl.formatMessage(messages.text)}
            onChangeBlock={onChangeBlock}
            setSelected={() => setSelectedField('text')}
            focusPrevField={() => {
              setSelectedField('title');
            }}
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
