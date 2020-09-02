import { defineMessages, useIntl } from 'react-intl';

import React from 'react';
import moment from 'moment/min/moment-with-locales';
import { rrulestr } from 'rrule';
import {
  Card,
  CardTitle,
  CardBody,
} from 'design-react-kit/dist/design-react-kit';
import PropTypes from 'prop-types';

const messages = defineMessages({
  start: {
    id: 'start',
    defaultMessage: 'Inizio evento',
  },
  end: {
    id: 'end',
    defaultMessage: 'Fine evento',
  },
});

/**
 * Dates view component class.
 * @function Dates
 * @params {object} Dates: object.
 * @returns {string} Markup of the component.
 */
const Dates = ({ content, show_image }) => {
  const intl = useIntl();
  moment.locale(intl.locale);
  let rruleSet = null;

  if (content.recurrence) {
    rruleSet = rrulestr(content.recurrence, {
      compatible: true, //If set to True, the parser will operate in RFC-compatible mode. Right now it means that unfold will be turned on, and if a DTSTART is found, it will be considered the first recurrence instance, as documented in the RFC.
      forceset: true,
    });
  }
  console.log('rruleset', rruleSet);

  return content ? (
    <>
      <div className="point-list-wrapper my-4 mb-5">
        <div className="point-list">
          <div className="point-list-aside point-list-warning">
            <div className="point-date text-monospace">
              {moment(content.start).format('DD')}
            </div>
            <div className="point-month text-monospace">
              {moment(content.start).format('MMMM')}
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
                  {`${moment(content.start).format(
                    'hh:mm',
                  )} - ${intl.formatMessage(messages.start)}`}
                </CardTitle>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="point-list">
          <div className="point-list-aside point-list-warning">
            <div className="point-date text-monospace">
              {moment(content.end).format('DD')}
            </div>
            <div className="point-month text-monospace">
              {moment(content.end).format('MMMM')}
            </div>
          </div>
          <div className="point-list-content">
            <Card
              className="card card-teaser rounded shadow"
              noWrapper={true}
              tag="div"
            >
              <CardBody tag="div" className={'card-body'}>
                <CardTitle tag="h5">{`${moment(content.end).format(
                  'hh:mm',
                )} - ${intl.formatMessage(messages.end)}`}</CardTitle>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      {rruleSet?.rdates().length > 0 && (
        <div className="mt-4">
          <h5>Date aggiuntive</h5>
          {rruleSet.rdates().map((additionalDate) => (
            <div>{moment(additionalDate).format('dddd DD MMMM YYYY')}</div>
          ))}
        </div>
      )}
      {rruleSet?.rdates().length > 0 && (
        <div className="mt-4">
          <h5>L'evento non si terrà nelle seguenti date:</h5>
          {rruleSet.exdates().map((exDate) => (
            <div>{moment(exDate).format('dddd DD MMMM YYYY')}</div>
          ))}
        </div>
      )}
    </>
  ) : null;
};

export default Dates;

Dates.propTypes = {
  content: PropTypes.object.isRequired,
};
