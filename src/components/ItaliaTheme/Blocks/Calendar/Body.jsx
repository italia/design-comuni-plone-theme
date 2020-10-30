import React, { useState } from 'react'
import { Card, Row, Col, Container} from 'design-react-kit/dist/design-react-kit';
import 'moment/min/locales';
import Slider from 'react-slick';
import cx from 'classnames';
import { getCalendarResults } from '@italia/actions';
import { useDispatch, useSelector } from 'react-redux';
import Item from './Item'
import moment from 'moment';
import { useIntl } from 'react-intl';
import 'moment/min/locales';

const Body = ({ data, inEditMode, path }) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  const [activePage, setActivePage] = useState(0);

  const querystringResults = useSelector(
    (state) => state.calendarSearch,
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (data?.query?.length > 0) {
      dispatch(
        getCalendarResults(path, { ...data, fullobjects: 1 }, data.block, '@scadenziario'),
      );
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [data]);

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
    afterChange: (current, next) => setActivePage({ activeSlide: next }),
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

  const getMonth = () => {
    const startIndex = activePage * (data.b_size || 4);

    const months = querystringResults?.items?.slice(startIndex, (data.b_size || 4)).reduce((total, date) => {
      const month = moment(date).format('MMMM');
      if(!total.includes(month)) {
        total.push(month);
      }
      return total;
    },[]);

    return months?.map(m=> m.charAt(0).toUpperCase() + m.slice(1)).join(' / ');
  }

  return (
    <div className={cx("full-width", {'bg-light py-5': data.show_block_bg, "public-ui": inEditMode })}>
      <Container>
        {data.title && (
          <Row>
            <Col>
              <h2 className="mb-4">{data.title}</h2>
            </Col>
          </Row>
        )}
        <Card className={cx("card-bg")}>
          <div className="text-center calendar-header">
            <h3>{getMonth()}</h3>
          </div>
          <div className="calendar-body">
            {!inEditMode ? 
            <Slider {...settings}>
              {querystringResults?.items?.map((day, index) => (
                <div key={index} className="body">
                  <Item day={day} data={data} path={path}/>
                </div>
              ))}
            </Slider>
            :
            <div className="d-flex">
              {querystringResults?.items?.slice(0, data.b_size)?.map((day, index) => (
                <div key={index} className="body flex-1">
                  <Item day={day} data={data} path={path} inEdit={inEditMode}/>
                </div>
              ))}
            </div>
            }
          </div>
        </Card>
      </Container>
    </div>
  )
}
export default Body;
