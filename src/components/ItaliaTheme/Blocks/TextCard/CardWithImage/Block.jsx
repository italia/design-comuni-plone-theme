/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Card, CardBody, Container, Row, Col } from 'design-react-kit';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { useHandleDetachedBlockFocus } from 'design-comuni-plone-theme/helpers/blocks';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
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

const renderImage = (image, showImage, sizeNatural, altText = '') =>
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
            alt={altText}
            aria-hidden="true"
            loading="lazy"
          />
        </figure>
      </div>
    </div>
  ) : null;

const Block = (props) => {
  const { data, block, inEditMode, onChange, selected, ...otherProps } = props;
  const intl = useIntl();
  const title = data?.image_card_title;
  const hasImage = data?.showImage;
  const content = data?.image_card_content;

  const { selectedField, setSelectedField } = useHandleDetachedBlockFocus(
    props,
    'image_card_title',
  );
  return (
    <div className="image-text-card-wrapper">
      <h2 className="mb-4 mt-5" id={block.id + 'title'}>
        {inEditMode ? (
          <TextEditorWidget
            {...otherProps}
            showToolbar={false}
            data={data}
            block={block}
            fieldName="image_card_title"
            selected={selected && selectedField === 'image_card_title'}
            onChangeBlock={(block, data) => onChange(data)}
            placeholder={intl.formatMessage(messages.image_card_title)}
            setSelected={setSelectedField}
            focusNextField={() => {
              setSelectedField('image_card_content');
            }}
          />
        ) : (
          title
        )}
      </h2>
      <Card color="white" className="card-bg rounded" noWrapper={false}>
        <CardBody>
          {inEditMode ? (
            <Container>
              <Row
                className={cx('card-body-row', {
                  'revert-row': data?.rightImage,
                  'no-image': !hasImage,
                })}
              >
                {hasImage && (
                  <Col className="my-1 px-0" key={'col-0'}>
                    {renderImage(
                      data?.image,
                      hasImage,
                      data?.sizeNatural,
                      data?.altText,
                    )}
                  </Col>
                )}
                <div
                  key={'col-1'}
                  className={cx('px-4 mb-2', {
                    'col-12': !hasImage,
                    'col-8':
                      (hasImage && data?.sizeImage === 's') ||
                      (hasImage && !data?.sizeImage),
                    'col-6': hasImage && data?.sizeImage === 'm',
                    'col-4': hasImage && data?.sizeImage === 'l',
                    'ps-0': data?.rightImage,
                  })}
                >
                  <div
                    onClick={() => {
                      setSelectedField('image_card_content');
                    }}
                    onFocus={() => {
                      setSelectedField('image_card_content');
                    }}
                  >
                    <TextEditorWidget
                      {...otherProps}
                      showToolbar={true}
                      data={data}
                      fieldName="image_card_content"
                      block={block}
                      selected={
                        selected && selectedField === 'image_card_content'
                      }
                      onChangeBlock={(block, data) => onChange(data)}
                      placeholder={intl.formatMessage(
                        messages.image_card_content,
                      )}
                      setSelected={setSelectedField}
                      focusPrevField={() => {
                        setSelectedField('image_card_title');
                      }}
                    />
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
                <Col className="my-1 p-0" key={'col-0'} data-testid={'col-0'}>
                  {renderImage(
                    data?.image,
                    hasImage,
                    data?.sizeNatural,
                    data?.altText,
                  )}
                </Col>
                <div
                  key={'col-1'}
                  data-testid={'col-1'}
                  className={cx('px-4', {
                    'col-12': !hasImage,
                    'col-8':
                      (hasImage && data?.sizeImage === 's') ||
                      (hasImage && !data?.sizeImage),
                    'col-6': hasImage && data?.sizeImage === 'm',
                    'col-4': hasImage && data?.sizeImage === 'l',
                    'ps-0': data?.rightImage,
                  })}
                >
                  <TextBlockView data={{ value: content }} />
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
