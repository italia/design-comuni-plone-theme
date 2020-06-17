import React from 'react';
import PropTypes from 'prop-types';
import { flattenToAppURL } from '@plone/volto/helpers';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Row,
  Col,
} from 'design-react-kit/dist/design-react-kit';
import cx from 'classnames';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutto',
  },
});

const CompleteBlockLinksTemplate = ({ items, title, isEditMode, linkMore }) => {
  const intl = useIntl();

  return (
    <div
      className={cx('complete-block-links-template', {
        'public-ui': isEditMode,
      })}
    >
      <div className="title">{title && <h3>{title}</h3>}</div>
      <Row className="items">
        {items.map((item, index) => (
          <Col md="3" key={item['@id']} className="col-item">
            <Card
              color=""
              className="card-bg"
              noWrapper={false}
              space
              tag="div"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={
                  item['remoteUrl'] && item['remoteUrl'] !== ''
                    ? item['remoteUrl']
                    : flattenToAppURL(item['@id'])
                }
              >
                <div className="flex">
                  <div className="image-container">
                    <img
                      alt={item.title}
                      src={item.image.scales.preview.download}
                      title={item.title}
                    />
                  </div>
                  <div>
                    <CardBody>
                      <CardTitle tag="h5" className="white">
                        {item.title}
                      </CardTitle>
                      <CardText tag="p" className="white">
                        {item.description}
                      </CardText>
                    </CardBody>
                  </div>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
      {linkMore?.href && (
        <div className="link-button">
          <Button
            className="view-all"
            icon={false}
            tag="button"
            onClick={() => window.open(linkMore.href, '_self')}
          >
            {linkMore.title || intl.formatMessage(messages.view_all)}
          </Button>
        </div>
      )}
    </div>
  );
};

CompleteBlockLinksTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default CompleteBlockLinksTemplate;
