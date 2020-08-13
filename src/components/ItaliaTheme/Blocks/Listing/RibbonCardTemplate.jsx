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
  Container,
  Icon,
} from 'design-react-kit/dist/design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Link } from 'react-router-dom';
import { getItemIcon } from '@italia/components/ItaliaTheme';

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
  title,
  show_only_first_ribbon,
  show_detail_link,
  detail_link_label,
  show_block_bg,
}) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  return (
    <div
      className={cx('ribbon-card-template', {
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

          <Row className="mb-4">
            {items.map((item, index) => {
              const itemTitle = item.title || item.id;
              const showRibbon =
                !show_only_first_ribbon ||
                (show_only_first_ribbon && index === 0);
              const icon = getItemIcon(item);

              return (
                <Col lg={4} sm={12}>
                  <Card
                    className={cx(
                      `card-bg card-big align-items-top rounded shadow`,
                      { show_detail_link: show_detail_link },
                    )}
                    noWrapper={false}
                    tag="div"
                    spacing
                    key={index}
                  >
                    {showRibbon && <div className="flag-icon" />}

                    {item.parent?.title && (
                      <div className="etichetta">
                        {icon && <Icon icon={icon} />}
                        <span> {item.parent?.title}</span>
                      </div>
                    )}
                    <CardBody
                      tag="div"
                      className={cx('', { 'mt-5': !showRibbon })}
                    >
                      <CardTitle tag="h5">
                        <Link
                          to={!isEditMode ? flattenToAppURL(item['@id']) : '#'}
                        >
                          {itemTitle}
                        </Link>
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
            <div className="link-button ">
              <Row>
                <Col className="text-center">
                  <Button
                    className="view-all"
                    icon={false}
                    tag="button"
                    onClick={() => window.open(linkMore.href, '_self')}
                  >
                    {linkMore.title || intl.formatMessage(messages.view_all)}
                  </Button>
                </Col>
              </Row>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

RibbonCardTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkMore: PropTypes.any,
};

export default RibbonCardTemplate;
