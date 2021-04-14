import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardReadMore,
} from 'design-react-kit/dist/design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { ListingText } from '@italia/components/ItaliaTheme';
import cx from 'classnames';
import { defineMessages, useIntl } from 'react-intl';
import { viewDate } from '@italia/helpers';

const messages = defineMessages({
  vedi: {
    id: 'bando_vedi',
    defaultMessage: 'Vedi',
  },
  pubblicazione: {
    id: 'bando_data_pubblicazione',
    defaultMessage: 'Pubblicato il',
  },
  scadenza: {
    id: 'bando_scadenza',
    defaultMessage: 'Scadenza partecipazione',
  },
  chiusura_procedimento: {
    id: 'chiusura_procedimento_bando',
    defaultMessage: 'Chiusura del procedimento',
  },
  stato: {
    id: 'bando_stato',
    defaultMessage: 'Stato:',
  },
  open: {
    id: 'bando_open',
    defaultMessage: 'Attivo',
  },
  closed: {
    id: 'bando_closed',
    defaultMessage: 'Scaduto',
  },
  inProgress: {
    id: 'bando_inProgress',
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

  return (
    <div
      className={cx('bandi-in-evidence', {
        'public-ui': isEditMode,
      })}
    >
      <Container className="px-4">
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
          {items.map((item, index) => {
            const listingText = <ListingText item={item} />;
            return (
              <Card key={index} className={cx('listing-item card-bg', '')}>
                <CardBody>
                  <CardTitle tag="h3" className="title">
                    <UniversalLink
                      className="bando-title"
                      item={!isEditMode ? item : null}
                      href={isEditMode ? '#' : null}
                    >
                      {item.title || item.id}
                    </UniversalLink>
                  </CardTitle>

                  {listingText && (
                    <div className="bando-description">{listingText}</div>
                  )}
                  <div className="bando-dati mb-2">
                    <span className="d-flex flex-wrap align-items-baseline bando-dati-info">
                      <div className="bando-dati-label mr-2">
                        {intl.formatMessage(messages.pubblicazione)}:
                      </div>
                      <span className="bando-dati-date">
                        {item.effective &&
                          viewDate(intl.locale, item.effective, 'DD-MM-YYYY')}
                      </span>
                    </span>
                    {item.scadenza_bando && (
                      <span className="d-flex flex-wrap align-items-baseline bando-dati-info">
                        <div className="bando-dati-label mr-2">
                          {intl.formatMessage(messages.scadenza)}:
                        </div>
                        <span className="bando-dati-date">
                          {item.scadenza_bando &&
                            viewDate(
                              intl.locale,
                              item.scadenza_bando,
                              'DD-MM-YYYY',
                            )}
                        </span>
                      </span>
                    )}
                    {item.chiusura_procedimento_bando && (
                      <span className="d-flex flex-wrap align-items-baseline bando-dati-info">
                        <div className="bando-dati-label mr-2">
                          {intl.formatMessage(messages.chiusura_procedimento)}:
                        </div>
                        <span className="bando-dati-date">
                          {item.chiusura_procedimento_bando &&
                            viewDate(
                              intl.locale,
                              item.chiusura_procedimento_bando,
                              'DD-MM-YYYY',
                            )}
                        </span>
                      </span>
                    )}
                    <span className="d-flex align-items-baseline bando-dati-info">
                      <div className="bando-dati-label mr-3">
                        {intl.formatMessage(messages.stato)}:
                      </div>
                      {item?.bando_state && (
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
                      )}
                    </span>
                  </div>
                  <div className="read-more">
                    <CardReadMore
                      iconName="it-arrow-right"
                      tag={UniversalLink}
                      item={!isEditMode ? item : null}
                      href={isEditMode ? '#' : null}
                      text={intl.formatMessage(messages.vedi)}
                    />
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
        {linkMore?.href && (
          <div className="link-button text-center my-4">
            <UniversalLink
              href={flattenToAppURL(linkMore.href)}
              className="btn btn-tertiary"
            >
              {linkMore.title || intl.formatMessage(messages.view_all)}
            </UniversalLink>
          </div>
        )}
      </Container>
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
