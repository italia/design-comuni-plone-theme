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

import qs from 'query-string';
import { settings } from '~/config';
import { searchContent } from '@plone/volto/actions';
import {
  Container,
  Row,
  Col,
  Collapse,
  Label,
  Input,
  Card,
  CardBody,
  CardCategory,
} from 'design-react-kit/dist/design-react-kit';
import { Pagination } from '@design/components/DesignTheme';
//import { Link } from 'react-router-dom';

const messages = defineMessages({
  searchResults: {
    id: 'Search results',
    defaultMessage: 'Risultati della ricerca',
  },
  sections: {
    id: 'sections',
    defaultMessage: 'Sezioni',
  },
  topics: {
    id: 'topics',
    defaultMessage: 'Argomenti',
  },
  showAll: {
    id: 'Show all',
    defaultMessage: 'Mostra tutto',
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
    searchableText: null,
    subject: null,
    path: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      collapseFilters: true,
      collapseTopics: true,
      filters: { sections: [], topics: [] },
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
                  <h1>
                    {this.props.searchableText ? (
                      <FormattedMessage
                        id="Search results for {term}"
                        defaultMessage="Risultati della ricerca per {term}"
                        values={{
                          term: <em>{this.props.searchableText}</em>,
                        }}
                      />
                    ) : (
                      <FormattedMessage
                        id="Search results"
                        defaultMessage="Risultati della ricerca"
                      />
                    )}
                  </h1>
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
          <Row className="border-top">
            <aside className="col-lg-3 py-lg-5">
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
                    {this.sections.map(section => (
                      <div>
                        <Input
                          id={section['@id']}
                          type="checkbox"
                          defaultChecked={
                            state.filters.sections.indexOf(section['@id']) >= 0
                          }
                          onChange={(a, b, c) => {
                            console.log(a, b, c);
                          }}
                        />
                        <Label for={section['@id']}>{section.title}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 pt-lg-5">
                  <h6 className="text-uppercase">
                    {intl.formatMessage(messages.topics)}
                  </h6>
                  <div className="form-check mt-4">
                    <div>
                      <Input
                        id="checkbox5"
                        type="checkbox"
                        defaultChecked={false}
                      />
                      <Label for="checkbox5">Agevolazioni per la casa</Label>
                    </div>
                    <div>
                      <Input
                        id="checkbox6"
                        type="checkbox"
                        defaultChecked={false}
                      />
                      <Label for="checkbox6">Animali</Label>
                    </div>
                    <div>
                      <Input
                        id="checkbox7"
                        type="checkbox"
                        defaultChecked={false}
                      />
                      <Label for="checkbox7">Anziani</Label>
                    </div>
                    <div>
                      <Input
                        id="checkbox8"
                        type="checkbox"
                        defaultChecked={false}
                      />
                      <Label for="checkbox8">Assistenza e inclusione</Label>
                    </div>
                    <div>
                      <Input
                        id="checkbox9"
                        type="checkbox"
                        defaultChecked={false}
                      />
                      <Label for="checkbox9">Associazioni</Label>
                    </div>
                    <div>
                      <Input
                        id="checkbox10"
                        type="checkbox"
                        defaultChecked={false}
                      />
                      <Label for="checkbox10">Bambini e ragazzi</Label>
                    </div>
                    <div>
                      <Input
                        id="checkbox11"
                        type="checkbox"
                        defaultChecked={false}
                      />
                      <Label for="checkbox11">Cantieri e progetti</Label>
                    </div>
                    <div>
                      <Input
                        id="checkbox12"
                        type="checkbox"
                        defaultChecked={false}
                      />
                      <Label for="checkbox12">Comune</Label>
                    </div>
                    <div>
                      <Input
                        id="checkbox13"
                        type="checkbox"
                        defaultChecked={false}
                      />
                      <Label for="checkbox13">Comunicare con il Comune</Label>
                    </div>
                    <div>
                      <Input
                        id="checkbox14"
                        type="checkbox"
                        defaultChecked={false}
                      />
                      <Label for="checkbox14">Corsi e tempo libero</Label>
                    </div>

                    <Collapse
                      isOpen={!state.collapseTopics}
                      id="collapseTopics"
                    >
                      <div>
                        <Input
                          id="checkbox15"
                          type="checkbox"
                          defaultChecked={false}
                        />
                        <Label for="checkbox15">
                          Costruire e ristrutturare
                        </Label>
                      </div>
                      <div>
                        <Input
                          id="checkbox16"
                          type="checkbox"
                          defaultChecked={false}
                        />
                        <Label for="checkbox16">Cultura</Label>
                      </div>
                      <div>
                        <Input
                          id="checkbox17"
                          type="checkbox"
                          defaultChecked={false}
                        />
                        <Label for="checkbox17">Edilizia</Label>
                      </div>
                      <div>
                        <Input
                          id="checkbox18"
                          type="checkbox"
                          defaultChecked={false}
                        />
                        <Label for="checkbox18">Famiglia</Label>
                      </div>
                    </Collapse>
                  </div>
                  <div className="mt-4">
                    <a
                      onClick={e => {
                        e.preventDefault();
                        this.setState({
                          collapseTopics: !this.state.collapseTopics,
                        });
                      }}
                      className="font-weight-bold"
                      data-toggle="collapse"
                      href="#collapseTopics"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseList"
                    >
                      {intl.formatMessage(messages.showAll)}
                    </a>
                  </div>
                </div>
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
                        <small className="mr-3">Ordina per</small>
                      </Label>
                      <select name="filter" id="filter-field">
                        <option value="0">Rilevanza</option>
                      </select>
                    </div>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col md={4}>
                  <Card teaser noWrapper={true}>
                    <CardBody>
                      <CardCategory href={'#'}>Servizi</CardCategory>

                      <h4 className="card-title">
                        <a href="#">
                          Scadenza TARI 2018: istruzioni per pagamento
                        </a>
                      </h4>
                      <p className="card-text">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
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
