/**
 * Search component.
 * @module components/theme/Search/Search
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { asyncConnect } from 'redux-connect';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import cx from 'classnames';
import qs from 'query-string';
import moment from 'moment';
import { searchContent } from '@plone/volto/actions';
import {
  Container,
  Row,
  Col,
  Collapse,
  Label,
  Card,
  CardBody,
  CardCategory,
  Icon,
  Button,
  Toggle,
} from 'design-react-kit/dist/design-react-kit';
import {
  Pagination,
  SearchSections,
  SearchTopics,
} from '@design/components/DesignTheme';
import { TextInput } from '@design/components';
import { settings } from '~/config';

//import { Link } from 'react-router-dom';

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
});

const toSearchOptions = (searchableText, subject, path) => {
  return {
    ...(searchableText && { SearchableText: searchableText }),
    ...(subject && {
      Subject: subject,
    }),
    ...(path && {
      path: path,
    }),
  };
};

/**
 * Search class.
 * @class SearchComponent
 * @extends Component
 */
class Search extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    searchContent: PropTypes.func.isRequired,
    searchableText: PropTypes.string,
    subject: PropTypes.string,
    path: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        '@id': PropTypes.string,
        '@type': PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
      }),
    ),
    pathname: PropTypes.string.isRequired,
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    items: [],
    searchableText: '',
    subject: null,
    path: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      collapseFilters: true,
      collapseTopics: true,
      filters: {
        sections: props.searchFilters?.sections ?? {},
        topics: props.searchFilters?.topics ?? {},
        options: props.searchFilters?.options ?? {},
        searchableText: props.searchableText,
      },
    };
  }

  /**
   * Component will mount
   * @method componentWillMount
   * @returns {undefined}
   */
  UNSAFE_componentWillMount() {
    this.doSearch(
      this.props.searchableText,
      this.props.subject,
      this.props.path,
    );
  }

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  UNSAFE_componentWillReceiveProps = nextProps => {
    if (
      JSON.stringify(nextProps.searchFilters) !==
      JSON.stringify(this.props.searchFilters)
    ) {
      this.setState(prevState => ({
        filters: {
          ...prevState.filters,
          sections: nextProps.searchFilters?.sections ?? {},
          topics: nextProps.searchFilters?.topics ?? {},
          options: nextProps.searchFilters?.options ?? {},
        },
      }));
    }

    if (
      nextProps.searchableText !== this.props.searchableText ||
      nextProps.subject !== this.props.subject
    ) {
      this.doSearch(
        nextProps.searchableText,
        nextProps.subject,
        this.props.path,
      );
    }
  };

  /**
   * Search based on the given searchableText, subject and path.
   * @method doSearch
   * @param {string} searchableText The searchable text string
   * @param {string} subject The subject (tag)
   * @param {string} path The path to restrict the search to
   * @returns {undefined}
   */

  doSearch = (searchableText, subject, path) => {
    this.setState({ currentPage: 1 });
    this.props.searchContent(
      '',
      toSearchOptions(searchableText, subject, path),
    );
  };

  handleQueryPaginationChange = (e, { activePage }) => {
    window.scrollTo(0, 0);
    this.setState({ currentPage: activePage }, () => {
      const options = toSearchOptions(
        qs.parse(this.props.location.search).SearchableText,
        qs.parse(this.props.location.search).Subject,
        qs.parse(this.props.location.search).path,
      );

      this.props.searchContent('', {
        ...options,
        b_start: (this.state.currentPage - 1) * settings.defaultPageSize,
      });
    });
  };

  //[TODO] da sostituire con chiamata al server per ottenere le sezioni
  sections = [
    {
      '@id': 'http://localhost:8080/Plone/amministrazione',
      title: 'Amministrazione',
    },
    {
      '@id': 'http://localhost:8080/Plone/servizi',
      title: 'Servizi',
    },
    {
      '@id': 'http://localhost:8080/Plone/novita',
      title: 'Novità',
    },
    {
      '@id': 'http://localhost:8080/Plone/documenti',
      title: 'Documenti',
    },
  ];

  toggleFilter = (filter, value) => {
    this.setState(prevState => {
      let filterValue = prevState.filters[filter];
      const i = filterValue.indexOf(value);
      if (i >= 0) {
        filterValue = filterValue.splice(i, 1);
      } else {
        filterValue.push(value);
      }

      return {
        filters: {
          ...prevState.filters,
          [filter]: filterValue,
        },
      };
    });
  };

  changeFilter = (filter, value) => {
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          [filter]: value,
        },
      };
    });
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const state = this.state;
    const intl = this.props.intl;
    return (
      <div className="public-ui">
        <Container className="px-4 my-4 ">
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
                    value={state.filters.searchableText || ''}
                    onChange={(id, value) => {
                      this.changeFilter('searchableText', value);
                    }}
                    size="lg"
                    prepend={
                      <Button icon tag="button" color="link" size="xs">
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
                    {this.props.search?.items_total && (
                      <small>
                        <FormattedMessage
                          id="Founded"
                          defaultMessage="Trovati"
                        />{' '}
                        {this.props.search.items_total}{' '}
                        <FormattedMessage
                          id="results"
                          defaultMessage="risultati"
                        />
                      </small>
                    )}
                  </div>
                  <div className="col-6">
                    <div className="float-right">
                      <a
                        onClick={e => {
                          e.preventDefault();
                          this.setState({
                            collapseFilters: !this.state.collapseFilters,
                          });
                        }}
                        href="#categoryCollapse"
                        role="button"
                        className="font-weight-bold text-uppercase"
                        data-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="categoryCollapse"
                      >
                        <FormattedMessage
                          id="Filters"
                          defaultMessage="Filtri"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            {/* className="border-top" */}

            <aside className="col-lg-3 py-lg-5">
              <div className="pr-4"></div>
              <Collapse
                isOpen={!state.collapseFilters}
                className="d-lg-block d-xl-block"
                id="categoryCollapse"
              >
                <div className="pt-4 pt-lg-0">
                  <h6 className="text-uppercase">
                    {intl.formatMessage(messages.sections)}
                  </h6>

                  <div className="form-check mt-4">
                    <SearchSections
                      defaultCheckedGroups={this.state.filters.sections}
                      onChange={value => {
                        this.changeFilter('sections', value);
                      }}
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
                      onChange={value => {
                        this.changeFilter('topics', value);
                      }}
                      defaultCheckedTopics={this.state.filters.topics}
                      collapsable={true}
                    />
                  </div>
                </div>

                {Object.values(this.state.filters.options).filter(
                  o => o !== null && o !== undefined,
                ).length > 0 && (
                  <div className="pt-2 pt-lg-5">
                    <h6 className="text-uppercase">
                      {intl.formatMessage(messages.options)}
                    </h6>
                    {this.state.filters.options?.activeContent !==
                      undefined && (
                      <div className="form-check mt-4">
                        <Toggle
                          label={intl.formatMessage(
                            messages.optionActiveContentLabel,
                          )}
                          id="options-active-content"
                          checked={
                            this.state.filters.options?.activeContent ?? false
                          }
                          onChange={e => {
                            const checked = e.currentTarget?.checked ?? false;

                            this.setState(prevState => ({
                              filters: {
                                ...prevState.filters,
                                options: {
                                  ...(prevState.filters.options ?? {}),
                                  activeContent: checked,
                                },
                              },
                            }));
                          }}
                        />
                        <p className="small">
                          {intl.formatMessage(messages.optionActiveContentInfo)}
                        </p>
                      </div>
                    )}
                    {this.state.filters.options?.dateStart && (
                      <div className="form-check mt-4">
                        <div
                          role="presentation"
                          className="chip chip-lg selected"
                          onClick={() =>
                            this.setState(prevState => ({
                              filters: {
                                ...prevState.filters,
                                options: {
                                  ...(prevState.filters.options ?? {}),
                                  dateStart: null,
                                },
                              },
                            }))
                          }
                        >
                          <span className="chip-label">
                            {`${intl.formatMessage(
                              messages.optionDateStartButton,
                            )} ${moment(this.state.filters.options.dateStart)
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
                      </div>
                    )}
                    {this.state.filters.options?.dateEnd && (
                      <div className="form-check mt-4">
                        <div
                          role="presentation"
                          className="chip chip-lg selected"
                          onClick={() =>
                            this.setState(prevState => ({
                              filters: {
                                ...prevState.filters,
                                options: {
                                  ...(prevState.filters.options ?? {}),
                                  dateEnd: null,
                                },
                              },
                            }))
                          }
                        >
                          <span className="chip-label">
                            {`${intl.formatMessage(
                              messages.optionDateEndButton,
                            )} ${moment(this.state.filters.options.dateEnd)
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
                      </div>
                    )}
                  </div>
                )}
              </Collapse>
            </aside>
            <Col lg={9} tag="section" className="py-lg-5">
              <div className="d-none d-lg-block d-xl-block">
                <Row className="pb-3 px-4 border-bottom">
                  <Col xs={6}>
                    {this.props.search?.items_total && (
                      <small>
                        <FormattedMessage
                          id="Founded"
                          defaultMessage="Trovati"
                        />{' '}
                        {this.props.search.items_total}{' '}
                        <FormattedMessage
                          id="results"
                          defaultMessage="risultati"
                        />
                      </small>
                    )}
                  </Col>
                  <Col xs={6}>
                    <div className="float-right">
                      <Label for="filter-field">
                        <small className="mr-3">
                          <FormattedMessage
                            id="Order by"
                            defaultMessage="Ordina per"
                          />
                        </small>
                      </Label>
                      <select name="filter" id="filter-field">
                        <option value="0">Rilevanza</option>
                      </select>
                      [TODO] Fare la select
                    </div>
                  </Col>
                </Row>
              </div>
              [TODO] ciclo sui risultati. Ogni risultato è una card
              <Row>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                  <Col md={4}>
                    <Card
                      teaser
                      noWrapper={true}
                      className={cx('mt-3 mb-2 border-bottom-half', {
                        'border-right border-light': i % 3 !== 2,
                      })}
                    >
                      <CardBody>
                        <CardCategory href={'#'}>Servizi</CardCategory>

                        <h4 className="card-title">
                          <a href="#">
                            Scadenza TARI 2018: istruzioni per pagamento
                          </a>
                        </h4>
                        <p className="card-text">
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione.
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
              {this.props.search?.batching && (
                <Pagination
                  activePage={this.state.currentPage}
                  totalPages={Math.ceil(
                    this.props.search.items_total / settings.defaultPageSize,
                  )}
                  onPageChange={this.handleQueryPaginationChange}
                />
              )}
            </Col>
          </Row>
        </Container>
      </div>
      //   <Container id="page-search">
      //     <Helmet title="Search" />
      //     <div className="container">
      //       <article id="content">
      //         <header>
      //           <h1 className="documentFirstHeading">
      //             {this.props.searchableText ? (
      //               <FormattedMessage
      //                 id="Search results for {term}"
      //                 defaultMessage="Search results for {term}"
      //                 values={{
      //                   term: <q>{this.props.searchableText}</q>,
      //                 }}
      //               />
      //             ) : (
      //               <FormattedMessage
      //                 id="Search results"
      //                 defaultMessage="Search results"
      //               />
      //             )}
      //           </h1>

      //           <SearchTags />

      //           {this.props.search?.items_total && (
      //             <div className="items_total">
      //               {this.props.search.items_total}{' '}
      //               <FormattedMessage
      //                 id="results found"
      //                 defaultMessage="results"
      //               />
      //             </div>
      //           )}
      //         </header>
      //         <section id="content-core">
      //           {this.props.items.map(item => (
      //             <article className="tileItem" key={item['@id']}>
      //               <h2 className="tileHeadline">
      //                 <Link
      //                   to={item['@id']}
      //                   className="summary url"
      //                   title={item['@type']}
      //                 >
      //                   {item.title}
      //                 </Link>
      //               </h2>
      //               {item.description && (
      //                 <div className="tileBody">
      //                   <span className="description">{item.description}</span>
      //                 </div>
      //               )}
      //               <div className="tileFooter">
      //                 <Link to={item['@id']}>
      //                   <FormattedMessage
      //                     id="Read More…"
      //                     defaultMessage="Read More…"
      //                   />
      //                 </Link>
      //               </div>
      //               <div className="visualClear" />
      //             </article>
      //           ))}

      //           {this.props.search?.batching && (
      //             <div className="search-footer">
      //               <Pagination
      //                 activePage={this.state.currentPage}
      //                 totalPages={Math.ceil(
      //                   this.props.search.items_total / settings.defaultPageSize,
      //                 )}
      //                 onPageChange={this.handleQueryPaginationChange}
      //                 firstItem={null}
      //                 lastItem={null}
      //                 prevItem={{
      //                   content: <Icon name={paginationLeftSVG} size="18px" />,
      //                   icon: true,
      //                   'aria-disabled': !this.props.search.batching.prev,
      //                   className: !this.props.search.batching.prev
      //                     ? 'disabled'
      //                     : null,
      //                 }}
      //                 nextItem={{
      //                   content: <Icon name={paginationRightSVG} size="18px" />,
      //                   icon: true,
      //                   'aria-disabled': !this.props.search.batching.next,
      //                   className: !this.props.search.batching.next
      //                     ? 'disabled'
      //                     : null,
      //                 }}
      //               />
      //             </div>
      //           )}
      //         </section>
      //       </article>
      //     </div>
      //     <Portal node={__CLIENT__ && document.getElementById('toolbar')}>
      //       <Toolbar
      //         pathname={this.props.pathname}
      //         hideDefaultViewButtons
      //         inner={<span />}
      //       />
      //     </Portal>
      //   </Container>
    );
  }
}

export const __test__ = connect(
  (state, props) => ({
    items: state.search.items,
    searchableText: qs.parse(props.location.search).SearchableText,
    subject: qs.parse(props.location.search).Subject,
    path: qs.parse(props.location.search).path,
    pathname: props.location.pathname,
    searchFilters: state.searchFilters,
  }),
  { searchContent },
)(Search);

export default compose(
  injectIntl,
  connect(
    (state, props) => ({
      items: state.search.items,
      searchableText: qs.parse(props.location.search).SearchableText,
      subject: qs.parse(props.location.search).Subject,
      path: qs.parse(props.location.search).path,
      pathname: props.location.pathname,
      searchFilters: state.searchFilters,
    }),
    { searchContent },
  ),
  asyncConnect([
    {
      key: 'search',
      promise: ({ location, store: { dispatch } }) =>
        dispatch(
          searchContent(
            '',
            toSearchOptions(
              qs.parse(location.search).SearchableText,
              qs.parse(location.search).Subject,
              qs.parse(location.search).path,
            ),
          ),
        ),
    },
  ]),
)(Search);
