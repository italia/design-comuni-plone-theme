import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'design-react-kit/dist/design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';

const PhotogalleryTemplate = ({ items, title }) => {
  return (
    <div className="small-block-links">
      <div className="title">{<h3>PhotoGallery</h3>}</div>
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
