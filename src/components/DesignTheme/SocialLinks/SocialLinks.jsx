/**
 * SocialLinks component.
 * @module components/SocialLinks/SocialLinks
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { defineMessages, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
  BITIcon,
  it_facebook,
  it_twitter,
} from '~/components/DesignTheme/Icons';

const messages = defineMessages({
  followUs: {
    id: 'Seguici su',
    defaultMessage: 'Seguici su',
  },
});

/**
 * SocialLinks component class.
 * @class SocialLinks
 * @extends Component
 */
class SocialLinks extends Component {
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
      <div className="it-socials d-none d-md-flex">
        <span>{this.props.intl.formatMessage(messages.followUs)}</span>
        <ul>
          <li>
            <Link to="#" aria-label="Facebook" target="_blank">
              <BITIcon name={it_facebook} />
            </Link>
          </li>
          <li>
            <Link to="#" aria-label="Twitter" target="_blank">
              <BITIcon name={it_twitter} />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default compose(
  injectIntl,
  connect(state => ({
    token: state.userSession.token,
  })),
)(SocialLinks);
