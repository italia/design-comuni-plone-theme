import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardCategory,
  CardText,
  Chip,
  ChipLabel,
  Icon,
  Button,
  CardReadMore,
} from 'design-react-kit/dist/design-react-kit';
import { ConditionalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { getIcon } from '@italia/helpers';
import { getCalendarDate } from '@italia/helpers';
import { CardCalendar } from './Commons/CardCalendar';
import { defineMessages, useIntl } from 'react-intl';
import moment from 'moment';
import 'moment/min/locales';

const messages = defineMessages({
  vedi: {
    id: 'vedi',
    defaultMessage: 'Vedi',
  },
  pubblicazione: {
    id: 'pubblicazione',
    defaultMessage: 'data di pubblicazione:',
  },
  scadenza: {
    id: 'scadenza',
    defaultMessage: 'data di scadenza:',
  },
  stato: {
    id: 'stato',
    defaultMessage: 'stato:',
  },
  open: {
    id: 'open',
    defaultMessage: 'Aperto',
  },
  closed: {
    id: 'closed',
    defaultMessage: 'Chiuso',
  },
  inProgress: {
    id: 'inProgress',
    defaultMessage: 'In corso',
  },
});

const BandiInEvidenceTemplate = ({
  items,
  title,
  isEditMode,
  show_block_bg,
  linkMore,
}) => {
  const intl = useIntl();
  moment.locale(intl.locale);
  return (
    <div
      className={cx('bandi-in-evidence', {
        'public-ui': isEditMode,
      })}
    >
      <div className="full-width">
        <Container className="listing-container">
          {title && (
            <Row>
              <Col>
                <h2 className={cx('mb-4', { 'mt-5': !show_block_bg })}>
                  {title}
                </h2>
              </Col>
            </Row>
          )}
          <div className="bandi-in-evidence-cards-wrapper mb-5">
            {items.map((item, index) => (
              <Card
                key={index}
                className={cx('listing-item card-backgound', '')}
              >
                <CardBody>
                  <CardTitle tag="h4" className="title">
                    {item.title || item.id}
                  </CardTitle>

                  <>
                    <div className="bando-description">{item.description}</div>
                    <div className={'bando-dati'}>
                      <span className=" d-flex align-items-baseline bando-dati-info">
                        <div className="bando-dati-label mr-4">
                          {intl.formatMessage(messages.pubblicazione)}
                        </div>
                        <span className="bando-dati-date">
                          {moment(item.effective).format('DD-MM-YYYY')}
                        </span>
                      </span>
                      <span className="d-flex align-items-baseline bando-dati-info">
                        <div className="bando-dati-label mr-4">
                          {intl.formatMessage(messages.scadenza)}
                        </div>
                        <span className="bando-dati-date">
                          {moment(item.scadenza_bando).format('DD-MM-YYYY')}
                        </span>
                      </span>
                      <span className="d-flex align-items-baseline bando-dati-info">
                        <div className="bando-dati-label mr-4">
                          {intl.formatMessage(messages.stato)}
                        </div>
                        <span className="bando-dati-date">
                          <div
                            className={cx('bando-state', {
                              open: item.bando_state?.includes('open'),
                              closed: item.bando_state?.includes('closed'),
                              'in-progress': item.bando_state?.includes(
                                'inProgress',
                              ),
                            })}
                          >
                            {intl.formatMessage(messages[item.bando_state[0]])}
                          </div>
                        </span>
                      </span>
                    </div>
                    <div className="read-more">
                      <CardReadMore
                        iconName="it-arrow-right"
                        tag={Link}
                        to={!isEditMode ? flattenToAppURL(item['@id']) : '#'}
                        text={intl.formatMessage(messages.vedi)}
                      />
                    </div>
                  </>
                </CardBody>
              </Card>
            ))}
          </div>
          {linkMore?.href && (
            <div className="link-more">
              <Button
                className="view-all"
                icon={false}
                tag="button"
                onClick={() => window.open(linkMore.href, '_self')}
              >
                <ConditionalLink condition={!isEditMode} to={linkMore.href}>
                  {linkMore.title}
                </ConditionalLink>
              </Button>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

BandiInEvidenceTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default BandiInEvidenceTemplate;
