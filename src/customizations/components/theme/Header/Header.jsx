/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { isCmsUi } from '@plone/volto/helpers';

import {
  /* Anontools,
  Logo,*/
  Navigation,
  /* SearchWidget,*/
} from '@plone/volto/components';

import { HeaderSlim, HeaderCenter } from '@design/components/DesignTheme';
import { Headers } from 'design-react-kit/dist/design-react-kit';

/**
 * Header component class.
 * @class Header
 * @extends Component
 */
class Header extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    token: PropTypes.string,
    pathname: PropTypes.string.isRequired,
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    token: null,
  };

  state = { sticky: false };
  handleScroll = () => {
    if (window.pageYOffset > 168) {
      this.setState({
        sticky: true,
      });
    } else {
      this.setState({
        sticky: false,
      });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const isCmsUI = isCmsUi(this.props.pathname);
    let content = (
      <Headers sticky={this.state.sticky} className="public-ui">
        <HeaderSlim />
        <div className="it-nav-wrapper">
          <HeaderCenter />
          <Navigation pathname={this.props.pathname} />
        </div>
      </Headers>
    );
    return isCmsUI ? <div className="public-ui">{content}</div> : content;
  }
}

export default connect(state => ({
  token: state.userSession.token,
}))(Header);
