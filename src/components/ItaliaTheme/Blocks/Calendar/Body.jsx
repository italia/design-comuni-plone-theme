import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl, defineMessages } from 'react-intl';
import useDeepCompareEffect from 'use-deep-compare-effect';
import {
  FontAwesomeIcon,
  ListingLinkMore,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import { Card, Row, Col, Container, Button } from 'design-react-kit';
import cx from 'classnames';

import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

import {
  getCalendarResults,
  setOriginalQuery,
} from 'design-comuni-plone-theme/actions';
import Item from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Calendar/Item';
import { viewDate } from 'design-comuni-plone-theme/helpers';

const messages = defineMessages({
  insert_filter: {
    id: 'insert_filter',
    defaultMessage:
      'Inserire un filtro dal menù laterale per visualizzare i relativi risultati',
  },
  calendar_no_results: {
    id: 'calendar_no_results',
    defaultMessage: 'Nessun evento disponibile al momento',
  },
  calendar_next_arrow: {
    id: 'calendar_next_arrow',
    defaultMessage: 'Prossimo',
  },
  calendar_prev_arrow: {
    id: 'calendar_prev_arrow',
    defaultMessage: 'Precedente',
  },
});

const copyFields = ['limit', 'query', 'sort_on', 'sort_order', 'depth'];

const Body = ({ data, block, inEditMode, path, onChangeBlock, reactSlick }) => {
  const intl = useIntl();
  const Slider = reactSlick.default;

  const [activePage, setActivePage] = useState(0);
  const [additionalFilters, setAdditionalFilters] = useState([]);

  let currentLocationFilter = additionalFilters
    ?.filter((f) => {
      return f.i === 'event_location';
    })
    ?.map((f) => {
      return f.v;
    });
  const [locationFilter, setLocationFilter] = useState(
    currentLocationFilter?.[0] || null,
  );

  const calendarResults = useSelector(
    (state) => state.calendarSearch.subrequests,
  );

  const originalQuery = useSelector((state) =>
    state.originalQuery?.[block]?.[block]?.toArray?.(),
  );

  const dispatch = useDispatch();

  const getMonth = useCallback(() => {
    const startIndex = activePage;

    const months = calendarResults[block]?.items
      ?.slice(startIndex, startIndex + 4)
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
  }, [activePage, block, calendarResults, intl.locale]);

  const [monthName, setMonthName] = useState(getMonth);

  const querystring = data.querystring || data; // For backwards compat with data saved before Blocks schema
  const hasQuery = querystring?.query?.length > 0;

  //set original query on loading component
  useEffect(() => {
    if (!originalQuery && block && hasQuery) {
      dispatch(
        setOriginalQuery(
          block,
          block,
          JSON.parse(JSON.stringify(querystring.query)),
        ),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let query = [
    ...(originalQuery && additionalFilters.length > 0
      ? JSON.parse(JSON.stringify(originalQuery))
      : querystring.query ?? []),
  ];
  //faccio l'override dei filtri di default
  additionalFilters.forEach((filter) => {
    let replaced = false;
    query.forEach((f) => {
      if (f.i === filter.i && f.o === filter.o) {
        replaced = true;
        f.v = filter.v;
      }
    });
    if (!replaced) {
      query.push(filter);
    }
  });
  let _querystring = { ...querystring, query: query };
  const adaptedQuery = Object.assign(
    {
      fullobjects: 1,
    },
    ...copyFields.map((name) =>
      Object.keys(_querystring).includes(name)
        ? { [name]: _querystring[name] }
        : {},
    ),
  );

  useDeepCompareEffect(() => {
    if (hasQuery || additionalFilters.length > 0) {
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
  }, [adaptedQuery, block, hasQuery, path, dispatch, additionalFilters]);

  // Every time the page changes check the name of the month, and
  // update the month name when the call to getCalendarResults returns
  useEffect(() => {
    setMonthName(getMonth);
  }, [activePage, calendarResults, getMonth]);

  const addFilters = (filters = []) => {
    setAdditionalFilters(filters);
  };

  const settings = {
    dots: true,
    arrows: true,
    nextArrow: (
      <FontAwesomeIcon
        title={intl.formatMessage(messages.calendar_next_arrow)}
        icon={['fas', 'chevron-right']}
      />
    ),
    prevArrow: (
      <FontAwesomeIcon
        title={intl.formatMessage(messages.calendar_prev_arrow)}
        icon={['fas', 'chevron-left']}
      />
    ),
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
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const location_filters_buttons =
    data.show_location_filters && data.location_filters
      ? Object.keys(data.location_filters)
          .map((k) => {
            return {
              label: data.location_filters[k].label,
              location: data.location_filters[k].location?.[0],
            };
          })
          .filter((f) => f.location)
      : null;

  const addLocationFilter = (location) => {
    let new_location = locationFilter === location ? null : location;
    setLocationFilter(new_location);
    let filters = [];
    if (new_location) {
      filters = [
        {
          i: 'event_location',
          o: 'plone.app.querystring.operation.selection.any',
          v: new_location,
        },
      ];
    }
    addFilters(filters);
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
        {(data.title || location_filters_buttons) && (
          <Row
            className={cx('template-header', {
              'with-filters': location_filters_buttons,
            })}
          >
            {data.title && (
              <Col md={location_filters_buttons ? 6 : 12}>
                <h2
                  className={cx('', {
                    'mt-5': !data.show_block_bg,
                    'mb-4': !location_filters_buttons,
                  })}
                >
                  {data.title}
                </h2>
              </Col>
            )}
            {location_filters_buttons && (
              <Col md={data.title ? 6 : 12} className="path-filter-buttons">
                <div className="path-filter-buttons-wrapper">
                  {location_filters_buttons.map((button, i) => (
                    <Button
                      key={i}
                      color="primary"
                      outline={button.location['UID'] !== locationFilter}
                      size="xs"
                      icon={false}
                      tag="button"
                      onClick={(e) => {
                        addLocationFilter(button.location['UID']);
                      }}
                    >
                      {button.label}
                    </Button>
                  ))}
                </div>
              </Col>
            )}
          </Row>
        )}
        <Card className="card-bg rounded">
          <div className="text-center calendar-header rounded-top">
            <h3>{monthName || <span>&nbsp;</span>}</h3>
          </div>
          <div className="calendar-body">
            {calendarResults[block]?.items?.length > 0 ? (
              <Slider {...settings}>
                {calendarResults[block].items.map((day, index) => (
                  <div key={index} className="body">
                    <Item
                      data={data}
                      day={day}
                      query={adaptedQuery}
                      path={path}
                      inEditMode={inEditMode}
                    />
                  </div>
                ))}
              </Slider>
            ) : inEditMode ? (
              <span className="no-results">
                {intl.formatMessage(messages.insert_filter)}
              </span>
            ) : (
              <span className="no-results">
                {intl.formatMessage(messages.calendar_no_results)}
              </span>
            )}
          </div>
        </Card>
        <div className="link-more-container">
          <ListingLinkMore
            title={data.linkTitle}
            href={data.linkHref}
            linkAlign={data.linkAlign}
            className="my-4"
          />
        </div>
      </Container>
    </div>
  );
};
export default injectLazyLibs(['reactSlick'])(Body);
