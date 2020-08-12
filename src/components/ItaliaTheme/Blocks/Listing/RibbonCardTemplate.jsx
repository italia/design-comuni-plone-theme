import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import moment from 'moment';
import 'moment/min/locales';
import cx from 'classnames';

import {
  Card,
  CardBody,
  CardTitle,
  CardReadMore,
  CardText,
  Button,
  Row,
  Col,
} from 'design-react-kit/dist/design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Link } from 'react-router-dom';

const messages = defineMessages({
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutto',
  },
  default_detail_link: {
    id: 'Vedi',
    defaultMessage: 'Vedi',
  },
});

const RibbonCardTemplate = ({
  items,
  isEditMode,
  linkMore,
  show_only_first_ribbon,
  show_detail_link,
  detail_link_label,
}) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  return (
    <div
      className={cx('simple-card-default', {
        'public-ui': isEditMode,
      })}
    >
      <Row>
        {items.map((item, index) => {
          const title = item.title || item.id;
          const showRibbon =
            !show_only_first_ribbon || (show_only_first_ribbon && index === 0);
          return (
            <Col lg={4} sm={12}>
              <Card
                className={`card-bg card-big align-items-top rounded shadow`}
                noWrapper={false}
                tag="div"
                spacing
                key={index}
              >
                {showRibbon && <div className="flag-icon" />}

                {item.parent?.title && (
                  <div className="etichetta">
                    <span> {item.parent?.title}</span>
                  </div>
                )}
                <CardBody tag="div" className={cx('', { 'mt-5': !showRibbon })}>
                  <CardTitle tag="h5">
                    {!show_detail_link ? (
                      <Link
                        to={!isEditMode ? flattenToAppURL(item['@id']) : '#'}
                      >
                        {title}
                      </Link>
                    ) : (
                      title
                    )}
                  </CardTitle>
                  <CardText>{item.description}</CardText>
                  {show_detail_link && (
                    <CardReadMore
                      iconName="it-arrow-right"
                      tag={Link}
                      to={!isEditMode ? flattenToAppURL(item['@id']) : '#'}
                      text={
                        detail_link_label ||
                        intl.formatMessage(messages.default_detail_link)
                      }
                    />
                  )}
                </CardBody>
              </Card>
            </Col>
          );
        })}
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

RibbonCardTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkMore: PropTypes.any,
};

export default RibbonCardTemplate;
