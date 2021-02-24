import React from 'react';
import {
  Card,
  CardBody,
  CardText,
  Container,
  Row,
  Col,
} from 'design-react-kit/dist/design-react-kit';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { settings } from '~/config';
import redraft from 'redraft';

import { TextEditorWidget } from '@italia/components/ItaliaTheme';

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

const renderImage = (image, showImage) =>
  showImage && image ? (
    <div className="img-responsive-wrapper">
      <div className="img-responsive img-responsive-panoramic">
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

const Block = ({ data, block, inEditMode, onChange }) => {
  const intl = useIntl();
  const title = data?.image_card_title?.blocks[0]?.text;
  const hasImage = data?.showImage;
  const content = data?.image_card_content;
  return (
    <div className="image-text-card-wrapper">
      <h3 className="title mt-5">
        {inEditMode ? (
          <TextEditorWidget
            data={data}
            fieldName="image_card_title"
            selected={true}
            block={block}
            onChangeBlock={(data) => onChange(data, 'image_card_title')}
            placeholder={intl.formatMessage(messages.image_card_title)}
            showToolbar={false}
          />
        ) : (
          title
        )}
      </h3>
      <Card
        color="white"
        className="card-bg rounded"
        noWrapper={false}
        tag="div"
      >
        <CardBody>
          {inEditMode ? (
            <Container tag="div">
              <Row tag="div" className={`${hasImage ? '' : 'no-image'}`}>
                {hasImage && (
                  <Col tag="div" className="p-0" key={'col-0'}>
                    {renderImage(data?.image, hasImage)}
                  </Col>
                )}
                <Col
                  key={'col-1'}
                  tag="div"
                  xs={hasImage ? '8' : '12'}
                  className=" p-4 mb-2"
                >
                  <CardText
                    className="simple-text-card text"
                    style={{ padding: 0 }}
                  >
                    <TextEditorWidget
                      data={data}
                      fieldName="image_card_content"
                      selected={false}
                      block={block}
                      onChangeBlock={(data) =>
                        onChange(data, 'image_card_content')
                      }
                      placeholder={intl.formatMessage(
                        messages.image_card_content,
                      )}
                      showToolbar={true}
                    />
                  </CardText>
                </Col>
              </Row>
            </Container>
          ) : (
            <Container tag="div">
              <Row tag="div">
                <Col tag="div" className="p-0" key={'col-0'}>
                  {renderImage(data?.image, hasImage)}
                </Col>
                <Col
                  key={'col-1'}
                  tag="div"
                  xs={hasImage ? '8' : '12'}
                  className="p-4 mb-2 ml-3"
                >
                  <CardText>
                    {redraft(
                      content,
                      settings.ToHTMLRenderers,
                      settings.ToHTMLOptions,
                    )}
                  </CardText>
                </Col>
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
