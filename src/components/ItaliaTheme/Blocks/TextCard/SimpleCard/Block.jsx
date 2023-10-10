/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'design-react-kit';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { Divider } from 'semantic-ui-react';
import cx from 'classnames';

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

const Block = ({
  inEditMode,
  data,
  block,
  onChange,
  selected,
  ...otherProps
}) => {
  const intl = useIntl();
  const title = data?.simple_card_title;
  const content = data?.simple_card_content;
  const [selectedField, setSelectedField] = useState('title');

  useEffect(() => {
    if (selected) {
      setSelectedField('title');
    } else {
      setSelectedField(null);
    }
  }, [selected]);

  useEffect(() => {
    if (!selected && selectedField && otherProps.onSelectBlock) {
      otherProps.onSelectBlock(block);
    }
  }, [selectedField]);

  return (
    <div className="simple-text-card-wrapper">
      <Card
        color="white"
        className=" card-bg rounded"
        noWrapper={false}
        space
        tag="div"
      >
        <CardBody>
          <div className={cx('simple-text-card', { 'cms-ui': inEditMode })}>
            {inEditMode ? (
              <>
                <CardTitle tag="h4">
                  <TextEditorWidget
                    {...otherProps}
                    showToolbar={false}
                    data={data}
                    block={block}
                    fieldName="simple_card_title"
                    selected={selectedField === 'title'}
                    onChangeBlock={(block, data) =>
                      onChange(data, 'simple_card_title')
                    }
                    placeholder={intl.formatMessage(messages.simple_card_title)}
                    setSelected={() => {
                      setSelectedField('title');
                    }}
                    focusNextField={() => {
                      setSelectedField('content');
                    }}
                  />
                </CardTitle>
                <Divider />

                <CardText>
                  <TextEditorWidget
                    {...otherProps}
                    showToolbar={true}
                    data={data}
                    fieldName="simple_card_content"
                    selected={selectedField === 'content'}
                    block={block}
                    onChangeBlock={(block, data) =>
                      onChange(data, 'simple_card_content')
                    }
                    placeholder={intl.formatMessage(
                      messages.simple_card_content,
                    )}
                    focusPrevField={() => {
                      setSelectedField('title');
                    }}
                  />
                </CardText>
              </>
            ) : (
              <>
                <CardTitle tag="h4" id={block.id + '-title'}>
                  {title}
                </CardTitle>
                <Divider />
                <div>
                  <CardText>
                    <TextBlockView data={{ value: content }} />
                  </CardText>
                </div>
              </>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

Block.propTypes = {
  entityMap: PropTypes.any,
  data: PropTypes.any,
  block: PropTypes.any,
  inEditMode: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};

export default Block;
