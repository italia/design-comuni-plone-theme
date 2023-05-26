import { defineMessages, useIntl } from 'react-intl';
import React from 'react';
import { rrulei18n } from '@plone/volto/components/manage/Widgets/RecurrenceWidget/Utils';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import {
  Card,
  CardTitle,
  CardBody,
} from 'design-react-kit/dist/design-react-kit';
import PropTypes from 'prop-types';
import { viewDate } from 'design-comuni-plone-theme/helpers';

const messages = defineMessages({
  start: {
    id: 'start',
    defaultMessage: 'Inizio evento',
  },
  end: {
    id: 'end',
    defaultMessage: 'Fine evento',
  },
  open_end: {
    id: 'open_end',
    defaultMessage: 'Questo evento ha una data di fine aperta/variabile.',
  },
  whole_day: {
    id: 'whole_day',
    defaultMessage: 'Questo evento ha luogo per tutta la giornata.',
  },
  additional_dates: {
    id: 'Date aggiuntive',
    defaultMessage: 'Date aggiuntive',
  },
  excluded_dates: {
    id: "L'evento non si terrà nelle seguenti date",
    defaultMessage: "L'evento non si terrà nelle seguenti date",
  },
});

/**
 * Dates view component class.
 * @function Dates
 * @params {object} Dates: object.
 * @returns {string} Markup of the component.
 */
const Dates = ({ content, show_image, moment: momentlib, rrule }) => {
  const intl = useIntl();
  const moment = momentlib.default;
  moment.locale(intl.locale);

  const rrulestr = rrule.rrulestr;

  let rruleSet = null;
  let recurrenceText = null;

  if (content.recurrence) {
    const RRULE_LANGUAGE = rrulei18n(intl, moment);
    rruleSet = rrulestr(content.recurrence, {
      compatible: true, //If set to True, the parser will operate in RFC-compatible mode. Right now it means that unfold will be turned on, and if a DTSTART is found, it will be considered the first recurrence instance, as documented in the RFC.
      forceset: true,
    });
    recurrenceText = rruleSet.rrules()[0]?.toText(
      (t) => {
        return RRULE_LANGUAGE.strings[t];
      },
      RRULE_LANGUAGE,
      RRULE_LANGUAGE.dateFormatter,
    );
  }

  const start = viewDate(intl.locale, content.start);
  const end = viewDate(intl.locale, content.end);
  const openEnd = content?.open_end;
  const wholeDay = content?.whole_day;

  return content ? (
    <>
      <div className="point-list-wrapper my-4 mb-5">
        <div className="point-list">
          <div className="point-list-aside point-list-warning">
            <span className="point-date text-monospace">
              {start.format('DD')}
            </span>
            <span className="point-month text-monospace">
              {start.format('MMMM')}
            </span>
          </div>
          <div className="point-list-content">
            <Card
              className="card card-teaser rounded shadow"
              noWrapper={true}
              tag="div"
            >
              <CardBody tag="div" className={'card-body'}>
                <CardTitle tag="h5">
                  {!wholeDay && `${start.format('HH:mm')} - `}
                  {intl.formatMessage(messages.start)}
                </CardTitle>
                {openEnd && (
                  <p>
                    <i>{intl.formatMessage(messages.open_end)}</i>
                  </p>
                )}
              </CardBody>
            </Card>
          </div>
        </div>
        {!openEnd && (
          <div className="point-list">
            <div className="point-list-aside point-list-warning">
              <div className="point-date text-monospace">
                {end.format('DD')}
              </div>
              <div className="point-month text-monospace">
                {end.format('MMMM')}
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
                    {!content.whole_day && `${end.format('HH:mm')} - `}
                    {intl.formatMessage(messages.end)}
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
          </div>
        )}
      </div>
      {recurrenceText && (
        <div className="mt-4 mb-5 text-serif">
          <strong>{recurrenceText}</strong>
        </div>
      )}
      {rruleSet?.rdates().length > 0 && (
        <div className="mt-4">
          <h5>{intl.formatMessage(messages.additional_dates)}</h5>
          {rruleSet.rdates().map((additionalDate) => (
            <div className="text-serif">
              {viewDate(intl.locale, additionalDate, 'dddd DD MMMM YYYY')}
            </div>
          ))}
        </div>
      )}
      {rruleSet?.exdates().length > 0 && (
        <div className="mt-4">
          <h5>{intl.formatMessage(messages.excluded_dates)}</h5>
          {rruleSet.exdates().map((exDate) => (
            <div className="text-serif">
              {viewDate(intl.locale, exDate, 'dddd DD MMMM YYYY')}
            </div>
          ))}
        </div>
      )}
    </>
  ) : null;
};

export default injectLazyLibs(['moment', 'rrule'])(Dates);

Dates.propTypes = {
  content: PropTypes.object.isRequired,
};
