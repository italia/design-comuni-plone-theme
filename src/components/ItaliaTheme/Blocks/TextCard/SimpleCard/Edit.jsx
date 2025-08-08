/**
 * Edit title block.
 * @module components/Blocks/TitleVM/Edit
 */

import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Card, CardBody, CardTitle } from 'design-react-kit';
import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';
import BodyWrapper from './BodyWrapper';
import { useHandleDetachedBlockFocus } from 'design-comuni-plone-theme/helpers/blocks';
import { Divider } from 'semantic-ui-react';

const messages = defineMessages({
  simple_card_title: {
    id: 'Type the title…',
    defaultMessage: 'Type the title…',
  },
  simple_card_content: {
    id: 'Type description…',
    defaultMessage: 'Digita la descrizione…',
  },
  simple_card_click: {
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
    'simple_card_title',
  );

  return __SERVER__ ? (
    <div />
  ) : (
    <BodyWrapper data={data} inEditMode={true}>
      <div className="simple-text-card-wrapper">
        <Card
          color="white"
          className="card-bg rounded"
          noWrapper={false}
          space
          tag="div"
        >
          <CardBody>
            <div className="simple-text-card cms-ui">
              <CardTitle tag="h2" className="h4">
                <TextEditorWidget
                  {...otherProps}
                  showToolbar={false}
                  data={data}
                  block={block}
                  fieldName="simple_card_title"
                  selected={selected && selectedField === 'simple_card_title'}
                  onChangeBlock={onChangeBlock}
                  onSelectBlock={onSelectBlock}
                  placeholder={intl.formatMessage(messages.simple_card_title)}
                  setSelected={setSelectedField}
                  focusNextField={() => {
                    setSelectedField('simple_card_content');
                  }}
                />
              </CardTitle>
              <Divider />
              <div>
                <TextEditorWidget
                  {...otherProps}
                  showToolbar={true}
                  data={data}
                  fieldName="simple_card_content"
                  selected={selected && selectedField === 'simple_card_content'}
                  setSelected={setSelectedField}
                  block={block}
                  onChangeBlock={onChangeBlock}
                  onSelectBlock={onSelectBlock}
                  placeholder={intl.formatMessage(messages.simple_card_content)}
                  focusPrevField={() => {
                    setSelectedField('simple_card_title');
                  }}
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </BodyWrapper>
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
