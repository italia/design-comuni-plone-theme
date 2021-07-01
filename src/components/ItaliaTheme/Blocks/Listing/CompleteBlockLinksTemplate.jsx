import React from 'react';
import PropTypes from 'prop-types';
import { UniversalLink } from '@plone/volto/components';
import Image from '@plone/volto/components/theme/Image/Image';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from 'design-react-kit/dist/design-react-kit';
import { ListingLinkMore } from '@italia/components/ItaliaTheme';

const CompleteBlockLinksTemplate = ({
  items,
  title,
  isEditMode,
  linkTitle,
  linkHref,
  show_block_bg,
  show_description = true,
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
        <Row className="items">
          {items.map((item, index) => {
            const image =
              item.image || item.immagine_testata || item.foto_persona;

            return (
              <Col md="6" lg="3" key={item['@id']} className="col-item">
                <Card
                  color=""
                  className="card-bg rounded"
                  noWrapper={false}
                  tag="div"
                >
                  <UniversalLink
                    item={!isEditMode ? item : null}
                    href={isEditMode ? '#' : null}
                  >
                    <div className="d-flex">
                      {image && (
                        <div className="image-container">
                          <Image
                            image={image}
                            aria-hidden="true"
                            alt=""
                            useOriginal={false}
                            maxSize={400}
                          />
                        </div>
                      )}
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
