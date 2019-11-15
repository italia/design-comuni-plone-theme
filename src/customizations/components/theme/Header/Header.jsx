/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { Component } from 'react';

/*import { Container, Segment } from 'semantic-ui-react';*/
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  /* Anontools,
  Logo,*/
  Navigation,
  /* SearchWidget,*/
} from '@plone/volto/components';

import { HeaderSlim, HeaderCenter } from '~/components/DesignTheme';

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

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <header className="it-header-wrapper it-header-sticky">
        <div className="it-header-slim-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <HeaderSlim pathname={this.props.pathname} />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="it-nav-wrapper">
          <div className="it-header-center-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <HeaderCenter />
                </div>
              </div>
            </div>
          </div>
          <div className="it-header-navbar-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <Navigation pathname={this.props.pathname} />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </header>
      /*  
      <Segment basic className="header-wrapper" role="banner">
        <Container>
          <div className="header">
            <div className="logo-nav-wrapper">
              <div className="logo">
                <Logo />
              </div>
              <Navigation pathname={this.props.pathname} />
            </div>
            {!this.props.token && (
              <div className="tools">
                <Anontools />
              </div>
            )}
            <div className="search">
              <SearchWidget pathname={this.props.pathname} />
            </div>
          </div>
        </Container>
      </Segment>*/
    );
  }
}

export default connect(state => ({
  token: state.userSession.token,
}))(Header);
