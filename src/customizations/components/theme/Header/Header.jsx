/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Anontools,
  Logo,
  Navigation,
  SearchWidget,
} from '@plone/volto/components';

import Icon from '../../../../components/Icon/Icon';
import HeaderSlim from '../../../../components/Header/HeaderSlim';

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

        <div className="it-nav-wrapper">
          <div className="it-header-center-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="it-header-center-content-wrapper">
                    <div className="it-brand-wrapper">
                      <a href="{{ site.baseurl }}/esempi/bootstrap-italia/template-homepage.html">
                        <Icon icon="it-pa" />

                        <div className="it-brand-text">
                          <h2 className="no_toc">Nome del Comune</h2>
                          <h3 className="no_toc d-none d-md-block">
                            Uno dei tanti Comuni d'Italia
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div className="it-right-zone">
                      <div className="it-socials d-none d-md-flex">
                        <span>Seguici su</span>
                        <ul>
                          <li>
                            <a aria-label="Facebook" href="#" target="_blank">
                              <Icon icon="it-facebook" />
                            </a>
                          </li>
                          <li>
                            <a aria-label="Twitter" href="#" target="_blank">
                              <Icon icon="it-twitter" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="it-search-wrapper">
                        <span className="d-none d-md-block">Cerca</span>
                        <a
                          aria-label="Cerca"
                          className="search-link rounded-icon"
                          href="#"
                        >
                          <Icon icon="it-search" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="it-header-navbar-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <nav className="navbar navbar-expand-lg has-megamenu">
                    <button
                      aria-controls="nav10"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      className="custom-navbar-toggler"
                      data-target="#nav10"
                      type="button"
                    >
                      <Icon icon="it-burger" />
                    </button>
                    <div className="navbar-collapsable" id="nav10">
                      <div className="overlay" />
                      <div className="close-div sr-only">
                        <button className="btn close-menu" type="button">
                          <span className="it-close" />
                          close
                        </button>
                      </div>
                      <div className="menu-wrapper">
                        <ul className="navbar-nav">
                          <li className="nav-item {% if section == 'amministrazione' %}active{%endif%}">
                            <a
                              className="nav-link {% if section == 'amministrazione' %}active{%endif%}"
                              href="{{ site.baseurl }}/esempi/bootstrap-italia/template-amministrazione.html"
                            >
                              <span>Amministrazione</span>
                              {/*% if section == 'amministrazione' %*/}
                              <span className="sr-only">menu selezionato</span>
                              {/*%endif%*/}
                            </a>
                          </li>
                          <li className="nav-item {% if section == 'novità' %}active{%endif%}">
                            <a
                              className="nav-link {% if section == 'novità' %}active{%endif%}"
                              href="{{ site.baseurl }}/esempi/bootstrap-italia/template-novita.html"
                            >
                              <span>Novità</span>
                              {/*% if section == 'novità' %}<span className="sr-only">menu selezionato</span>{%endif%*/}
                            </a>
                          </li>
                          <li className="nav-item {% if section == 'servizi' %}active{%endif%}">
                            <a
                              className="nav-link {% if section == 'servizi' %}active{%endif%}"
                              href="{{ site.baseurl }}/esempi/bootstrap-italia/template-servizi.html"
                            >
                              <span>Servizi</span>
                              {/*% if section == 'servizi' %}<span className="sr-only">menu selezionato</span>{%endif%*/}
                            </a>
                          </li>
                          <li className="nav-item {% if section == 'documenti' %}active{%endif%}">
                            <a
                              className="nav-link {% if section == 'documenti' %}active{%endif%}"
                              href="{{ site.baseurl }}/esempi/bootstrap-italia/template-documenti.html"
                            >
                              <span>Documenti e Dati</span>
                              {/*% if section == 'documenti' %}<span className="sr-only">menu selezionato</span>{%endif%*/}
                            </a>
                          </li>
                        </ul>
                        <ul className="navbar-nav navbar-secondary">
                          <li className="nav-item {% if section == 'argomento' %}active{%endif%}">
                            <a
                              className="nav-link {% if section == 'argomento' %}active{%endif%}"
                              href="{{ site.baseurl }}/esempi/bootstrap-italia/template-argomenti-argomento.html"
                            >
                              Argomento 1
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="{{ site.baseurl }}/esempi/bootstrap-italia/template-argomenti-argomento.html"
                            >
                              Argomento 2
                            </a>
                          </li>
                          <li className="nav-item {% if section == 'argomenti' %}active{%endif%}">
                            <a
                              className="nav-link {% if section == 'argomenti' %}active{%endif%}"
                              href="{{ site.baseurl }}/esempi/bootstrap-italia/template-argomenti.html"
                            >
                              <span className="font-weight-bold">
                                Tutti gli argomenti...
                              </span>
                              {/*% if section == 'argomenti' %}<span className="sr-only">menu selezionato</span>{%endif%*/}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
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
