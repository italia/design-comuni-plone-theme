import React from 'react';
import moment from 'moment';
import 'moment/min/locales';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'design-react-kit/dist/design-react-kit';
import { getCalendarDayResults } from '@italia/actions';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import { useIntl } from 'react-intl';
import cx from 'classnames';

const Item = ({ day, path, data, inEdit }) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  const querystringResults = useSelector((state) => state.calendarDaySearch);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const newData = JSON.parse(JSON.stringify(data));
    newData.query?.push({
      i: 'start',
      o: 'plone.app.querystring.operation.date.between',
      v: [
        moment(day).startOf('day').format('YYYY/MM/DD HH:mm'),
        moment(day).endOf('day').format('YYYY/MM/DD HH:mm'),
      ],
    });
    dispatch(getCalendarDayResults(path, { ...newData, fullobjects: 1 }, day));
  }, []);

  return (
    <div>
      <div className="pl-3">
        <div className={cx('day', { 'mb-3': inEdit })}>
          {moment(day).format('DD')}
        </div>
        <div className="day-week">{moment(day).format('ddd')}</div>
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
                  <Link
                    className="calendar-type"
                    to={flattenToAppURL(item['@id'] || '')}
                  >
                    {item.title}
                  </Link>
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
