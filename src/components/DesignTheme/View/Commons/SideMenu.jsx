import { defineMessages, useIntl } from 'react-intl';
import React, { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

const messages = defineMessages({
  index: {
    id: 'index',
    defaultMessage: 'Indice della pagina',
  },
  contenuto: {
    id: 'Contenuto',
    defaultMessage: 'Contenuto',
  },
});

const extractHeaders = (elements, intl) => {
  let item;
  let headers = [];

  for (var index = 0; index < elements.length; index++) {
    item = elements[index];
    let item_headers = item.querySelectorAll('h1, h2, h3, h4, h5, h6');

    if (item.id === 'text-body') {
      headers.push({
        id: item.id,
        title: intl.formatMessage(messages.contenuto),
        top: item.getBoundingClientRect().top,
      });
    }

    item_headers.forEach((elem, index) => {
      if (!elem.classList.contains('no-toc')) {
        headers.push({
          id: elem.getAttribute('id'),
          title: elem.textContent,
          top: elem.getBoundingClientRect().top,
        });
      }
    });
  }

  return headers;
};

/**
 * SideMenu view component class.
 * @function SideMenu
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const SideMenu = ({ data }) => {
  const intl = useIntl();
  const [headers, setHeaders] = useState([]);
  useEffect(() => {
    if (data?.children) {
      setHeaders(extractHeaders(data.children, intl));
    }
  }, data);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  let onScroll = throttle(() => {
    let scroll = window.scrollY;
    console.log(window.pageYOffset, 'pageyoffset');

    setHeaders(
      headers.map((currentElement) => {
        currentElement.active =
          scroll - window.innerHeight > 0 &&
          scroll >= currentElement.top &&
          parseInt(currentElement.top / window.innerHeight) ===
            parseInt(scroll / window.innerHeight);
        console.log(
          'offset(scrolly)=',
          scroll,
          'window.innerheight',
          window.innerHeight,
          'currelement.top',
          currentElement.top,
          ' el at page',
          parseInt(currentElement.top / window.innerHeight),
          'currentPage',
          parseInt(scroll / window.innerHeight),
          '=',
          currentElement.active,
        );
        return currentElement;
      }),
    );
  }, 100);
  console.log('return');

  return headers?.length > 0 ? (
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
          <span className="it-list"></span>
          {intl.formatMessage(messages.index)}
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
              <h3 className="no-toc">{intl.formatMessage(messages.index)}</h3>
              <ul className="link-list">
                {headers.map((item, i) => (
                  <li className="nav-item">
                    <a
                      className={`nav-link ${item.active && 'active'}`}
                      href={'#' + item.id}
                    >
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  ) : null;
};
export default SideMenu;
