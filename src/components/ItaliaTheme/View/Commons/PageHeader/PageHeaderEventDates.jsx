import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import { rrulei18n } from '@plone/volto/components/manage/Widgets/RecurrenceWidget/Utils';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import {
  getRealEventEnd,
  getRecurrenceExceptionDates,
} from 'design-comuni-plone-theme/helpers';

const messages = defineMessages({
  dateStart: {
    id: 'dal {dateStart} fino a conclusione',
    defaultMessage: 'dal {dateStart} fino a conclusione',
  },
  exceptionDates: {
    id: 'exceptionDates',
    defaultMessage:
      'con alcune eccezioni. Per maggiori informazioni controllare la sezione dedicata.',
  },
});

/**
 * PageHeaderEventDates view component class.
 * @function PageHeaderEventDates
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const PageHeaderEventDates = ({ content, moment, rrule }) => {
  const intl = useIntl();
  const Moment = moment.default;
  Moment.locale(intl.locale);

  const rrulestr = rrule.rrulestr;

  const rruleSet = content.recurrence
    ? rrulestr(content?.recurrence, {
        compatible: true, //If set to True, the parser will operate in RFC-compatible mode. Right now it means that unfold will be turned on, and if a DTSTART is found, it will be considered the first recurrence instance, as documented in the RFC.
        forceset: true,
      })
    : null;

  const actualEndDate = getRealEventEnd(content, rruleSet);

  // const wholeDay = content?.whole_day;
  const openEnd = content?.open_end;
  // show only start when event starts and ends in same day or if a recurrence is set
  // because to set a recurrence, the event must have the same date as start and end date
  const renderOnlyStart =
    Moment(content.end).format('DD-MM-Y') ===
    Moment(content.start).format('DD-MM-Y');

  let eventRecurrenceText = null;

  if (content['@type'] === 'Event') {
    if (content.recurrence) {
      const isRecurrenceByDay = content.recurrence.includes('BYDAY=+');
      const isRecurrenceByMonthDay = content.recurrence.includes('BYMONTHDAY=');
      const isWeekdaySunday = content.recurrence
        .split('BYDAY')[1]
        ?.includes('SU');
      const RRULE_LANGUAGE = rrulei18n(intl, Moment);
      eventRecurrenceText = rruleSet.rrules()[0]?.toText(
        (t) => {
          if (
            Moment.locale(intl.locale) === 'it' &&
            (isRecurrenceByDay || isRecurrenceByMonthDay)
          ) {
            RRULE_LANGUAGE.strings.th = '°';
            RRULE_LANGUAGE.strings.nd = '°';
            RRULE_LANGUAGE.strings.rd = '°';
            RRULE_LANGUAGE.strings.st = '°';

            if (isWeekdaySunday) {
              RRULE_LANGUAGE.strings['on the'] = 'la';
            }
          }

          return RRULE_LANGUAGE.strings[t];
        },
        RRULE_LANGUAGE,
        RRULE_LANGUAGE.dateFormatter,
      );
    }
  }

  // format and save date into new variable depending on recurrence of event
  const endDate = Moment(actualEndDate).format('DD-MM-Y');

  // check if there are exception dates added to the recurrence to add info
  const { additionalDates, removedDates } =
    getRecurrenceExceptionDates(rruleSet);

  return content['@type'] === 'Event' ? (
    <p className="h4 py-2">
      {(content.recurrence || !renderOnlyStart) &&
        !openEnd &&
        `dal ${Moment(content.start).format('DD-MM-Y')} al ${endDate}`}
      {!content.recurrence &&
        renderOnlyStart &&
        !openEnd &&
        `${Moment(content.start).format('DD-MM-Y')}`}
      {openEnd &&
        intl.formatMessage(messages.dateStart, {
          dateStart: `${Moment(content.start).format('DD-MM-Y')}`,
        })}
      {eventRecurrenceText && (
        <div className="recurrence small">
          <span>{eventRecurrenceText}</span>
          {(additionalDates.length > 0 || removedDates.length > 0) && (
            <span> {intl.formatMessage(messages.exceptionDates)}</span>
          )}
        </div>
      )}
    </p>
  ) : null;
};

export default injectLazyLibs(['moment', 'rrule'])(PageHeaderEventDates);

PageHeaderEventDates.propTypes = {
  params: PropTypes.shape({
    content: PropTypes.object,
  }),
};
