import { defineMessages, useIntl } from 'react-intl';
import React from 'react';
import moment from 'moment/min/moment-with-locales';
import { rrulestr } from 'rrule';
import { rrulei18n } from '@plone/volto/components/manage/Widgets/RecurrenceWidget/Utils';
import {
  Card,
  CardTitle,
  CardBody,
} from 'design-react-kit/dist/design-react-kit';
import PropTypes from 'prop-types';

const messages = defineMessages({
  effective: {
    id: 'effective',
    defaultMessage: 'Data di pubblicazione',
  },
  scadenza_bando: {
    id: 'scadenza_bando',
    defaultMessage: 'Scadenza dei termini per partecipare al bando',
  },
  scadenza_domande_bando: {
    id: 'scadenza_domande_bando',
    defaultMessage: 'Termine per le richieste di chiarimenti',
  },
  chiusura_procedimento_bando: {
    id: 'chiusura_procedimento_bando',
    defaultMessage: 'Chiusura del procedimento',
  },
});

/**
 * BandoDates view component class.
 * @function BandoDates
 * @params {object} Dates: object.
 * @returns {string} Markup of the component.
 */
const BandoDates = ({ content }) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  return content ? (
    <>
      <div className="point-list-wrapper my-4 mb-5">
        {content?.effective && (
          <div className="point-list">
            <div className="point-list-aside point-list-warning">
              <div className="point-date text-monospace">
                {moment(content.effective).format('DD')}
              </div>
              <div className="point-month text-monospace">
                {moment(content.effective).format('MMM')}/
                {moment(content.effective).format('YY')}
              </div>
            </div>
            <div className="point-list-content">
              <Card
                className="card card-teaser rounded shadow"
                noWrapper={true}
                tag="div"
              >
                <CardBody tag="div" className={'card-body'}>
                  <CardTitle tag="h5">
                    {intl.formatMessage(messages.effective)}
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
          </div>
        )}
        {content?.scadenza_domande_bando && (
          <div className="point-list">
            <div className="point-list-aside point-list-warning">
              <div className="point-date text-monospace">
                {moment(content.scadenza_domande_bando).format('DD')}
              </div>
              <div className="point-month text-monospace">
                {moment(content.scadenza_domande_bando).format('MMM')}/
                {moment(content.scadenza_domande_bando).format('YY')}
              </div>
            </div>
            <div className="point-list-content">
              <Card
                className="card card-teaser rounded shadow"
                noWrapper={true}
                tag="div"
              >
                <CardBody tag="div" className={'card-body'}>
                  <CardTitle tag="h5">
                    {`${moment.utc(content.scadenza_domande_bando).local().format(
                      'HH:mm',
                    )} - `}
                    {intl.formatMessage(messages.scadenza_domande_bando)}
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
          </div>
        )}
        {content?.scadenza_bando && (
          <div className="point-list">
            <div className="point-list-aside point-list-warning">
              <div className="point-date text-monospace">
                {moment(content.scadenza_bando).format('DD')}
              </div>
              <div className="point-month text-monospace">
                {moment(content.scadenza_bando).format('MMM')}/
                {moment(content.scadenza_bando).format('YY')}
              </div>
            </div>
            <div className="point-list-content">
              <Card
                className="card card-teaser rounded shadow"
                noWrapper={true}
                tag="div"
              >
                <CardBody tag="div" className={'card-body'}>
                  <CardTitle tag="h5">
                    {`${moment.utc(content.scadenza_bando).local().format('HH:mm')} - `}
                    {intl.formatMessage(messages.scadenza_bando)}
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
          </div>
        )}
        {content?.chiusura_procedimento_bando && (
          <div className="point-list">
            <div className="point-list-aside point-list-warning">
              <div className="point-date text-monospace">
                {moment(content.chiusura_procedimento_bando).format('DD')}
              </div>
              <div className="point-month text-monospace">
                {moment(content.chiusura_procedimento_bando).format('MMM')}/
                {moment(content.chiusura_procedimento_bando).format('YY')}
              </div>
            </div>
            <div className="point-list-content">
              <Card
                className="card card-teaser rounded shadow"
                noWrapper={true}
                tag="div"
              >
                <CardBody tag="div" className={'card-body'}>
                  <CardTitle tag="h5">
                    {intl.formatMessage(messages.chiusura_procedimento_bando)}
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
          </div>
        )}
      </div>
    </>
  ) : null;
};

export default BandoDates;

BandoDates.propTypes = {
  content: PropTypes.object.isRequired,
};
