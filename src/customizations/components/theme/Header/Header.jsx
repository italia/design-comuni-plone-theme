/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { Component, useRef } from 'react';

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
import { Row, Col, Container } from 'react-bootstrap';

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
    if (window.pageYOffset > 0) {
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
      <header
        className={
          'it-header-wrapper it-header-sticky public-ui' +
          (this.state.sticky ? ' is-sticky' : '')
        }
      >
        <div className="it-header-slim-wrapper">
          <Container>
            <Row>
              <Col size={12}>
                <HeaderSlim pathname={this.props.pathname} />
              </Col>
            </Row>
          </Container>
        </div>

        <div className="it-nav-wrapper">
          <div className="it-header-center-wrapper">
            <Container>
              <Row>
                <Col size={12}>
                  <HeaderCenter />
                </Col>
              </Row>
            </Container>
          </div>
          <div className="it-header-navbar-wrapper">
            <Container>
              <Row>
                <Col size={12}>
                  <Navigation pathname={this.props.pathname} />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </header>
    );
    return isCmsUI ? <div className="public-ui">{content}</div> : content;
  }
}

export default connect(state => ({
  token: state.userSession.token,
}))(Header);
