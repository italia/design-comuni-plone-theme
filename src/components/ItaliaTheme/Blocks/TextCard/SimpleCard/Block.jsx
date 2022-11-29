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
  index,
  blockIsSelected,
}) => {
  const intl = useIntl();
  const title = data?.simple_card_title?.blocks[0]?.text;
  const content = data?.simple_card_content;
  const [selected, setSelected] = useState('title');
  const titleRef = useRef();
  const contentRef = useRef();
  const wrapperRef = useRef();

  const handleKeydownNothingSelected = (e) => {
    if (inEditMode) {
      if (e.key === 'Enter' && !e.shiftKey && !selected && blockIsSelected) {
        onAddBlock('text', index + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydownNothingSelected);

    return () => {
      window.removeEventListener('keydown', handleKeydownNothingSelected);
    };
  });

  return (
    <div className="simple-text-card-wrapper" ref={wrapperRef}>
      <Card
        color="white"
        className=" card-bg rounded"
        noWrapper={false}
        space
        tag="div"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            if (
              !titleRef.current.contains(e.target) &&
              !contentRef.current.contains(e.target)
            ) {
              onAddBlock('text', index + 1);
            }
            if (titleRef.current.contains(e.target)) {
              setSelected('content');
            }
          }
        }}
      >
        <CardBody>
          <div className={cx('simple-text-card', { 'cms-ui': inEditMode })}>
            {inEditMode ? (
              <>
                <CardTitle tag="h4">
                  <div
                    ref={titleRef}
                    onClick={() => {
                      setSelected('title');
                    }}
                    onFocus={() => {
                      setSelected('title');
                    }}
                  >
                    <TextEditorWidget
                      data={data}
                      fieldName="simple_card_title"
                      selected={selected === 'title'}
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
                        setSelected('content');
                      }}
                      nextFocus="content"
                      setFocus={(f) => {
                        setSelected(f);
                      }}
                      disableMoveToNearest={true}
                    />
                  </div>
                </CardTitle>
                <Divider />
                <div
                  ref={contentRef}
                  onClick={() => {
                    setSelected('content');
                  }}
                  onFocus={() => {
                    setSelected('content');
                  }}
                >
                  <CardText>
                    <TextEditorWidget
                      data={data}
                      fieldName="simple_card_content"
                      selected={selected === 'content'}
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
                      prevFocus="title"
                      setFocus={(f) => {
                        setSelected(f);
                      }}
                      disableMoveToNearest={true}
                    />
                  </CardText>
                </div>
              </>
            ) : (
              <>
                <CardTitle tag="h4">{title}</CardTitle>
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
