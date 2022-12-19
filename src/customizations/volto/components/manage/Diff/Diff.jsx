/**
 * Diff component.
 * @module components/manage/Diff/Diff
 */
/* CUSTOMIZATIONS
- Actually works and doesn't break down if user reloads page!
  Or goes back in the browser...
- Fixed all fetches to be in the correct order, and be done if we
  have infos/props to dispatch them in order to not crash.
- Added a nice loader, history requests take up to 6s to complete
  in local environment, which is... meh.
- Disable all dropdowns and buttons while loading. Fetch is long enough,
  we don't want users cliking everywhere and complaining.
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from '@plone/volto/helpers';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { filter, map } from 'lodash';
import { Container, Button, Dropdown, Grid, Table } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { Portal } from 'react-portal';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import { updateGdprPrivacyConsent } from 'volto-gdpr-privacy/actions/gdprPrivacyConsent';
import qs from 'query-string';
import { createBrowserHistory } from 'history';
import { Api } from '@plone/volto/helpers';
import configureStore from '@plone/volto/store';

import {
  getDiff,
  getSchema,
  getHistory,
  getContent,
} from '@plone/volto/actions';
import { getBaseUrl } from '@plone/volto/helpers';
import {
  FormattedDate,
  Icon,
  Toolbar,
  Unauthorized,
} from '@plone/volto/components';
import DiffField from './DiffField';

import backSVG from '@plone/volto/icons/back.svg';
import { Progress } from 'design-react-kit';

const messages = defineMessages({
  diff: {
    id: 'Diff',
    defaultMessage: 'Diff',
  },
  back: {
    id: 'Back',
    defaultMessage: 'Back',
  },
  split: {
    id: 'Split',
    defaultMessage: 'Split',
  },
  unified: {
    id: 'Unified',
    defaultMessage: 'Unified',
  },
  loadingPage: {
    id: 'Loading page...',
    defaultMessage: 'Sto caricando la pagina richiesta...',
  },
});

/**
 * Diff class.
 * @class Diff
 * @extends Component
 */
class Diff extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    getDiff: PropTypes.func.isRequired,
    getSchema: PropTypes.func.isRequired,
    getHistory: PropTypes.func.isRequired,
    schema: PropTypes.objectOf(PropTypes.any),
    error: PropTypes.objectOf(PropTypes.any),
    pathname: PropTypes.string.isRequired,
    one: PropTypes.string.isRequired,
    two: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        '@id': PropTypes.string,
      }),
    ).isRequired,
    historyEntries: PropTypes.arrayOf(
      PropTypes.shape({
        version: PropTypes.number,
        time: PropTypes.string,
        actor: PropTypes.shape({ fullname: PropTypes.string }),
      }),
    ).isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

  /**
   * Default properties
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    schema: null,
  };

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs DiffComponent
   */
  constructor(props) {
    super(props);
    this.onChangeOne = this.onChangeOne.bind(this);
    this.onChangeTwo = this.onChangeTwo.bind(this);
    this.onSelectView = this.onSelectView.bind(this);
    this.initialize = this.initialize.bind(this);
    this.createStore = this.createStore.bind(this);
    this.state = { isClient: false, store: null };
  }
  createStore() {
    const api = new Api();
    const history = createBrowserHistory();

    const store = configureStore(this.props.reduxState, history, api);

    if (store) this.setState((state) => ({ ...state, store, history }));
  }
  initialize(overriddenType) {
    // prevent type from being undefined, especially on reload
    if (!overriddenType) return;
    this.props.getSchema(overriddenType);
    this.props.getHistory(getBaseUrl(this.props.pathname));
    this.props.getDiff(
      getBaseUrl(this.props.pathname),
      this.props.one,
      this.props.two,
    );
  }
  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    if (!this.props.type) {
      // need to refetch content, we lost it in reload
      this.props.getContent(this.props.location.pathname.split('/diff')[0]);
    } else {
      this.initialize(this.props.type);
      if (this.props.reduxState) this.createStore();
    }
    this.setState({ isClient: true });
  }

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.type && !this.props.type) {
      // need to refetch content, we lost it in reload
      this.initialize(nextProps.type);
    }
    if (
      (nextProps.reduxState && !this.props.reduxState) ||
      this.props.pathname !== nextProps.pathname ||
      nextProps?.reduxState !== this.state?.store?.getState()
    ) {
      // need to refetch content, we lost it in reload
      this.createStore();
    }
    if (
      this.props.pathname !== nextProps.pathname ||
      this.props.one !== nextProps.one ||
      this.props.two !== nextProps.two
    ) {
      this.props.getDiff(
        getBaseUrl(nextProps.pathname),
        nextProps.one,
        nextProps.two,
      );
      this.createStore();
    }
  }

  /**
   * On select view handler
   * @method onSelectView
   * @param {object} event Event object
   * @param {string} value Value
   * @returns {undefined}
   */
  onSelectView(event, { value }) {
    this.props.history.push(
      `${this.props.pathname}?one=${this.props.one}&two=${this.props.two}&view=${value}`,
    );
  }

  /**
   * On change one handler
   * @method onChangeOne
   * @param {object} event Event object
   * @param {string} value Value
   * @returns {undefined}
   */
  onChangeOne(event, { value }) {
    this.props.history.push(
      `${this.props.pathname}?one=${value}&two=${this.props.two}&view=${this.props.view}`,
    );
  }

  /**
   * On change two handler
   * @method onChangeTwo
   * @param {object} event Event object
   * @param {string} value Value
   * @returns {undefined}
   */
  onChangeTwo(event, { value }) {
    this.props.history.push(
      `${this.props.pathname}?one=${this.props.one}&two=${value}&view=${this.props.view}`,
    );
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const versions = map(
      filter(this.props.historyEntries, (entry) => 'version' in entry),
      (entry, index) => ({
        text: (
          <>
            {index === 0 ? 'Current' : entry.version}&nbsp;(
            <FormattedDate date={entry.time} long className="text" />, &nbsp;
            {entry.actor.fullname})
          </>
        ),
        value: `${entry.version}`,
        key: `${entry.version}`,
      }),
    );
    if (this.props.error?.status === 401) return <Unauthorized />;

    return (
      !this.props.error &&
      this.props.contentLoaded &&
      this.state.store && (
        <Container id="page-diff">
          <Helmet title={this.props.intl.formatMessage(messages.diff)} />
          <h1>
            <FormattedMessage
              id="Difference between revision {one} and {two} of {title}"
              defaultMessage="Difference between revision {one} and {two} of {title}"
              values={{
                one: this.props.one,
                two: this.props.two,
                title: this.props.title,
              }}
            />
          </h1>
          <Grid>
            <Grid.Column computer={9} tablet={12} mobile={12}>
              <p className="description">
                <FormattedMessage
                  id="You can view the difference of the revisions below."
                  defaultMessage="You can view the difference of the revisions below."
                />
              </p>
              <p className="description">
                <FormattedMessage
                  id="Some blocks cannot be rendered in this view and placeholders will be visible. Use `See content at specific revision` tool to see ar complete render of this content."
                  defaultMessage="Alcuni blocchi non possono essere renderizzati correttamente in questa vista e verranno mostrati dei placeholder al loro posto o delle informazioni incomplete. Per visualizzare un render completo di un contenuto ad una specifica versione, usa lo strumento Mostra questa revisione nella pagina della cronologia del contenuto."
                />
              </p>
            </Grid.Column>
            <Grid.Column computer={3} tablet={12} mobile={12} textAlign="right">
              <Button.Group size="small">
                {map(
                  [
                    {
                      id: 'split',
                      label: this.props.intl.formatMessage(messages.split),
                    },
                    {
                      id: 'unified',
                      label: this.props.intl.formatMessage(messages.unified),
                    },
                  ],
                  (view) => (
                    <Button
                      key={view.id}
                      value={view.id}
                      active={this.props.view === view.id}
                      onClick={this.onSelectView}
                      disabled={
                        this.props.historyLoading && !this.props.historyLoaded
                      }
                      className="primary"
                      size="tiny"
                      compact
                    >
                      {view.label}
                    </Button>
                  ),
                )}
              </Button.Group>
            </Grid.Column>
          </Grid>
          {this.props.historyEntries.length > 0 && (
            <Table basic="very">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell width={6}>
                    <FormattedMessage id="Base" defaultMessage="Base" />
                    <Dropdown
                      onChange={this.onChangeOne}
                      value={this.props.one}
                      selection
                      fluid
                      options={versions}
                      disabled={
                        this.props.historyLoading && !this.props.historyLoaded
                      }
                    />
                  </Table.HeaderCell>
                  <Table.HeaderCell width={6}>
                    <FormattedMessage id="Compare" defaultMessage="Compare" />
                    <Dropdown
                      onChange={this.onChangeTwo}
                      value={this.props.two}
                      selection
                      fluid
                      options={versions}
                      disabled={
                        this.props.historyLoading && !this.props.historyLoaded
                      }
                    />
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
            </Table>
          )}
          {this.props.historyLoading && !this.props.historyLoaded && (
            <Progress
              indeterminate
              label={this.props.intl.formatMessage(messages.loadingPage)}
            />
          )}
          {!this.props.historyLoading &&
            this.props.historyLoaded &&
            this.props.schema &&
            this.props.data.length > 0 &&
            map(this.props.schema.fieldsets, (fieldset) =>
              map(fieldset.fields, (field) => {
                return (
                  <DiffField
                    key={field}
                    one={this.props?.data?.[0]?.[field]}
                    two={this.props?.data?.[1]?.[field]}
                    schema={this.props.schema.properties[field]}
                    view={this.props.view}
                    field={field}
                    store={this.state.store}
                    history={this.state.history}
                    contentOne={this.props?.data?.[0]}
                    contentTwo={this.props?.data?.[1]}
                  />
                );
              }),
            )}

          {this.state.isClient && (
            <Portal node={document.getElementById('toolbar')}>
              <Toolbar
                pathname={this.props.pathname}
                hideDefaultViewButtons
                inner={
                  <Link
                    to={`${getBaseUrl(this.props.pathname)}/historyview`}
                    className="item"
                  >
                    <Icon
                      name={backSVG}
                      className="contents circled"
                      size="30px"
                      title={this.props.intl.formatMessage(messages.back)}
                    />
                  </Link>
                }
              />
            </Portal>
          )}
        </Container>
      )
    );
  }
}

export default compose(
  withRouter,
  injectIntl,
  connect(
    (state, props) => ({
      data: state.diff.data,
      historyEntries: state.history.entries,
      schema: state.schema.schema,
      error: state.diff.error,
      pathname: props.location.pathname,
      one: qs.parse(props.location.search).one,
      two: qs.parse(props.location.search).two,
      view: qs.parse(props.location.search).view || 'split',
      title: state.content.data?.title,
      type: state.content.data?.['@type'],
      contentLoaded: state.content?.get.loaded,
      historyLoading: state.diff.loading,
      historyLoaded: state.diff.loaded,
      reduxState: state,
    }),
    { getDiff, getSchema, getHistory, getContent, updateGdprPrivacyConsent },
  ),
)(Diff);
