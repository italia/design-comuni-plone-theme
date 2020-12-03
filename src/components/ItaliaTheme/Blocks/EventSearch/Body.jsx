import React, { useState, useReducer, useEffect } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Button,
  Spinner,
} from 'design-react-kit/dist/design-react-kit';
import moment from 'moment/min/moment-with-locales';
import cx from 'classnames';

import { getQueryStringResults } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import CardWithImageTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/CardWithImageTemplate';
import { Pagination } from '@italia/components/ItaliaTheme';

import {
  TextFilter,
  SelectFilter,
  DateFilter,
} from '@italia/components/ItaliaTheme/Blocks/EventSearch/Filters';
import FiltersConfig from '@italia/components/ItaliaTheme/Blocks/EventSearch/FiltersConfig';

const messages = defineMessages({
  find: {
    id: 'find',
    defaultMessage: 'Cerca',
  },
  insert_filter: {
    id: 'insert_filter',
    defaultMessage:
      'Inserire un filtro dal menù laterale per visualizzare i relativi risultati',
  },
  venues: {
    id: 'venues',
    defaultMessage: 'Luoghi',
  },
  noResult: {
    id: 'noResult',
    defaultMessage: 'Nessun risultato trovato',
  },
});

const Body = ({ data, inEditMode, path, onChangeBlock }) => {
  const intl = useIntl();
  const b_size = 6;
  moment.locale(intl.locale);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const subsite = useSelector((state) => state.subsite?.data);
  const dispatch = useDispatch();

  const querystringResults = useSelector((state) => {
    return state.querystringsearch?.subrequests?.results;
  });
  const items = querystringResults?.items;

  // const filters = {
  //   text_filter: {
  //     filter: TextFilter,
  //     value: '',
  //     type: 'text_filter',
  //     label: 'Filtro di testo',
  //     onChange: (data, filter) => {
  //       dispatchFilter({
  //         filter: filter,
  //         value: data ?? '',
  //       });
  //     },
  //   },
  //   venue_filter: {
  //     filter: SelectFilter,
  //     value: null,
  //     type: 'venue_filter',
  //     label: 'Filtro per luogo',
  //     options: {
  //       dispatch: {
  //         path: subsite ? flattenToAppURL(subsite['@id']) : '/',
  //         portal_types: ['Venue'],
  //         fullobjects: 0,
  //         b_size: 10000,
  //         subrequests_name: 'venues',
  //       },
  //       placeholder: intl.formatMessage(messages.venues),
  //     },
  //     onChange: (data, filter) => {
  //       dispatchFilter({
  //         filter: filter,
  //         value: data,
  //       });
  //     },
  //   },
  //   date_filter: {
  //     filter: DateFilter,
  //     type: 'date_filter',
  //     label: 'Filtro per data',
  //     value: {
  //       startDate: moment().startOf('day'),
  //       endDate: moment().endOf('day'),
  //     },
  //     onChange: (startDate, endDate, filter) => {
  //       dispatchFilter({
  //         filter: filter,
  //         value: { startDate, endDate },
  //       });
  //     },
  //   },
  // };

  const doRequest = (page = currentPage) => {
    setLoading(true);
    let query = [];
    const date_fmt = 'YYYY-MM-DD HH:mm';

    [filterOne, filterTwo, filterThree].forEach((f) => {
      switch (f.type) {
        case 'text_filter':
          if (f.value) {
            query.push({
              i: 'SearchableText',
              o: 'plone.app.querystring.operation.string.contains',
              v: f.value,
            });
          }
          break;

        case 'venue_filter':
          if (f.value && f.value.value) {
            query.push({
              i: 'event_location',
              o: 'plone.app.querystring.operation.selection.any',
              v: f.value?.value,
            });
          }
          break;

        case 'date_filter':
          if (f.value?.startDate) {
            let start = f.value.startDate.startOf('day')?.format(date_fmt);
            let end = f.value.endDate
              ? f.value.endDate.endOf('day')?.format(date_fmt)
              : null;

            if (start && end) {
              query.push({
                i: 'start',
                o: 'plone.app.querystring.operation.date.between',
                v: [start, end],
              });
            } else {
              query.push({
                i: 'start',
                o: 'plone.app.querystring.operation.date.largerThan',
                v: start,
              });
            }
          }

          if (f.value?.endDate) {
            let end = f.value?.endDate.endOf('day')?.format(date_fmt);
            let start = f.value?.startDate
              ? f.value?.startDate.startOf('day')?.format(date_fmt)
              : null;

            if (start && end) {
              query.push({
                i: 'end',
                o: 'plone.app.querystring.operation.date.between',
                v: [start, end],
              });
            } else {
              query.push({
                i: 'end',
                o: 'plone.app.querystring.operation.date.lessThan',
                v: end,
              });
            }
          }
          break;

        default:
          break;
      }
    });

    dispatch(
      getQueryStringResults(
        subsite ? flattenToAppURL(subsite['@id']) : '/',
        {
          fullobjects: 1,
          query: query,
          b_size: b_size,
        },
        'results',
        page,
      ),
    );
  };

  // Se cambia uno dei tre filtri resetto lo stato dei filtri
  useEffect(() => {
    dispatchFilter({ type: 'reset' });
  }, [data]);

  // Quando ricevo gli elementi imposto il loader a false
  useEffect(() => {
    setLoading(false);
  }, [items]);

  const filtersReducer = (state = getInitialState(), action) => {
    let newState = {
      ...state,
      filterOne: {
        ...state.filterOne,
      },
      filterTwo: {
        ...state.filterTwo,
      },
      filterThree: {
        ...state.filterThree,
      },
    };

    if (action.type === 'reset') {
      newState = {
        ...getInitialState(),
      };
    } else {
      const f = newState[action.filter];
      switch (f.type) {
        case 'text_filter':
          f.value = action.value;
          break;

        case 'venue_filter':
          f.value = action.value;
          break;

        case 'date_filter':
          f.value = {
            startDate: action.value.startDate ?? state.startDate,
            endDate: action.value.endDate ?? state.endDate,
          };
          break;
        default:
          return newState;
      }
    }
    return newState;
  };

  const filtersConfig = FiltersConfig(); // FiltersConfig(dispatchFilter);
  const getInitialState = () => {
    return {
      filterOne: filtersConfig[data?.filter_one],
      filterTwo: filtersConfig[data?.filter_two],
      filterThree: filtersConfig[data?.filter_three],
    };
  };

  const [{ filterOne, filterTwo, filterThree }, dispatchFilter] = useReducer(
    filtersReducer,
    getInitialState(),
  );

  function handleQueryPaginationChange(e, { activePage }) {
    // !isEditMode && window.scrollTo(0, 0);
    const current = activePage?.children ?? 1;
    setCurrentPage(current);
    doRequest(current);
  }

  return filterOne || filterTwo || filterThree ? (
    <Container>
      <div
        className={cx('rounded', {
          'public-ui': inEditMode,
          'bg-primary': data.bg_color === 'primary' || data.bg_color == null,
          'bg-secondary': data.bg_color === 'secondary',
        })}
      >
        <div className="d-flex justify-content-center">
          <div className="d-flex search-container align-items-center justify-content-center flex-wrap">
            {filterOne &&
              React.createElement(filterOne.widget.component, {
                ...filterOne.widget,
                component: null,
                id: 'filterOne',
              })}
            {filterTwo &&
              React.createElement(filterTwo.widget.component, {
                ...filterTwo.widget,
                component: null,
                id: 'filterTwo',
              })}
            {filterThree &&
              React.createElement(filterThree.widget.component, {
                ...filterThree.widget,
                component: null,
                id: 'filterThree',
              })}

            <Button
              color={data.button_color || 'tertiary'}
              icon={false}
              tag="button"
              onClick={() => doRequest()}
            >
              {intl.formatMessage(messages.find)}
            </Button>
          </div>
        </div>
      </div>

      {!loading ? (
        items ? (
          <div className="mt-4">
            <CardWithImageTemplate items={items} full_width={false} />
            {querystringResults.total > b_size && (
              <Pagination
                activePage={currentPage}
                totalPages={Math.ceil(querystringResults.total / b_size)}
                onPageChange={handleQueryPaginationChange}
              />
            )}
          </div>
        ) : (
          <div className="mt-4">
            <p className="text-center">
              {intl.formatMessage(messages.noResult)}
            </p>
          </div>
        )
      ) : (
        <div className="d-flex justify-content-center mt-3">
          <Spinner active />
        </div>
      )}
    </Container>
  ) : null;
};
export default Body;
