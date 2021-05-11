import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'design-react-kit/dist/design-react-kit';
import cx from 'classnames';
import { UniversalLink } from '@plone/volto/components';
import Image from '@plone/volto/components/theme/Image/Image';

const SmallBlockLinksTemplate = ({
  items,
  title,
  isEditMode,
  show_block_bg,
}) => {
  return (
    <div className={cx('small-block-links', { 'public-ui': isEditMode })}>
      <div className="full-width">
        <Container className="px-4">
          {title && (
            <Row>
              <Col>
                <h2 className="mb-4">{title}</h2>
              </Col>
            </Row>
          )}
          <Row className="items">
            {items.map((item, index) => {
              const image =
                item.image || item.immagine_testata || item.foto_persona;
              return (
                <Col
                  md="3"
                  key={item['@id']}
                  className="col-item col-sm-4 col-lg-2"
                >
                  {image && (
                    <div className="center-image-card">
                      <UniversalLink
                        item={!isEditMode ? item : null}
                        href={isEditMode ? '#' : ''}
                        className="img-link"
                      >
                        <Image
                          image={image}
                          title={item.title}
                          alt=""
                          aria-hidden="true"
                          className="listing-image"
                          useOriginal={false}
                          maxSize={200}
                        />
                      </UniversalLink>
                    </div>
                  )}
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

SmallBlockLinksTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default SmallBlockLinksTemplate;
