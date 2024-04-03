import React, { useState, useReducer, useEffect, createRef } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button, Spinner } from 'design-react-kit';
import moment from 'moment';
import cx from 'classnames';

import { getQueryStringResults } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import BandiInEvidenceTemplate from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/BandiInEvidenceTemplate';
import { Pagination } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { resetQuerystringResults } from 'design-comuni-plone-theme/actions';
import FiltersConfig from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/BandiSearch/FiltersConfig';

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

const Body = ({ data, id, inEditMode, path, onChangeBlock }) => {
  const intl = useIntl();
  const b_size = 6;

  moment.locale(intl.locale);

  const [currentPage, setCurrentPage] = useState(1);
  const subsite = useSelector((state) => state.subsite?.data);

  const dispatch = useDispatch();

  const querystringResults = useSelector((state) => {
    return state.querystringsearch?.subrequests?.[id + '_bandi_search'];
  });
  const items = useSelector((state) => {
    return (
      state.querystringsearch?.subrequests?.[id + '_bandi_search']?.items ?? []
    );
  });

  const loading = useSelector((state) => {
    return (
      state.querystringsearch?.subrequests?.[id + '_bandi_search']?.loading ||
      false
    );
  });

  const resultsRef = createRef();

  const doRequest = (page = currentPage) => {
    let query = [
      {
        i: 'portal_type',
        o: 'plone.app.querystring.operation.selection.any',
        v: ['Bando'],
      },
    ];

    [filterOne, filterTwo, filterThree].forEach((f) => {
      if (f?.widget) {
        const value = f.widget.props.value;
        if (f.query) {
          f.query(value, query);
        }
      }
    });

    if (data.location && data.location[0]) {
      query.push({
        i: 'path',
        o: 'plone.app.querystring.operation.string.absolutePath',
        v: flattenToAppURL(data.location[0]['@id']),
      });
    }

    dispatch(
      getQueryStringResults(
        subsite ? flattenToAppURL(subsite['@id']) : '',
        {
          fullobjects: 1,
          query: query,
          b_size: b_size,
          sort_on: data.sort_on,
          sort_order: data.sort_order ? 'descending' : 'ascending',
        },
        id + '_bandi_search',
        page,
      ),
    );
  };

  // Se cambia uno dei tre filtri resetto lo stato dei filtri
  useEffect(() => {
    dispatchFilter({ type: 'reset' });
  }, [data]);

  const filtersReducer = (state = getInitialState(), action) => {
    let newState = {
      ...state,
    };

    if (action.type === 'reset') {
      newState = {
        ...getInitialState(),
      };
      dispatch(resetQuerystringResults(id + '_bandi_search'));
    } else {
      const f = newState[action.filter];
      const defaultReducer = (value, state) => value;
      const reducer = f.reducer || defaultReducer;
      f.widget.props.value = reducer(action.value, state[action.filter]);
    }
    return newState;
  };

  const filtersConfig = FiltersConfig(null);
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
    resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    const current = activePage?.children ?? 1;
    setCurrentPage(current);
    doRequest(current);
  }

  return filterOne || filterTwo || filterThree ? (
    <Container>
      <div
        className={cx('rounded bg-' + (data.bg_color || 'primary'), {
          'public-ui': inEditMode,
        })}
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
            doRequest(1);
          }}
        >
          <div className="d-flex justify-content-center">
            <div className="d-flex search-container align-items-center justify-content-center flex-wrap">
              {filterOne && (
                <>
                  {React.createElement(filterOne.widget.component, {
                    ...filterOne.widget?.props,
                    id: 'filterOne',
                    onChange: (filter, value) => {
                      dispatchFilter({
                        filter: filter,
                        value: value,
                      });
                    },
                  })}
                </>
              )}
              {filterTwo &&
                React.createElement(filterTwo.widget?.component, {
                  ...filterTwo.widget?.props,
                  id: 'filterTwo',
                  onChange: (filter, value) =>
                    dispatchFilter({
                      filter: filter,
                      value: value,
                    }),
                })}
              {filterThree &&
                React.createElement(filterThree.widget?.component, {
                  ...filterThree.widget?.props,
                  id: 'filterThree',
                  onChange: (filter, value) =>
                    dispatchFilter({
                      filter: filter,
                      value: value,
                    }),
                })}

              <Button
                color={data.button_color || 'tertiary'}
                icon={false}
                tag="button"
                className="my-2 my-lg-1"
              >
                {intl.formatMessage(messages.find)}
              </Button>
            </div>
          </div>
        </form>
      </div>

      {!loading ? (
        items?.length > 0 ? (
          <div className="mt-4" ref={resultsRef} aria-live="polite">
            <div className="block listing">
              <BandiInEvidenceTemplate items={items} full_width={false} />
            </div>
            {querystringResults.total > b_size && (
              <Pagination
                activePage={currentPage}
                totalPages={Math.ceil(querystringResults.total / b_size)}
                onPageChange={handleQueryPaginationChange}
              />
            )}
          </div>
        ) : querystringResults ? (
          <>
            <div className="mt-4" aria-live="polite">
              <p className="text-center">
                {intl.formatMessage(messages.noResult)}
              </p>
            </div>
          </>
        ) : null
      ) : (
        <div className="d-flex justify-content-center mt-3">
          <Spinner active />
        </div>
      )}
    </Container>
  ) : null;
};
export default Body;
