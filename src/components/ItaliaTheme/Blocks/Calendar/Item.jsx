/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import { Spinner } from 'design-react-kit/dist/design-react-kit';
import cx from 'classnames';
import { getCalendarDayResults } from '@italia/actions';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';

import { viewDate } from '@italia/helpers';

const messages = defineMessages({
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

const Item = ({ day, path, data, inEdit }) => {
  const intl = useIntl();

  const querystringResults = useSelector((state) => state.calendarDaySearch);
  const dispatch = useDispatch();

  const _day = viewDate(intl.locale, day);

  React.useEffect(() => {
    let newData = JSON.parse(JSON.stringify(data ?? {}));
    newData.query.push({
      i: 'start',
      o: 'plone.app.querystring.operation.date.between',
      v: [
        _day.startOf('day').format('YYYY/MM/DD HH:mm'),
        _day.endOf('day').format('YYYY/MM/DD HH:mm'),
      ],
    });
    dispatch(getCalendarDayResults(path, { ...newData, fullobjects: 1 }, day));
  }, []);

  return (
    <div>
      <div className="pl-3">
        <div className={cx('day', { 'mb-3': inEdit })}>{_day.format('DD')}</div>
        <div className="day-week">{_day.format('ddd')}</div>
      </div>
      <div>
        <hr />
        {querystringResults.subrequests &&
        querystringResults.subrequests[day] ? (
          querystringResults.subrequests &&
          querystringResults.subrequests[day]?.items[day]?.map(
            (item, index) => (
              <div key={index} div className="calendar-item">
                <div className="pl-3">
                  <div>{item?.type}</div>
                  <UniversalLink
                    className="calendar-type"
                    href={flattenToAppURL(item['@id'] || '')}
                  >
                    {item.title}
                  </UniversalLink>

                  {item.scadenza_domande_bando &&
                    _day.diff(item.scadenza_domande_bando, 'day') === 0 && (
                      <div className="scadenza_message">
                        {intl.formatMessage(messages.scadenza_domande_bando)}
                      </div>
                    )}
                  {item.scadenza_bando &&
                    _day.diff(item.scadenza_bando, 'day') === 0 && (
                      <div className="scadenza_message">
                        {intl.formatMessage(messages.scadenza_bando)}
                      </div>
                    )}
                  {item.chiusura_procedimento_bando &&
                    _day.diff(item.chiusura_procedimento_bando, 'day') ===
                      0 && (
                      <div className="scadenza_message">
                        {intl.formatMessage(
                          messages.chiusura_procedimento_bando,
                        )}
                      </div>
                    )}
                </div>
                <hr />
              </div>
            ),
          )
        ) : (
          <div className="d-flex justify-content-center">
            <Spinner active />
          </div>
        )}
      </div>
    </div>
  );
};
export default Item;
