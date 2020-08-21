/**
 * Search component.
 * @module components/theme/Search/Search
 */

import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl, defineMessages } from 'react-intl';
import cx from 'classnames';
import qs from 'query-string';
import moment from 'moment';
import {
  Container,
  Row,
  Col,
  Collapse,
  Card,
  CardBody,
  CardCategory,
  Icon,
  Button,
  Toggle,
  Alert,
  Spinner,
} from 'design-react-kit/dist/design-react-kit';
import { Link, useLocation, useHistory } from 'react-router-dom';
import {
  Pagination,
  SearchSections,
  SearchTopics,
} from '@italia/components/ItaliaTheme';
import { SearchUtils, TextInput, SelectInput } from '@italia/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { getSearchFilters, getSearchResults } from '@italia/actions';
import { settings } from '@italia/config';

const {
  parseFetchedSections,
  parseFetchedTopics,
  parseFetchedOptions,
  getSearchParamsURL,
} = SearchUtils;

const messages = defineMessages({
  searchResults: {
    id: 'Search results',
    defaultMessage: 'Risultati della ricerca',
  },
  searchSite: {
    id: 'Search site',
    defaultMessage: 'Cerca nel sito',
  },
  sections: {
    id: 'sections',
    defaultMessage: 'Sezioni',
  },
  topics: {
    id: 'topics',
    defaultMessage: 'Argomenti',
  },
  options: {
    id: 'options',
    defaultMessage: 'Opzioni',
  },
  removeOption: {
    id: 'removeOption',
    defaultMessage: 'Rimuovi opzione',
  },
  optionActiveContentLabel: {
    id: 'optionActiveContentLabel',
    defaultMessage: 'Contenuti attivi',
  },
  optionActiveContentInfo: {
    id: 'optionActiveContentInfo',
    defaultMessage:
      'Verranno esclusi dalla ricerca i contenuti archiviati e non più validi come gli eventi terminati o i bandi scaduti.',
  },
  optionDateStartButton: {
    id: 'optionDateStartButton',
    defaultMessage: 'Dal',
  },
  optionDateEndButton: {
    id: 'optionDateEndButton',
    defaultMessage: 'Al',
  },
  orderBy: {
    id: 'order_by',
    defaultMessage: 'Ordina per',
  },
  sort_on_date: {
    id: 'sort_on_date',
    defaultMessage: 'Data (prima i più recenti)',
  },
  sort_on_relevance: {
    id: 'sort_on_relevance',
    defaultMessage: 'Rilevanza',
  },
  sort_on_title: {
    id: 'sort_on_title',
    defaultMessage: 'Alfabeticamente',
  },
  foundNResults: {
    id: 'found_n_results',
    defaultMessage: 'Trovati {total} risultati.',
  },
  filtersCollapse: {
    id: 'filtersCollapse',
    defaultMessage: 'Filtri',
  },
  section_undefined: {
    id: 'section_undefined',
    defaultMessage: 'altro',
  },
});

const searchOrderDict = {
  relevance: {},
  date: {
    sort_on: 'Date',
    sort_order: 'reverse',
  },
  sortable_title: {
    sort_on: 'sortable_title',
  },
};

const useDebouncedEffect = (effect, delay, deps) => {
  const callback = useCallback(effect, deps);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
};

const Search = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const [searchableText, setSearchableText] = useState(
    qs.parse(location.search)?.SearchableText ?? '',
  );
  const [sections, setSections] = useState({
    amministrazione: {},
    servizi: {},
    novita: {},
    'documenti-e-dati': {},
  });

  const [topics, setTopics] = useState({});

  const [options, setOptions] = useState({
    ...SearchUtils.defaultOptions,
    ...parseFetchedOptions({}, location),
  });

  const [customPath, setCustomPath] = useState(
    qs.parse(location.search)?.custom_path ?? '',
  );

  const [sortOn, setSortOn] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const [collapseFilters, setCollapseFilters] = useState(true);

  const sortOnOptions = [
    {
      value: 'relevance',
      label: intl.formatMessage(messages.sort_on_relevance),
    },
    {
      value: 'date',
      label: intl.formatMessage(messages.sort_on_date),
    },
    {
      value: 'sortable_title',
      label: intl.formatMessage(messages.sort_on_title),
    },
  ];

  const getSectionFromId = (id) => {
    let itemSection = Object.keys(sections).filter((s) => id.indexOf(s) > -1);

    if (itemSection?.length > 0) {
      let sectionURL = `/${itemSection[0]}`;
      let sectionLabel = itemSection[0].replace(/-/g, ' ');

      return <CardCategory href={sectionURL}>{sectionLabel}</CardCategory>;
    } else {
      return (
        <div className="category-top">
          <span className="category">
            {intl.formatMessage(messages.section_undefined)}
          </span>
          <span className="data"></span>
        </div>
      );
    }
  };

  const handleQueryPaginationChange = (_e, { activePage }) => {
    window.scrollTo(0, 0);
    setCurrentPage(activePage?.children ?? 1);
  };

  const searchFilters = useSelector((state) => state.searchFilters.result);
  useEffect(() => {
    if (!searchFilters || Object.keys(searchFilters).length === 0)
      dispatch(getSearchFilters());
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(searchFilters?.sections ?? {}).length > 0) {
      setSections(parseFetchedSections(searchFilters.sections, location));
    }

    if (searchFilters?.topics?.length > 0) {
      setTopics(parseFetchedTopics(searchFilters.topics, location));
    }

    setOptions(parseFetchedOptions({}, location));
  }, [searchFilters]);

  const searchResults = useSelector((state) => state.searchResults);
  useDebouncedEffect(
    () => {
      doSearch();
    },
    600,
    [dispatch, searchableText, sections, topics, options, sortOn, currentPage],
  );

  const doSearch = () => {
    const queryString = getSearchParamsURL(
      searchableText?.length > 0 ? `${searchableText}*` : '',
      sections,
      topics,
      options,
      searchOrderDict[sortOn] ?? {},
      (currentPage - 1) * settings.defaultPageSize,
      customPath,
    );

    searchResults.result &&
      history.push(
        getSearchParamsURL(
          searchableText,
          sections,
          topics,
          options,
          searchOrderDict[sortOn] ?? {},
          (currentPage - 1) * settings.defaultPageSize,
          customPath,
        ),
      );
    dispatch(getSearchResults(queryString.replace('/search', '')));
  };

  return (
    <div className="public-ui">
      <Container className="px-4 my-4">
        <Row>
          <Col>
            <Row>
              <Col className="py-3 py-lg-5">
                <h1>{intl.formatMessage(messages.searchResults)}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <TextInput
                  id="searchableText"
                  label={intl.formatMessage(messages.searchSite)}
                  value={searchableText}
                  onChange={(id, value) => {
                    setSearchableText(value);
                  }}
                  size="lg"
                  prepend={
                    <Button
                      icon
                      tag="button"
                      color="link"
                      size="xs"
                      onClick={doSearch}
                    >
                      <Icon
                        color=""
                        icon="it-search"
                        padding={false}
                        size="lg"
                      />
                    </Button>
                  }
                />
              </Col>
            </Row>
            <div className="d-block d-lg-none d-xl-none">
              <div className="row pb-3">
                <div className="col-6">
                  {searchResults?.result?.items_total && (
                    <small>
                      {intl.formatMessage(messages.foundNResults, {
                        total: searchResults.result.items_total,
                      })}
                    </small>
                  )}
                </div>
                <div className="col-6">
                  <div className="float-right">
                    <a
                      onClick={() => setCollapseFilters((prev) => !prev)}
                      href="#categoryCollapse"
                      role="button"
                      className="font-weight-bold text-uppercase"
                      data-toggle="collapse"
                      aria-expanded={collapseFilters}
                      aria-controls="categoryCollapse"
                    >
                      {intl.formatMessage(messages.filtersCollapse)}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <aside className="col-lg-3 py-lg-5">
            <div className="pr-4"></div>
            <Collapse
              isOpen={!collapseFilters}
              className="d-lg-block d-xl-block"
              id="categoryCollapse"
            >
              <div className="pt-4 . pt-lg-0">
                <h6 className="text-uppercase">
                  {intl.formatMessage(messages.sections)}
                </h6>
                <div className="form-checck mt-4">
                  <SearchSections
                    sections={sections}
                    setSections={setSections}
                    toggleGroups={true}
                  />
                </div>
              </div>
              <div className="pt-2 pt-lg-5">
                <h6 className="text-uppercase">
                  {intl.formatMessage(messages.topics)}
                </h6>
                <div className="form-check mt-4">
                  <SearchTopics
                    topics={topics}
                    setTopics={setTopics}
                    collapsable={true}
                  />
                </div>
              </div>

              {Object.values(options).filter(
                (o) => o !== null && o !== undefined,
              ).length > 0 && (
                <div className="pt-2 pt-lg-5">
                  <h6 className="text-uppercase">
                    {intl.formatMessage(messages.options)}
                  </h6>
                  {options.activeContent !== undefined && (
                    <div className="form-check mt-4">
                      <Toggle
                        label={intl.formatMessage(
                          messages.optionActiveContentLabel,
                        )}
                        id="options-active-content"
                        checked={options.activeContent}
                        onChange={(e) => {
                          const checked = e.currentTarget?.checked ?? false;
                          setOptions((opts) => ({
                            ...opts,
                            activeContent: checked,
                          }));
                        }}
                      />
                      <p className="small">
                        {intl.formatMessage(messages.optionActiveContentInfo)}
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="form-check mt-4">
                {options?.dateStart && (
                  <div
                    role="presentation"
                    className="chip chip-lg selected"
                    onClick={() =>
                      setOptions((opts) => ({ ...opts, dateStart: null }))
                    }
                  >
                    <span className="chip-label">
                      {`${intl.formatMessage(
                        messages.optionDateStartButton,
                      )} ${moment(options.dateStart)
                        .locale(intl.locale)
                        .format('LL')}`}
                    </span>
                    <button type="button">
                      <Icon color="" icon="it-close" padding={false} />
                      <span className="sr-only">
                        {intl.formatMessage(messages.removeOption)}
                      </span>
                    </button>
                  </div>
                )}
                {options?.dateEnd && (
                  <div
                    role="presentation"
                    className="chip chip-lg selected"
                    onClick={() =>
                      setOptions((opts) => ({ ...opts, dateEnd: null }))
                    }
                  >
                    <span className="chip-label">
                      {`${intl.formatMessage(
                        messages.optionDateEndButton,
                      )} ${moment(options.dateEnd)
                        .locale(intl.locale)
                        .format('LL')}`}
                    </span>
                    <button type="button">
                      <Icon color="" icon="it-close" padding={false} />
                      <span className="sr-only">
                        {intl.formatMessage(messages.removeOption)}
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </Collapse>
          </aside>

          <Col lg={9} tag="section" className="py-lg-5">
            {searchResults.loadingResults ? (
              <Spinner active />
            ) : searchResults?.result?.items_total > 0 ? (
              <div className="search-results-wrapper">
                <div className="d-none d-lg-block d-xl-block">
                  <Row className="pb-3 px-4 border-bottom">
                    <Col xs={6} className="align-self-center">
                      <p>
                        {intl.formatMessage(messages.foundNResults, {
                          total: searchResults.result.items_total,
                        })}
                      </p>
                    </Col>
                    <Col xs={6}>
                      <SelectInput
                        id="search-sort-on"
                        value={
                          sortOnOptions.filter((o) => o.value === sortOn)[0]
                        }
                        label={intl.formatMessage(messages.orderBy)}
                        placeholder={intl.formatMessage(messages.orderBy)}
                        onChange={(opt) => setSortOn(opt.value)}
                        options={sortOnOptions}
                      />
                    </Col>
                  </Row>
                </div>
                <Row>
                  {searchResults?.result?.items?.map((i) => (
                    <Col md={4} key={i['@id']}>
                      <Card
                        teaser
                        noWrapper={true}
                        className={cx('mt-3 mb-2 border-bottom-half', {
                          'border-right border-light': i % 3 !== 2,
                        })}
                      >
                        <CardBody>
                          {i['@type'] && getSectionFromId(i['@id'])}
                          <h4 className="card-title">
                            <Link to={flattenToAppURL(i['@id'])}>
                              {i.title}
                            </Link>
                          </h4>
                          <p className="card-text">{i.description}</p>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
                {searchResults?.result?.batching && (
                  <Pagination
                    activePage={currentPage}
                    totalPages={Math.ceil(
                      (searchResults?.result?.items_total ?? 0) /
                        settings.defaultPageSize,
                    )}
                    onPageChange={handleQueryPaginationChange}
                  />
                )}
              </div>
            ) : searchResults.error ? (
              <Alert color="danger">
                <strong>Attenzione!</strong> Sono occorsi degli errori
              </Alert>
            ) : (
              <p>Nessun risultato ottenuto</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
