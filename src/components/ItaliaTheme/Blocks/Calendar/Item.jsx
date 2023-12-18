/*
 * Component Item of Calendar block
 */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import { Spinner } from 'design-react-kit';
import cx from 'classnames';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { getCalendarDayResults } from 'design-comuni-plone-theme/actions';
import { ConditionalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { viewDate } from 'design-comuni-plone-theme/helpers';
import config from '@plone/volto/registry';

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

const Item = ({ day, path, query, inEditMode, data }) => {
  const intl = useIntl();
  const Image = config.getComponent({ name: 'Image' }).component;
  const calendarDayResults = useSelector(
    (state) => state.calendarDaySearch.subrequests,
  );
  const dispatch = useDispatch();

  const _day = viewDate(intl.locale, day);
  const dayStart = _day.startOf('day').format('YYYY/MM/DD HH:mm');
  const dayEnd = _day.endOf('day').format('YYYY/MM/DD HH:mm');

  useDeepCompareEffect(() => {
    dispatch(
      getCalendarDayResults(
        path,
        {
          ...query,
          query: [
            ...query.query,
            {
              i: 'start',
              o: 'plone.app.querystring.operation.date.between',
              v: [dayStart, dayEnd],
            },
          ],
        },
        day,
      ),
    );
  }, [dayStart, dayEnd, query, day, dispatch, path]);

  // show event preview image
  const show_preview_img = data.show_preview_img;

  return (
    <div>
      <div className="ps-3 flex-container">
        <div className={cx('day', { 'mb-3': inEditMode })}>
          {_day.format('DD')}{' '}
        </div>
        <div className={cx('month-date', { 'ms-1': inEditMode })}>
          <div className="month">{_day.format('MMMM')}</div>
          <div className="day-week">{_day.format('ddd')}</div>
        </div>
      </div>
      <div>
        <hr />
        {calendarDayResults[day] ? (
          calendarDayResults[day].items[day]?.map((item, index) => {
            const eventHasImage = Object.keys(item.image_scales).length > 0;
            const item_start = new Date(item.start);
            const item_start_time = item_start
              ? `${item_start.getHours()}:${item_start
                  .getMinutes()
                  .toString()
                  .padStart(2, '0')}`
              : null;

            return (
              <div key={index} className="calendar-item">
                <div className="ps-3 calendar-item-container">
                  {show_preview_img && eventHasImage && (
                    <div className="item-img">
                      <Image
                        item={item}
                        alt=""
                        className="img-fluid"
                        sizes="80px"
                      />
                    </div>
                  )}
                  <div className="item-info">
                    <div>{item?.type}</div>
                    {item_start_time && <div>{item_start_time}</div>}
                    <div className="calendar-type">
                      <ConditionalLink
                        condition={!inEditMode}
                        href={flattenToAppURL(item['@id'] || '')}
                      >
                        {item.title}
                      </ConditionalLink>
                    </div>
                  </div>

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
            );
          })
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
