/**
 * Search component.
 * @module components/theme/Search/Search
 */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl, defineMessages } from 'react-intl';
import { values, isEmpty } from 'lodash';
import cx from 'classnames';
import qs from 'query-string';
import moment from 'moment';
import {
  Container,
  Row,
  Col,
  Collapse,
  CardCategory,
  Button,
  Toggle,
  Alert,
  Spinner,
} from 'design-react-kit';
import { Skiplink, SkiplinkItem } from 'design-react-kit';
import { useLocation, useHistory } from 'react-router-dom';

import { Helmet, flattenToAppURL } from '@plone/volto/helpers';
import { resetSubsite } from 'volto-subsites';

import {
  Pagination,
  SearchSections,
  SearchTopics,
  SearchCTs,
  Icon,
  RemoveBodyClass,
  SearchResultItem,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import {
  SearchUtils,
  TextInput,
  SelectInput,
} from 'design-comuni-plone-theme/components';
import {
  getSearchFilters,
  getSearchResults,
} from 'design-comuni-plone-theme/actions';
import { useDebouncedEffect } from 'design-comuni-plone-theme/helpers';
import config from '@plone/volto/registry';

const {
  parseFetchedSections,
  parseFetchedTopics,
  parseFetchedPortalTypes,
  parseFetchedOptions,
  getSearchParamsURL,
} = SearchUtils;

const messages = defineMessages({
  search: {
    id: 'search',
    defaultMessage: 'Cerca',
  },
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
  attenzione: { id: 'Attenzione!', defaultMessage: 'Attenzione!' },
  errors_occured: {
    id: 'Sono occorsi degli errori',
    defaultMessage: 'Sono occorsi degli errori',
  },
  no_results: {
    id: 'Nessun risultato ottenuto',
    defaultMessage: 'Nessun risultato ottenuto',
  },
  content_types: {
    id: 'search_content_types',
    defaultMessage: 'Tipologia',
  },
  advFilters: {
    id: 'search_adv_filters',
    defaultMessage: 'Filtri avanzati',
  },
  skipToSearchResults: {
    id: 'search_skip_to_search_results',
    defaultMessage: 'Vai ai risultati di ricerca',
  },
  active_filters: {
    id: 'active_filters',
    defaultMessage: '{filterNumber} filtri attivati',
  },
});

const searchOrderDict = {
  relevance: {},
  date: {
    sort_on: 'Date',
  },
  sortable_title: {
    sort_on: 'sortable_title',
  },
};

const Search = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const [searchableText, setSearchableText] = useState(
    qs.parse(location.search)?.SearchableText ?? '',
  );

  const [sections, setSections] = useState({});
  const [topics, setTopics] = useState({});
  const [portalTypes, setPortalTypes] = useState({});
  const [options, setOptions] = useState({
    ...SearchUtils.defaultOptions,
    ...parseFetchedOptions({}, location),
  });

  const subsite = useSelector((state) => state.subsite?.data);

  const [customPath] = useState(qs.parse(location.search)?.custom_path ?? '');

  const [sortOn, setSortOn] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(
    qs.parse(location.search)?.b_start
      ? qs.parse(location.search).b_start / config.settings.defaultPageSize + 1
      : 1,
  );
  const [collapseFilters, _setCollapseFilters] = useState(true);
  const [advFiltersOpen, setAdvFiltersOpen] = useState(false);

  const setCollapseFilters = (collapse) => {
    _setCollapseFilters(collapse);
    if (window?.innerWidth <= 991 && collapse)
      setTimeout(
        () =>
          document
            .querySelector('main')
            ?.scrollIntoView?.({ behavior: 'smooth' }),
        100,
      );
  };

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
    let itemSection = Object.keys(sections).filter(
      (s) => flattenToAppURL(id).indexOf(s) > -1,
    );

    if (itemSection?.length > 0) {
      const section = sections[itemSection[0]];
      return <CardCategory href={section.path}>{section.title}</CardCategory>;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (Object.keys(searchFilters?.sections ?? {}).length > 0) {
      setSections(
        parseFetchedSections(searchFilters.sections, location, subsite),
      );
    }

    if (searchFilters?.topics?.length > 0) {
      setTopics(parseFetchedTopics(searchFilters.topics, location));
    }

    if (searchFilters?.portal_types?.length > 0) {
      setPortalTypes(
        parseFetchedPortalTypes(
          searchFilters.portal_types,
          config.settings.defaultExcludedFromSearch?.portalTypes,
          location,
        ),
      );
    }

    setOptions(parseFetchedOptions({}, location));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchFilters, subsite]);

  useEffect(() => {
    if (
      subsite &&
      !location.pathname.startsWith(flattenToAppURL(subsite['@id']))
    ) {
      /*la ricerca è stata fatta dal sito padre,
      poi dai risultati si è passato a un subsite,
      poi è stato fatto back dal browser per tornare ai risultati di ricerca del sito padre*/
      dispatch(resetSubsite());
    }
  }, [subsite, dispatch, location.pathname]);

  const searchResults = useSelector((state) => state.searchResults);
  useDebouncedEffect(
    () => {
      doSearch();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    600,
    [
      dispatch,
      searchableText,
      sections,
      topics,
      options,
      sortOn,
      currentPage,
      portalTypes,
    ],
  );

  const doSearch = () => {
    const queryString = getSearchParamsURL(
      searchableText?.length > 0 ? `${searchableText}*` : '',
      sections,
      topics,
      options,
      portalTypes,
      searchOrderDict[sortOn] ?? {},
      currentPage,
      customPath,
      subsite,
      intl.locale,
      true,
    );

    !isEmpty(searchResults.result) &&
      history.push(
        getSearchParamsURL(
          searchableText,
          sections,
          topics,
          options,
          {},
          searchOrderDict[sortOn] ?? {},
          currentPage,
          customPath,
          subsite,
          intl.locale,
          false,
        ),
      );

    dispatch(getSearchResults(queryString));
  };

  let activeSections = values(sections).reduce((acc, sec) => {
    return acc + values(sec.items).filter((i) => i.value).length;
  }, 0);
  let activeTopics = values(topics).filter((t) => t.value).length;
  let activePortalTypes = values(portalTypes).filter((ct) => ct.value).length;
  return (
    <>
      <Helmet title={intl.formatMessage(messages.searchResults)} />

      <div className="public-ui search-view">
        <Container className="px-4 my-4">
          <Row>
            <Col>
              <Row>
                <Col className="pb-3 pb-lg-5">
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
                        className="rounded-0 py-0"
                        onClick={doSearch}
                        aria-label={intl.formatMessage(messages.search)}
                      >
                        <Icon
                          color=""
                          icon="it-search"
                          padding={false}
                          size="lg"
                        />
                      </Button>
                    }
                    aria-controls="search-results-region"
                  />
                </Col>
              </Row>
              <Skiplink tag="div">
                <SkiplinkItem href="#search-results-region" tag="a">
                  {intl.formatMessage(messages.skipToSearchResults)}
                </SkiplinkItem>
              </Skiplink>
              <div className="d-block d-lg-none d-xl-none">
                <div className="row pb-3">
                  <div className="col-6">
                    {searchResults?.result?.items_total > 0 && (
                      <small aria-live="polite">
                        {intl.formatMessage(messages.foundNResults, {
                          total: searchResults.result.items_total,
                        })}
                      </small>
                    )}
                  </div>
                  <div className="col-6 align-self-center">
                    <div className="float-end">
                      <a
                        onClick={() => setCollapseFilters((prev) => !prev)}
                        href="#categoryCollapse"
                        role="button"
                        className={cx('btn btn-sm fw-bold text-uppercase', {
                          'btn-outline-primary': collapseFilters,
                          'btn-primary': !collapseFilters,
                        })}
                        data-toggle="collapse"
                        aria-expanded={!collapseFilters}
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
              <div className="pe-4"></div>
              <Collapse
                isOpen={!collapseFilters}
                className="d-lg-block d-xl-block"
                id="categoryCollapse"
              >
                {Object.keys(sections)?.length > 0 && (
                  <div className="pt-4 pt-lg-0">
                    <h6 className="text-uppercase">
                      {intl.formatMessage(messages.sections)}

                      <span
                        className={cx('badge bg-secondary ms-3', {
                          'visually-hidden': activeSections === 0,
                        })}
                        aria-live="polite"
                        aria-label={intl.formatMessage(
                          messages.active_filters,
                          {
                            filterNumber: activeSections,
                          },
                        )}
                      >
                        {activeSections}
                      </span>
                    </h6>
                    <div className="mt-4">
                      <SearchSections
                        sections={sections}
                        setSections={setSections}
                        toggleGroups={true}
                      />
                    </div>
                  </div>
                )}

                {Object.keys(topics)?.length > 0 && (
                  <div
                    className={
                      Object.keys(sections)?.length > 0
                        ? 'pt-4 pt-lg-5'
                        : 'pt-4 pt-lg-0'
                    }
                  >
                    <h6 className="text-uppercase">
                      {intl.formatMessage(messages.topics)}

                      <span
                        className={cx('badge bg-secondary ms-3', {
                          'visually-hidden': activeTopics === 0,
                        })}
                        aria-live="polite"
                        aria-label={intl.formatMessage(
                          messages.active_filters,
                          {
                            filterNumber: activeTopics,
                          },
                        )}
                      >
                        {activeTopics}
                      </span>
                    </h6>
                    <div className="form-check mt-4">
                      <SearchTopics
                        topics={topics}
                        setTopics={setTopics}
                        collapsable={true}
                      />
                    </div>
                  </div>
                )}

                {Object.keys(portalTypes).length > 0 && (
                  <div className="pt-5">
                    <Button
                      color="secondary"
                      outline
                      icon
                      size="small"
                      onClick={() => setAdvFiltersOpen(!advFiltersOpen)}
                      className="justify-content-start w-100 ps-2"
                      aria-expanded={advFiltersOpen}
                    >
                      <Icon
                        icon={advFiltersOpen ? 'it-minus' : 'it-plus'}
                        padding
                      />
                      {intl.formatMessage(messages.advFilters)}
                    </Button>
                    <Collapse isOpen={advFiltersOpen} id="advFilters">
                      <div className="p-3 shadow-sm bg-white">
                        <h6 className="text-uppercase">
                          {intl.formatMessage(messages.content_types)}

                          <span
                            className={cx('badge bg-secondary ms-3', {
                              'visually-hidden': activePortalTypes === 0,
                            })}
                            aria-live="polite"
                            aria-label={intl.formatMessage(
                              messages.active_filters,
                              {
                                filterNumber: activePortalTypes,
                              },
                            )}
                          >
                            {activePortalTypes}
                          </span>
                        </h6>
                        <div className="form-checck mt-4">
                          <SearchCTs
                            portalTypes={portalTypes}
                            setPortalTypes={setPortalTypes}
                            collapsable
                          />
                        </div>
                      </div>
                    </Collapse>
                  </div>
                )}

                {values(options).filter((o) => o !== null && o !== undefined)
                  .length > 0 && (
                  <div className="pt-4 pt-lg-5">
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
                          aria-controls="search-results-region"
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
                        <span className="visually-hidden">
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
                        <span className="visually-hidden">
                          {intl.formatMessage(messages.removeOption)}
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </Collapse>
            </aside>

            <Col lg={9} tag="section" className="py-lg-5">
              <div
                className="search-results-wrapper"
                id="search-results-region"
                aria-live="polite"
              >
                <div className="d-block ordering-widget">
                  <Row className="pb-3 border-bottom">
                    <Col xs={6} className="align-self-center">
                      <p className="d-none d-lg-block" aria-live="polite">
                        {intl.formatMessage(messages.foundNResults, {
                          total: searchResults?.result?.items_total || 0,
                        })}
                      </p>
                      <p className="d-block d-lg-none mb-0 text-end">
                        {intl.formatMessage(messages.orderBy)}
                      </p>
                    </Col>
                    <Col xs={6}>
                      <SelectInput
                        id="search-sort-on"
                        value={
                          sortOnOptions.filter((o) => o.value === sortOn)[0]
                        }
                        label={intl.formatMessage(messages.orderBy)}
                        placeholder={
                          sortOnOptions.find((o) => o.value === sortOn).label
                        }
                        onChange={(opt) => setSortOn(opt.value)}
                        options={sortOnOptions}
                        defaultValue={sortOnOptions.find(
                          (o) => o.value === 'relevance',
                        )}
                      />
                    </Col>
                  </Row>
                </div>

                {searchResults.loadingResults ||
                (!searchResults.hasError && isEmpty(searchResults.result)) ? (
                  <div className="searchSpinnerWrapper">
                    <Spinner active />
                  </div>
                ) : searchResults?.result?.items_total > 0 ? (
                  <>
                    <Row>
                      {searchResults?.result?.items?.map((item, index) => (
                        <Col md={12} key={item['@id']} className="p-0">
                          <SearchResultItem
                            item={item}
                            index={index}
                            searchableText={searchableText}
                            section={getSectionFromId(item['@id'])}
                          />
                        </Col>
                      ))}
                    </Row>
                    {searchResults?.result?.batching && (
                      <Pagination
                        activePage={currentPage}
                        totalPages={Math.ceil(
                          (searchResults?.result?.items_total ?? 0) /
                            config.settings.defaultPageSize,
                        )}
                        onPageChange={handleQueryPaginationChange}
                      />
                    )}
                  </>
                ) : searchResults.error ? (
                  <Alert color="danger">
                    <strong>{intl.formatMessage(messages.attenzione)}</strong>{' '}
                    {intl.formatMessage(messages.errors_occured)}
                  </Alert>
                ) : (
                  !searchResults?.hasError &&
                  !isEmpty(searchResults?.result) &&
                  searchResults.result?.items.length === 0 && (
                    <p>{intl.formatMessage(messages.no_results)}</p>
                  )
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/*force remove body class for subsite search pages*/}
      <RemoveBodyClass className="cms-ui" />
    </>
  );
};

export default Search;
