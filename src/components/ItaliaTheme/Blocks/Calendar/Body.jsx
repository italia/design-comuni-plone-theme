import React, { useCallback, useEffect, useState } from 'react';
import {
  Card,
  Row,
  Col,
  Container,
} from 'design-react-kit/dist/design-react-kit';

import Slider from 'react-slick';
import cx from 'classnames';
import { getCalendarResults } from '@italia/actions';
import { useDispatch, useSelector } from 'react-redux';
import Item from '@italia/components/ItaliaTheme/Blocks/Calendar/Item';
import { useIntl, defineMessages } from 'react-intl';
import { viewDate } from '@italia/helpers';
import useDeepCompareEffect from 'use-deep-compare-effect';

const messages = defineMessages({
  insert_filter: {
    id: 'insert_filter',
    defaultMessage:
      'Inserire un filtro dal menù laterale per visualizzare i relativi risultati',
  },
});

const copyFields = ['limit', 'query', 'sort_on', 'sort_order', 'depth'];

const Body = ({ data, block, inEditMode, path, onChangeBlock }) => {
  const intl = useIntl();

  const [activePage, setActivePage] = useState(0);

  const calendarResults = useSelector(
    (state) => state.calendarSearch.subrequests,
  );

  const dispatch = useDispatch();

  const getMonth = useCallback(() => {
    const startIndex = activePage * (data.b_size || 4);

    const months = calendarResults[block]?.items
      ?.slice(activePage, startIndex + (+data.b_size || 4))
      .reduce((total, date) => {
        const month = viewDate(intl.locale, date, 'MMMM');

        if (!total.includes(month)) {
          total.push(month);
        }
        return total;
      }, []);

    return months
      ?.map((m) => m.charAt(0).toUpperCase() + m.slice(1))
      .join(' / ');
  }, [activePage, block, calendarResults, data.b_size, intl.locale]);

  const [monthName, setMonthName] = useState(getMonth);

  const querystring = data.querystring || data; // For backwards compat with data saved before Blocks schema
  const adaptedQuery = Object.assign(
    {
      fullobjects: 1,
    },
    ...copyFields.map((name) =>
      Object.keys(querystring).includes(name)
        ? { [name]: querystring[name] }
        : {},
    ),
  );
  const hasQuery = querystring?.query?.length > 0;

  useDeepCompareEffect(() => {
    if (hasQuery) {
      dispatch(getCalendarResults(path, adaptedQuery, block));
    } else {
      dispatch(
        getCalendarResults(
          path,
          {
            query: [
              {
                i: 'portal_type',
                o: 'plone.app.querystring.operation.selection.any',
                v: ['Event'],
              },
            ],
            fullobjects: 1,
          },
          block,
        ),
      );
    }
  }, [adaptedQuery, block, hasQuery, path, dispatch]);

  // Every time the page changes check the name of the month, and
  // update the month name when the call to getCalendarResults returns
  useEffect(() => {
    setMonthName(getMonth);
  }, [activePage, calendarResults, getMonth]);

  const settings = {
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: data.b_size || 4,
    slidesToScroll: data.b_size || 4,
    infinite: false,
    initialSlide: 0,
    dotsClass: 'slick-dots dot',
    lazyLoad: true,
    afterChange: (current, next) => setActivePage(current),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={cx('full-width', {
        'bg-light py-5': data.show_block_bg,
        'public-ui': inEditMode,
        [data.bg_color]: data.bg_color,
      })}
    >
      <Container className="px-4">
        {data.title && (
          <Row>
            <Col>
              <h2 className="mb-4">{data.title}</h2>
            </Col>
          </Row>
        )}
        <Card className="card-bg">
          <div className="text-center calendar-header">
            <h3>{monthName}</h3>
          </div>
          <div className="calendar-body">
            {data.query?.length > 0 ? (
              <Slider {...settings}>
                {calendarResults[block]?.items?.map((day, index) => (
                  <div key={index} className="body">
                    <Item
                      day={day}
                      query={adaptedQuery}
                      path={path}
                      inEditMode={inEditMode}
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              inEditMode && (
                <span>{intl.formatMessage(messages.insert_filter)}</span>
              )
            )}
          </div>
        </Card>
      </Container>
    </div>
  );
};
export default Body;
