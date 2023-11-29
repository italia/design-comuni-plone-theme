/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'design-react-kit';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import redraft from 'redraft';
import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { Divider } from 'semantic-ui-react';
import cx from 'classnames';
import config from '@plone/volto/registry';

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
  onSelectBlock,
  onAddBlock,
  onFocusPreviousBlock,
  onFocusNextBlock,
  index,
  selected,
}) => {
  const intl = useIntl();
  const title = data?.simple_card_title?.blocks[0]?.text;
  const content = data?.simple_card_content;
  const [selectedField, setSelectedField] = useState('title');

  useEffect(() => {
    if (selected) {
      setSelectedField('title');
    } else {
      setSelectedField(null);
    }
  }, [selected]);

  return (
    <div className="simple-text-card-wrapper">
      <Card color="white" className="no-after card-bg rounded" space tag="div">
        <CardBody>
          <div className={cx('simple-text-card', { 'cms-ui': inEditMode })}>
            {inEditMode ? (
              <>
                <CardTitle tag="h4">
                  <div
                    onClick={() => {
                      setSelectedField('title');
                    }}
                    onFocus={() => {
                      setSelectedField('title');
                    }}
                  >
                    <TextEditorWidget
                      data={data}
                      fieldName="simple_card_title"
                      selected={selectedField === 'title'}
                      block={block}
                      onChangeBlock={(data) =>
                        onChange(data, 'simple_card_title')
                      }
                      placeholder={intl.formatMessage(
                        messages.simple_card_title,
                      )}
                      showToolbar={false}
                      onSelectBlock={() => {}}
                      onAddBlock={() => {
                        setSelectedField('content');
                      }}
                      onFocusNextBlock={() => {
                        setSelectedField('content');
                      }}
                      onFocusPreviousBlock={onFocusPreviousBlock}
                    />
                  </div>
                </CardTitle>
                <Divider />
                <div
                  onClick={() => {
                    setSelectedField('content');
                  }}
                  onFocus={() => {
                    setSelectedField('content');
                  }}
                >
                  <CardText>
                    <TextEditorWidget
                      data={data}
                      fieldName="simple_card_content"
                      selected={selectedField === 'content'}
                      block={block}
                      onChangeBlock={(data) =>
                        onChange(data, 'simple_card_content')
                      }
                      placeholder={intl.formatMessage(
                        messages.simple_card_content,
                      )}
                      showToolbar={true}
                      onSelectBlock={onSelectBlock}
                      onAddBlock={onAddBlock}
                      index={index}
                      onFocusNextBlock={onFocusNextBlock}
                      onFocusPreviousBlock={() => {
                        setSelectedField('title');
                      }}
                    />
                  </CardText>
                </div>
              </>
            ) : (
              <>
                <CardTitle tag="h4" id={block.id + '-title'}>
                  {title}
                </CardTitle>
                <Divider />
                <div>
                  <CardText>
                    {redraft(
                      content,
                      config.settings.richtextViewSettings.ToHTMLRenderers,
                      config.settings.richtextViewSettings.ToHTMLOptions,
                    )}
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
