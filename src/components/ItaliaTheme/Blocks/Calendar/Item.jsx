/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'design-react-kit/dist/design-react-kit';
import { getCalendarDayResults } from '@italia/actions';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { useIntl } from 'react-intl';
import cx from 'classnames';

import { viewDate } from '@italia/helpers';

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
              <div key={index}>
                <div className="pl-3">
                  <div>{item?.type}</div>
                  <UniversalLink
                    className="calendar-type"
                    href={flattenToAppURL(item['@id'] || '')}
                  >
                    {item.title}
                  </UniversalLink>
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
