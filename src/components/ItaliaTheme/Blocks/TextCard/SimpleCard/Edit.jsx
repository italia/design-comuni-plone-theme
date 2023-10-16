/**
 * Edit title block.
 * @module components/Blocks/TitleVM/Edit
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Card, CardBody, CardTitle, CardText } from 'design-react-kit';
import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';
import BodyWrapper from './BodyWrapper';

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
            <div className="cms-ui">
              <CardTitle tag="h4">
                <TextEditorWidget
                  {...otherProps}
                  showToolbar={false}
                  data={data}
                  block={block}
                  fieldName="simple_card_title"
                  selected={selectedField === 'title'}
                  onChangeBlock={onChangeBlock}
                  onSelectBlock={onSelectBlock}
                  placeholder={intl.formatMessage(messages.simple_card_title)}
                  setSelected={() => {
                    setSelectedField('title');
                  }}
                  focusNextField={() => {
                    setSelectedField('content');
                  }}
                />
              </CardTitle>
              <div>
                <CardText>
                  <TextEditorWidget
                    {...otherProps}
                    showToolbar={true}
                    data={data}
                    fieldName="simple_card_content"
                    selected={selectedField === 'content'}
                    setSelected={() => {
                      setSelectedField('content');
                    }}
                    block={block}
                    onChangeBlock={onChangeBlock}
                    onSelectBlock={onSelectBlock}
                    placeholder={intl.formatMessage(
                      messages.simple_card_content,
                    )}
                    focusPrevField={() => {
                      setSelectedField('title');
                    }}
                  />
                </CardText>
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
