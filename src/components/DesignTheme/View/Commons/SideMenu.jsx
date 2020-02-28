import { defineMessages, useIntl } from 'react-intl';
import React from 'react';
const messages = defineMessages({
  index: {
    id: 'index',
    defaultMessage: 'Indice della pagina',
  },
});

/**
 * SideMenu view component class.
 * @function SideMenu
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const SideMenu = () => {
  const intl = useIntl();
  return (
    <div className="sticky-wrapper navbar-wrapper">
      <nav className="navbar it-navscroll-wrapper it-top-navscroll navbar-expand-lg">
        <button
          className="custom-navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          data-target="#navbarNav"
        >
          <span className="it-list"></span>Indice della pagina
        </button>
        <div className="navbar-collapsable" id="navbarNav">
          <div className="overlay"></div>
          <div className="close-div sr-only">
            <button className="btn close-menu" type="button">
              <span className="it-close"></span>Chiudi
            </button>
          </div>
          {/* <a className="it-back-button" href="#">
            <svg className="icon icon-sm icon-primary align-top">
              <use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-left"></use>
            </svg>
            <span>Torna indietro</span>
          </a> */}
          <div className="menu-wrapper">
            <div className="link-list-wrapper menu-link-list">
              <h3 className="no_toc">Indice della pagina</h3>
              <ul className="link-list">
                <li className="nav-item active">
                  <a className="nav-link active" href="#descrizione">
                    <span>Descrizione</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#documenti">
                    <span>Documenti</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#a-cura-di">
                    <span>A cura di</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#ulteriori-informazioni">
                    <span>Ulteriori informazioni</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default SideMenu;
