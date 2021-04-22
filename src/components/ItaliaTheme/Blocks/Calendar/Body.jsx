/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
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

const messages = defineMessages({
  insert_filter: {
    id: 'insert_filter',
    defaultMessage:
      'Inserire un filtro dal menù laterale per visualizzare i relativi risultati',
  },
});

const Body = ({ data, inEditMode, path, onChangeBlock }) => {
  const intl = useIntl();

  const [activePage, setActivePage] = useState(0);

  const querystringResults = useSelector((state) => state.calendarSearch);

  const dispatch = useDispatch();

  const getMonth = () => {
    const startIndex = activePage * (data.b_size || 4);

    const months = querystringResults?.items
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
  };

  const [monthName, setMonthName] = useState(getMonth);

  React.useEffect(() => {
    if (!data.query || data.query.length === 0) {
      data.query = [
        {
          i: 'portal_type',
          o: 'plone.app.querystring.operation.selection.any',
          v: ['Event'],
        },
      ];
    }
  }, []);

  React.useEffect(() => {
    dispatch(
      getCalendarResults(
        path,
        { ...data, fullobjects: 1 },
        data.block,
        '@scadenziario',
      ),
    );
  }, [data.query]);

  // Every time the page change check the name of the mounth
  React.useEffect(() => {
    setMonthName(getMonth);
  }, [activePage]);

  // update the mounth name when the call to getCalendarResults is ended
  React.useEffect(() => {
    setMonthName(getMonth);
  }, [querystringResults]);

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
        <Card className={'card-bg'}>
          <div className="text-center calendar-header">
            <h3>{monthName}</h3>
          </div>
          <div className="calendar-body">
            {data.query?.length > 0 ? (
              <Slider {...settings}>
                {querystringResults?.items?.map((day, index) => (
                  <div key={index} className="body">
                    <Item
                      day={day}
                      data={data}
                      path={path}
                      inEdit={inEditMode}
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
