/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, useEffect } from 'react';
import {
  Card,
  CardBody,
  CardText,
  Container,
  Row,
  Col,
} from 'design-react-kit';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import redraft from 'redraft';
import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';
import config from '@plone/volto/registry';
import cx from 'classnames';

const messages = defineMessages({
  image_card_title: {
    id: 'Type the title…',
    defaultMessage: 'Type the title…',
  },
  image_card_content: {
    id: 'Type description…',
    defaultMessage: 'Digita la descrizione…',
  },
  image_card_click: {
    id: 'Type text…',
    defaultMessage: 'Digita il testo…',
  },
});

const renderImage = (image, showImage, sizeNatural) =>
  showImage && image ? (
    <div className="img-responsive-wrapper">
      <div
        className={cx({
          'img-responsive': !sizeNatural,
        })}
      >
        <figure className="img-wrapper">
          <img
            src={`data:${image['content-type']};${image.encoding},${image.data}`}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        </figure>
      </div>
    </div>
  ) : null;

const Block = ({
  data,
  block,
  inEditMode,
  onChange,
  onSelectBlock,
  onAddBlock,
  index,
  blockIsSelected,
}) => {
  const intl = useIntl();
  const title = data?.image_card_title?.blocks[0]?.text;
  const hasImage = data?.showImage;
  const content = data?.image_card_content;

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
    <div
      className="image-text-card-wrapper"
      ref={wrapperRef}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          if (!selected) {
            onAddBlock('text', index + 1);
          }
          if (titleRef.current.contains(e.target)) {
            setSelected('content');
          }
        }
      }}
    >
      <h2 className="mb-4 mt-5">
        {inEditMode ? (
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
              fieldName="image_card_title"
              selected={selected === 'title'}
              block={block}
              onChangeBlock={(data) => onChange(data)}
              placeholder={intl.formatMessage(messages.image_card_title)}
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
        ) : (
          title
        )}
      </h2>
      <Card color="white" className="card-bg rounded" noWrapper={false}>
        <CardBody className="pb-0">
          {inEditMode ? (
            <Container>
              <Row
                className={cx('card-body-row', {
                  'revert-row': data?.rightImage,
                  'no-image': !hasImage,
                })}
              >
                {hasImage && (
                  <Col className="py-4 px-0" key={'col-0'}>
                    {renderImage(data?.image, hasImage, data?.sizeNatural)}
                  </Col>
                )}
                <div
                  key={'col-1'}
                  className={cx('p-4 mb-2', {
                    'col-12': !hasImage,
                    'col-8':
                      (hasImage && data?.sizeImage === 's') ||
                      (hasImage && !data?.sizeImage),
                    'col-6': hasImage && data?.sizeImage === 'm',
                    'col-4': hasImage && data?.sizeImage === 'l',
                  })}
                >
                  <div
                    ref={contentRef}
                    onClick={() => {
                      setSelected('content');
                    }}
                    onFocus={() => {
                      setSelected('content');
                    }}
                  >
                    <CardText
                      className="simple-text-card text"
                      style={{ padding: 0 }}
                    >
                      <TextEditorWidget
                        data={data}
                        fieldName="image_card_content"
                        selected={selected === 'content'}
                        block={block}
                        onChangeBlock={(data) => onChange(data)}
                        placeholder={intl.formatMessage(
                          messages.image_card_content,
                        )}
                        showToolbar={true}
                        onSelectBlock={onSelectBlock}
                        onAddBlock={onAddBlock}
                        prevFocus="title"
                        index={index}
                        setFocus={(f) => {
                          setSelected(f);
                        }}
                        disableMoveToNearest={true}
                      />
                    </CardText>
                  </div>
                </div>
              </Row>
            </Container>
          ) : (
            <Container>
              <Row
                className={cx('card-body-row', {
                  'revert-row': data?.rightImage,
                })}
              >
                <Col className="py-4 px-0" key={'col-0'} data-testid={'col-0'}>
                  {renderImage(data?.image, hasImage, data?.sizeNatural)}
                </Col>
                <div
                  key={'col-1'}
                  data-testid={'col-1'}
                  className={cx('p-4', {
                    'col-12': !hasImage,
                    'col-8':
                      (hasImage && data?.sizeImage === 's') ||
                      (hasImage && !data?.sizeImage),
                    'col-6': hasImage && data?.sizeImage === 'm',
                    'col-4': hasImage && data?.sizeImage === 'l',
                  })}
                >
                  <CardText>
                    {redraft(
                      content,
                      config.settings.richtextViewSettings.ToHTMLRenderers,
                      config.settings.richtextViewSettings.ToHTMLOptions,
                    )}
                  </CardText>
                </div>
              </Row>
            </Container>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

Block.propTypes = {
  entityMap: PropTypes.any,
  title: PropTypes.string,
  content: PropTypes.any,
};

export default Block;
