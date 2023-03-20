import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardReadMore,
} from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';

import {
  ListingText,
  ListingLinkMore,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import { viewDate } from 'design-comuni-plone-theme/helpers';

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
  scheduled: {
    id: 'bando_scheduled',
    defaultMessage: 'Programmato',
  },
  closed: {
    id: 'bando_closed',
    defaultMessage: 'Scaduto',
  },
  inProgress: {
    id: 'bando_inProgress',
    defaultMessage: 'In corso',
  },
  ente: {
    id: 'bando_ente',
    defaultMessage: 'Ente',
  },
  tipologia: {
    id: 'bando_tipologia',
    defaultMessage: 'Tipo',
  },
});

const BandiInEvidenceTemplate = ({
  items,
  title,
  isEditMode,
  show_block_bg,
  show_ente,
  show_tipologia,
  show_description,
  linkAlign,
  linkTitle,
  linkHref,
  titleLine,
  linkmore_id_lighthouse,
}) => {
  const intl = useIntl();

  return (
    <div className="bandi-in-evidence">
      <Container className="px-4">
        {title && (
          <Row>
            <Col>
              <h2
                className={cx('mb-4', {
                  'mt-5': !show_block_bg,
                  'title-bottom-line': titleLine,
                })}
              >
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

                  {show_description && listingText && (
                    <div className="bando-description">{listingText}</div>
                  )}

                  <div className="bando-dati mb-2">
                    {/* Ente */}
                    {show_ente && item.ente_bando?.length > 0 && (
                      <span className="d-flex flex-wrap align-items-baseline bando-dati-info">
                        <div className="bando-dati-label me-2">
                          {intl.formatMessage(messages.ente)}:
                        </div>
                        <span className="bando-dati-date">
                          {item.ente_bando.map((ente, i) => (
                            <span>
                              {ente}
                              {i < item.ente_bando.length - 1 ? ', ' : ''}
                            </span>
                          ))}
                        </span>
                      </span>
                    )}

                    {/* Tipologia */}
                    {show_tipologia && item.tipologia_bando?.title?.length > 0 && (
                      <span className="d-flex flex-wrap align-items-baseline bando-dati-info">
                        <div className="bando-dati-label me-2">
                          {intl.formatMessage(messages.tipologia)}:
                        </div>
                        <span className="bando-dati-date">
                          {item.tipologia_bando?.title}
                        </span>
                      </span>
                    )}

                    {/* Pubblicazione */}
                    {item.effective && (
                      <span className="d-flex flex-wrap align-items-baseline bando-dati-info">
                        <div className="bando-dati-label me-2">
                          {intl.formatMessage(messages.pubblicazione)}:
                        </div>
                        <span className="bando-dati-date">
                          {viewDate(intl.locale, item.effective, 'DD-MM-YYYY')}
                        </span>
                      </span>
                    )}

                    {/* Scadenza */}
                    {item.scadenza_bando && (
                      <span className="d-flex flex-wrap align-items-baseline bando-dati-info">
                        <div className="bando-dati-label me-2">
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

                    {/* Chiusura procedimento */}
                    {item.chiusura_procedimento_bando && (
                      <span className="d-flex flex-wrap align-items-baseline bando-dati-info">
                        <div className="bando-dati-label me-2">
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

                    {/* Stato */}
                    {item?.bando_state?.length > 0 && (
                      <span className="d-flex align-items-baseline bando-dati-info">
                        <div className="bando-dati-label me-3">
                          {intl.formatMessage(messages.stato)}:
                        </div>

                        <span className="bando-dati-date">
                          <div
                            className={cx('bando-state', {
                              open: item.bando_state?.includes('open'),
                              closed: item.bando_state?.includes('closed'),
                              scheduled:
                                item.bando_state?.includes('scheduled'),
                              'in-progress':
                                item.bando_state?.includes('inProgress'),
                            })}
                          >
                            {intl.formatMessage(messages[item.bando_state[0]])}
                          </div>
                        </span>
                      </span>
                    )}

                    {/* Note aggiornamenti */}
                    {item.update_note &&
                      (item.bando_state?.includes('open') ||
                        item.bando_state?.includes('inProgress')) && (
                        <span className="d-flex bando-note">
                          <strong>{item.update_note}</strong>
                        </span>
                      )}
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

        <ListingLinkMore
          title={linkTitle}
          href={linkHref}
          linkAlign={linkAlign}
          className="my-4"
          linkmoreIdLighthouse={linkmore_id_lighthouse}
        />
      </Container>
    </div>
  );
};

BandiInEvidenceTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default BandiInEvidenceTemplate;
