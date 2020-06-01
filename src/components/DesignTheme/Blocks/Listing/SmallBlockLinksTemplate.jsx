import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'design-react-kit/dist/design-react-kit';

const SmallBlockLinksTemplate = ({ items, title }) => {
  return (
    <div className="small-block-links">
      <div className="title">{title && <h3>{title}</h3>}</div>
      <Row className="items">
        {items.map((item, index) => (
          <Col md="3" key={item['@id']} className="col-item col-sm-4 col-lg-2">
            {item.image && (
              <div className="center-image-card">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${item['remoteUrl']}`}
                >
                  <img
                    className="listing-image"
                    alt="imagealt"
                    src={item.image.scales.preview.download}
                    title={item.title}
                  />
                </a>
              </div>
            )}
          </Col>
        ))}
      </Row>
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
