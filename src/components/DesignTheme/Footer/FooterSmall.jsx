/**
 * FooterSmall component.
 * @module components/theme/Footer/FooterSmall
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { defineMessages, injectIntl } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

const messages = defineMessages({
  goToPage: {
    id: 'Vai alla pagina',
    defaultMessage: 'Vai alla pagina',
  },
  usefulLinks: {
    id: 'Sezione Link Utili',
    defaultMessage: 'Sezione Link Utili',
  },
  legalNotes: {
    id: 'Note legali',
    defaultMessage: 'Note legali',
  },
  siteMap: {
    id: 'Mappa del sito',
    defaultMessage: 'Mappa del sito',
  },
});

/**
 * FooterSmall component class.
 * @class FooterSmall
 * @extends Component
 */
class FooterSmall extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    token: PropTypes.string,
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    token: null,
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <div className="it-footer-small-prints clearfix">
        <Container>
          <h3 className="sr-only">
            {this.props.intl.formatMessage(messages.goToPage)}
          </h3>
          <ul className="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
            <li className="list-inline-item">
              <Link
                to="#"
                title={this.props.intl.formatMessage(messages.legalNotes)}
              >
                Media policy
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                to="#"
                title={this.props.intl.formatMessage(messages.legalNotes)}
              >
                {this.props.intl.formatMessage(messages.legalNotes)}
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" title="Privacy-Cookies">
                Privacy policy
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                to="#"
                title={this.props.intl.formatMessage(messages.siteMap)}
              >
                {this.props.intl.formatMessage(messages.siteMap)}
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    );
  }
}

export default compose(
  injectIntl,
  connect(state => ({
    token: state.userSession.token,
  })),
)(FooterSmall);
