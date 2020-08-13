import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Container, Row, Col } from 'design-react-kit/dist/design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';

const PhotogalleryTemplate = ({ items, title, isEditMode, show_block_bg }) => {
  return (
    <div
      className={cx('small-block-links', {
        'public-ui': isEditMode,
      })}
    >
      <div className={cx('full-width', { 'bg-light py-5': show_block_bg })}>
        <Container className="px-4">
          {title && (
            <Row>
              <Col>
                <h2 className="mb-4">{title}</h2>
              </Col>
            </Row>
          )}
          <Row className="items">
            {items.map((item, index) => (
              <Col md="4" key={item['@id']} className="col-item">
                <div style={{ padding: '14px' }}>
                  {item.image && (
                    <img
                      src={flattenToAppURL(item.image.scales.preview.download)}
                      alt={item.title}
                    />
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

PhotogalleryTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default PhotogalleryTemplate;
