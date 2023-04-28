import React from 'react';
import PropTypes from 'prop-types';
import { UniversalLink } from '@plone/volto/components';
import cx from 'classnames';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from 'design-react-kit/dist/design-react-kit';
import {
  ListingLinkMore,
  ListingImage,
} from 'design-comuni-plone-theme/components/ItaliaTheme';

const CompleteBlockLinksTemplate = ({
  items,
  title,
  isEditMode,
  linkTitle,
  linkHref,
  show_block_bg,
  show_description = true,
  id_lighthouse,
  center_cards,
  bg_card_color = 'secondary',
}) => {
  return (
    <div className="complete-block-links-template">
      <Container className="px-4">
        {title && (
          <Row>
            <Col>
              <h2 className="mb-4">{title}</h2>
            </Col>
          </Row>
        )}
        <Row className={cx('items', { 'center-cards': center_cards })}>
          {items.map((item, index) => {
            const image = ListingImage({ item, className: '' });

            return (
              <Col md="6" lg="3" key={item['@id']} className="col-item">
                <Card
                  color=""
                  className={cx('card-bg rounded', bg_card_color)}
                  noWrapper={false}
                  tag="div"
                >
                  <UniversalLink
                    item={!isEditMode ? item : null}
                    href={isEditMode ? '#' : null}
                    data-element={id_lighthouse}
                  >
                    <div className="d-flex">
                      {image && <div className="image-container">{image}</div>}
                      <div>
                        <CardBody>
                          <CardTitle tag="h3" className="text-secondary">
                            {item.title}
                          </CardTitle>
                          {show_description && (
                            <CardText tag="p" className="text-secondary">
                              {item.description}
                            </CardText>
                          )}
                        </CardBody>
                      </div>
                    </div>
                  </UniversalLink>
                </Card>
              </Col>
            );
          })}
        </Row>
        <ListingLinkMore title={linkTitle} href={linkHref} className="my-4" />
      </Container>
    </div>
  );
};

CompleteBlockLinksTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default CompleteBlockLinksTemplate;
