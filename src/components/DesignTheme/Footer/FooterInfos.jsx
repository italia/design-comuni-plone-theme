/**
 * FooterInfos component.
 * @module components/Footer/FooterInfos
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { defineMessages, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { LinkList, LinkListItem } from '@design/components/DesignTheme/';

import {
  BITIcon,
  it_mail,
  it_twitter,
  it_facebook,
} from '@design/components/DesignTheme/Icons';

const messages = defineMessages({
  goToPage: {
    id: 'Vai alla pagina',
    defaultMessage: 'Vai alla pagina',
  },
  at_title: {
    id: 'Amministrazione trasparente',
    defaultMessage: 'Amministrazione trasparente',
  },
  at_description: {
    id: 'Amministrazione trasparente description',
    defaultMessage:
      'I dati personali pubblicati sono riutilizzabili solo alle condizioni previste dalla direttiva comunitaria 2003/98/CE e dal d.lgs. 36/2006',
  },
  amministrazione: {
    id: 'Amministrazione',
    defaultMessage: 'Amministrazione',
  },
  contatti: {
    id: 'Contatti',
    defaultMessage: 'Contatti',
  },
  pec: {
    id: 'PEC',
    defaultMessage: 'Posta Elettronica Certificata',
  },
  urp: {
    id: 'URP',
    defaultMessage: 'URP - Ufficio Relazioni con il Pubblico',
  },
  newsletter: {
    id: 'Newsletter',
    defaultMessage: 'Newsletter',
  },
  subscribe: {
    id: 'Subscribe',
    defaultMessage: 'Iscriviti',
  },
  followUs: {
    id: 'Follow us',
    defaultMessage: 'Seguici su',
  },
});

/**
 * FooterInfos component class.
 * @class FooterInfos
 * @extends Component
 */
class FooterInfos extends Component {
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
      <Row>
        <Col lg={3} md={3} className="pb-2">
          <h4>
            <Link
              to="/amministrazione"
              title={
                this.props.intl.formatMessage(messages.goToPage) +
                ':' +
                this.props.intl.formatMessage(messages.amministrazione)
              }
            >
              {this.props.intl.formatMessage(messages.at_title)}
            </Link>
          </h4>
          <p>{this.props.intl.formatMessage(messages.at_description)}</p>
        </Col>
        <Col lg={3} md={3} className="pb-2">
          <h4>
            <Link
              to="/contatti"
              title={
                this.props.intl.formatMessage(messages.goToPage) +
                ':' +
                this.props.intl.formatMessage(messages.contatti)
              }
            >
              {this.props.intl.formatMessage(messages.contatti)}
            </Link>
          </h4>
          <p>
            <strong>Nome del Comune</strong>
            <br />
            Via Roma 0 - 00000 Lorem Ipsum Codice fiscale / P. IVA: 000000000
          </p>

          <LinkList className="footer-list clearfix">
            <LinkListItem
              href="#"
              title={
                this.props.intl.formatMessage(messages.goToPage) +
                ':' +
                this.props.intl.formatMessage(messages.pec)
              }
            >
              {this.props.intl.formatMessage(messages.pec)}
            </LinkListItem>
            <LinkListItem
              href="#"
              title={
                this.props.intl.formatMessage(messages.goToPage) +
                ':' +
                this.props.intl.formatMessage(messages.urp)
              }
            >
              {this.props.intl.formatMessage(messages.urp)}
            </LinkListItem>
          </LinkList>
        </Col>
        <Col lg={3} md={3} className="pb-2">
          <h4>
            <Link
              to="#"
              title={
                this.props.intl.formatMessage(messages.goToPage) +
                ': ' +
                this.props.intl.formatMessage(messages.newsletter)
              }
            >
              {this.props.intl.formatMessage(messages.newsletter)}
            </Link>
          </h4>
          <Form action="#" className="form-newsletter" method="post">
            <Form.Label
              className="text-white font-weight-semibold"
              htmlFor="input-newsletter"
            >
              Iscriviti per riceverla
            </Form.Label>
            <Form.Control
              type="email"
              id="input-newsletter"
              name="input-newsletter"
              placeholder="mail@example.com"
            />
            <Button variant="primary" className="btn-icon" type="submit">
              <BITIcon name={it_mail} color="white" />
              <span>{this.props.intl.formatMessage(messages.subscribe)}</span>
            </Button>
          </Form>
        </Col>
        <Col lg={3} md={3} className="pb-2">
          <h4>
            <Link to="#">
              {this.props.intl.formatMessage(messages.followUs)}
            </Link>
          </h4>
          <ul className="list-inline text-left social">
            <li className="list-inline-item">
              <Link className="p-2 text-white" to="#" target="_blank">
                <BITIcon
                  name={it_facebook}
                  color="white"
                  className="align-top"
                />

                <span className="sr-only">Facebook</span>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="p-2 text-white" to="#" target="_blank">
                <BITIcon
                  name={it_twitter}
                  color="white"
                  className="align-top"
                />

                <span className="sr-only">Twitter</span>
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    );
  }
}

export default compose(
  injectIntl,
  connect(state => ({
    token: state.userSession.token,
  })),
)(FooterInfos);
