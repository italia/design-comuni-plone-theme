/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import { defineMessages, useIntl } from 'react-intl';
import React, { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { Progress } from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  index: {
    id: 'index',
    defaultMessage: 'Indice della pagina',
  },
  contenuto: {
    id: 'Contenuto',
    defaultMessage: 'Contenuto',
  },
  back: {
    id: 'back',
    defaultMessage: 'Indietro',
  },
  close: {
    id: 'close',
    defaultMessage: 'Chiudi',
  },
});

const extractHeaders = (elements, intl) => {
  let item;
  let headers = [];
  for (var index = 0; index < elements.length; index++) {
    item = elements[index];

    if (item.id === 'text-body') {
      headers.push({
        id: item.id,
        title:
          item.getAttribute('menu_title') ||
          intl.formatMessage(messages.contenuto),
        item: item,
      });
    } else {
      let item_header = item.querySelector('#header-' + item.id);
      if (item_header) {
        headers.push({
          id: item.id,
          title: item_header.textContent,
          item: item,
        });
      }
    }
  }
  return headers;
};

/**
 * SideMenu view component class.
 * @function SideMenu
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const SideMenu = ({ data, content_uid }) => {
  const intl = useIntl();

  const [headers, setHeaders] = useState([]);
  const [activeSection, setActiveSection] = useState(null);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [windowScrollY, setWindowScrollY] = useState(0);

  useEffect(() => {
    if (data?.children) {
      let extractedHeaders = extractHeaders(data.children, intl);

      if (extractedHeaders.length > 0) {
        setHeaders(extractedHeaders);
        setActiveSection(extractedHeaders[0].id);
      }
      setWindowScrollY(window.scrollY);
    }
  }, [data, content_uid]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = throttle(() => {
    let scrollDown = window.scrollY > windowScrollY;

    setWindowScrollY(window.scrollY);
    let scrollOffset = (scrollDown ? 0.15 : 0.85) * window.innerHeight;
    let headersHeights = headers
      .map((section) => {
        let element = document.getElementById(section.id);
        return {
          id: section.id,
          top: element?.getBoundingClientRect()?.top,
        };
      })
      .filter((section) => section.top <= scrollOffset);

    if (headersHeights.length > 0) {
      let section = headersHeights.reduce(
        (prev, curr) => (prev.top > curr.top ? prev : curr),
        headers[0],
      );

      if (section.id !== activeSection.current) {
        setActiveSection(section.id);
      }
    }
  }, 100);

  const handleClickAnchor = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView?.({
      behavior: 'smooth',
      block: 'start',
    });
    setIsNavOpen(false);
  };

  return headers?.length > 0 ? (
    <div className="sticky-wrapper navbar-wrapper page-side-menu">
      <nav className="navbar it-navscroll-wrapper navbar-expand-lg">
        <button
          className={
            isNavOpen
              ? 'custom-navbar-toggler focus--mouse'
              : 'custom-navbar-toggler'
          }
          type="button"
          aria-controls="navbarNavB"
          aria-expanded={isNavOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          data-target="#navbarNavB"
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
        >
          <span className="it-list"></span>
          {intl.formatMessage(messages.index)}
        </button>

        <div
          className={
            isNavOpen ? 'navbar-collapsable expanded' : 'navbar-collapsable'
          }
          id="navbarNavB"
          style={isNavOpen ? { display: 'block' } : { display: 'none' }}
        >
          <div
            className="overlay"
            style={isNavOpen ? { display: 'block' } : { display: 'none' }}
          ></div>
          <div className="close-div visually-hidden">
            <button className="btn close-menu" type="button">
              <span className="it-close"></span>
              {intl.formatMessage(messages.close)}
            </button>
          </div>
          <a
            className="it-back-button"
            href="#"
            style={isNavOpen ? { display: 'block' } : { display: 'none' }}
            onClick={(e) => {
              e.preventDefault();
              setIsNavOpen(!isNavOpen);
            }}
          >
            <Icon
              className="align-top"
              color="primary"
              icon="it-chevron-left"
              style={{ ariaHidden: true }}
              size="sm"
            />
            <span>{intl.formatMessage(messages.back)}</span>
          </a>
          <div className="menu-wrapper">
            <div className="link-list-wrapper menu-link-list">
              <h3>{intl.formatMessage(messages.index)}</h3>
              <div className="mb-3">
                <Progress
                  value={
                    100 *
                    (window.scrollY /
                      (document.documentElement.scrollHeight -
                        document.documentElement.clientHeight))
                  }
                  role="progressbar"
                />
              </div>
              <ul className="link-list" data-element="page-index">
                {headers.map((item, i) => (
                  <li className="nav-item" key={item.id}>
                    <a
                      className={`nav-link ${
                        item.id === activeSection && 'active'
                      }`}
                      href={`#${item.id}`}
                      onClick={handleClickAnchor(item.id)}
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
