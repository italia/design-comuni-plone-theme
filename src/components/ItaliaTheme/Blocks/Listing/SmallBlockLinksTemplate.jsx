import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'design-react-kit/dist/design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import cx from 'classnames';
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
            {items.map((item, index) => (
              <Col
                md="3"
                key={item['@id']}
                className="col-item col-sm-4 col-lg-2"
              >
                {item.image && (
                  <div className="center-image-card">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        item['remoteUrl'] && item['remoteUrl'] !== ''
                          ? item['remoteUrl']
                          : flattenToAppURL(item['@id'])
                      }
                    >
                      <Image
                        image={item.image}
                        title={item.title}
                        alt=""
                        aria-hidden="true"
                        className="listing-image"
                      />
                    </a>
                  </div>
                )}
              </Col>
            ))}
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
