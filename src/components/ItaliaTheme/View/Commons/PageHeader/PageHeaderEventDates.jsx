import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { rrulestr } from 'rrule';
import { rrulei18n } from '@plone/volto/components/manage/Widgets/RecurrenceWidget/Utils';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

/**
 * PageHeaderEventDates view component class.
 * @function PageHeaderEventDates
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const PageHeaderEventDates = ({ content, moment }) => {
  const intl = useIntl();
  const Moment = moment.default;
  Moment.locale(intl.locale);

  let eventRecurrenceText = null;

  if (content['@type'] === 'Event') {
    if (content.recurrence) {
      const rruleSet = rrulestr(content.recurrence, {
        compatible: true, //If set to True, the parser will operate in RFC-compatible mode. Right now it means that unfold will be turned on, and if a DTSTART is found, it will be considered the first recurrence instance, as documented in the RFC.
        forceset: true,
      });
      const RRULE_LANGUAGE = rrulei18n(intl, Moment);
      eventRecurrenceText = rruleSet.rrules()[0]?.toText(
        (t) => {
          return RRULE_LANGUAGE.strings[t];
        },
        RRULE_LANGUAGE,
        RRULE_LANGUAGE.dateFormatter,
      );
    }
  }
  return content['@type'] === 'Event' ? (
    <h4 className="py-2">
      {Moment(content.end).format('DD-MM-Y') !==
      Moment(content.start).format('DD-MM-Y')
        ? `dal ${Moment(content.start).format('DD-MM-Y')} al ${Moment(
            content.end,
          ).format('DD-MM-Y')}`
        : `${Moment(content.start).format('DD-MM-Y')}`}
      {eventRecurrenceText && (
        <div className="recurrence small">{eventRecurrenceText}</div>
      )}
    </h4>
  ) : null;
};

export default injectLazyLibs(['moment'])(PageHeaderEventDates);

PageHeaderEventDates.propTypes = {
  params: PropTypes.shape({
    content: PropTypes.object,
  }),
};
