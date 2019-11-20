/**
 * FooterMain component.
 * @module components/Footer/FooterMain
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { defineMessages, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import { Brand } from '~/components/DesignTheme';
import { FooterNavigation, FooterInfos } from '~/components/DesignTheme/';

const messages = defineMessages({});

/**
 * FooterMain component class.
 * @class FooterMain
 * @extends Component
 */
class FooterMain extends Component {
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
      <div className="it-footer-main">
        <Container>
          <section>
            <Row className="clearfix">
              <Col sm={12}>
                <div className="it-brand-wrapper">
                  <Link to="#">
                    <Brand />
                  </Link>
                </div>
              </Col>
            </Row>
          </section>
          <section>
            <FooterNavigation />
          </section>
          <section className="py-4 border-white border-top">
            <FooterInfos />
          </section>
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
)(FooterMain);
