/**
 * Edit Callout block.
 * @module components/ItaliaTheme/Blocks/Callout/Edit
 */

import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { SidebarPortal } from '@plone/volto/components';

import { Callout, CalloutTitle, CalloutText } from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import Sidebar from './Sidebar.jsx';
import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { useHandleDetachedBlockFocus } from 'design-comuni-plone-theme/helpers/blocks';

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
const Edit = (props) => {
  const { data, onChangeBlock, block, onSelectBlock, selected, ...otherProps } =
    props;
  const intl = useIntl();
  const { selectedField, setSelectedField } = useHandleDetachedBlockFocus(
    props,
    'title',
  );

  return __SERVER__ ? (
    <div />
  ) : (
    <div className="public-ui" id={block} tabIndex="-1" role="textbox">
      <Callout
        highlight={data.style === 'highlight'}
        color={data.color?.replace('callout_', '')}
      >
        <CalloutTitle tag="h4">
          {data.icon && <Icon icon={data.icon} padding={false} aria-hidden />}

          <div className="text">
            <TextEditorWidget
              {...otherProps}
              showToolbar={false}
              data={data}
              block={block}
              fieldName="title"
              onChangeBlock={onChangeBlock}
              selected={selected && selectedField === 'title'}
              placeholder={intl.formatMessage(messages.title)}
              setSelected={setSelectedField}
              focusNextField={() => {
                setSelectedField('text');
              }}
              onSelectBlock={onSelectBlock}
            />
          </div>
        </CalloutTitle>
        <CalloutText>
          <TextEditorWidget
            {...otherProps}
            data={data}
            fieldName="text"
            block={block}
            onSelectBlock={onSelectBlock}
            selected={selected && selectedField === 'text'}
            placeholder={intl.formatMessage(messages.text)}
            onChangeBlock={onChangeBlock}
            setSelected={setSelectedField}
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
