/* CUSTOMIZATIONS:
  - Agid styling
  - Use with more plone.app.querystring.date operations
*/
import React, { useState } from 'react';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { defineMessages, injectIntl } from 'react-intl';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { compose } from 'redux';
import { connect } from 'react-redux';
import qs from 'query-string';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const messages = defineMessages({
  startDate: {
    id: 'Start Date',
    defaultMessage: 'Start Date',
  },
  endDate: {
    id: 'End Date',
    defaultMessage: 'End Date',
  },
  clearDates: {
    id: 'Clear dates',
    defaultMessage: 'Pulisci i campi',
  },
});

const PrevIcon = () => (
  <div
    className="prev-icon"
    style={{
      color: '#000',
      left: '22px',
      padding: '5px',
      position: 'absolute',
      top: '15px',
    }}
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    tabIndex="0"
  >
    <Icon icon="it-chevron-left" size="30px" />
  </div>
);
const NextIcon = () => (
  <div
    className="next-icon"
    style={{
      color: '#000',
      right: '22px',
      padding: '5px',
      position: 'absolute',
      top: '15px',
    }}
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    tabIndex="0"
  >
    <Icon icon="it-chevron-right" size="30px" />
  </div>
);

const customArrowIcon = (props) => {
  const { intl } = props;
  return (
    <Icon icon="it-arrow-right" title={intl.formatMessage(messages.endDate)} />
  );
};

const CloseIcon = (props) => {
  const { intl } = props;
  return (
    <Icon
      icon="it-close"
      size="24px"
      className="close"
      title={intl.formatMessage(messages.clearDates)}
    />
  );
};

const DateRangeFacet = (props) => {
  const { facet, isEditMode, onChange, value, reactDates, intl, lang } = props;
  const moment = props.moment.default;
  const { DateRangePicker } = reactDates;
  const [focused, setFocused] = useState(null);
  return (
    <div className="daterange-facet">
      <h6 className="mb-3 columnTextTitle">
        {facet?.title ?? facet?.field?.label}
      </h6>
      <div className="date-time-widget-wrapper">
        <div className="date-input">
          <DateRangePicker
            startDate={value && value[0] ? moment(value[0]) : null}
            startDateId={`${facet['@id']}-start-date`}
            startDatePlaceholderText={intl.formatMessage(messages.startDate)}
            endDate={value && value[1] ? moment(value[1]) : null}
            endDateId={`${facet['@id']}-end-date`}
            endDatePlaceholderText={intl.formatMessage(messages.endDate)}
            numberOfMonths={1}
            disabled={isEditMode}
            noBorder
            showClearDates
            customCloseIcon={<CloseIcon {...props} />}
            displayFormat={moment.localeData(lang).longDateFormat('L')}
            focusedInput={focused}
            onFocusChange={(focusedInput) => setFocused(focusedInput)}
            onDatesChange={({ startDate, endDate }) => {
              onChange(facet.field.value, [
                startDate ? startDate.format('YYYY-MM-DD') : null,
                endDate ? endDate.format('YYYY-MM-DD') : null,
              ]);
            }}
            isOutsideRange={() => false}
            navPrev={<PrevIcon />}
            navNext={<NextIcon />}
            customArrowIcon={customArrowIcon(props)}
          />
        </div>
      </div>
    </div>
  );
};

// CUSTOMIZATION to make it actually work as intended
// Terrificante modo di prendere l'op reale e non le abbreviazioni
// inspiegabili e buggose di chi ha fatto il blocco Search,
// piuttosto che riscriverlo da capo.
// D'altronde, nel codice originale e' pieno di todo...
DateRangeFacet.stateToValue = (state) => {
  const { facetSettings, selectedValue, searchData = {} } = state;
  if (typeof selectedValue === 'string') {
    const queryIndex = searchData?.query?.find(
      (q) => q.i === facetSettings?.field?.value,
    );
    if (queryIndex) {
      if (queryIndex?.o?.includes('date.largerThan'))
        return [selectedValue, null];
      else if (queryIndex?.o?.includes('date.lessThan'))
        return [null, selectedValue];
      else if (queryIndex?.o?.includes('date.between')) return selectedValue;
    }
    return [null, null];
  } else return selectedValue || [null, null];
};

// CUSTOMIZATION to make it actually work as intended
// Terrificante modo di prendere l'op reale e non le abbreviazioni
// inspiegabili e buggose di chi ha fatto il blocco Search,
// piuttosto che riscriverlo da capo.
// D'altronde, nel codice originale e' pieno di todo...
DateRangeFacet.valueToQuery = ({ value, facet }) => {
  if (typeof value === 'string') {
    const params = qs.parse(window.location.hash);
    // Cannot guess, make it fail grracefully at least
    if (!params) return null;

    const facetQuery = JSON.parse(params?.query || '[]')?.find(
      (q) => q.i === facet.field.value,
    );
    const facetOperation = facetQuery?.o ?? '';
    return {
      i: facet.field.value,
      o: facetOperation.replace('paqo', 'plone.app.querystring.operation'),
      v: value,
    };
  } else if (Array.isArray(value)) {
    if (value[0] && !value[1])
      return {
        i: facet.field.value,
        o: 'plone.app.querystring.operation.date.largerThan',
        v: value[0],
      };
    else if (!value[0] && value[1])
      return {
        i: facet.field.value,
        o: 'plone.app.querystring.operation.date.lessThan',
        v: value[1],
      };
    else if (!value[0] && !value[1]) return null;
    else
      return {
        i: facet.field.value,
        o: 'plone.app.querystring.operation.date.between',
        v: value,
      };
  }

  return null;
};

export default compose(
  injectLazyLibs(['reactDates', 'moment']),
  connect((state) => ({
    lang: state.intl.locale,
  })),
  injectIntl,
)(DateRangeFacet);
