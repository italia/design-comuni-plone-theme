/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import { defineMessages, useIntl } from 'react-intl';
import React, { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from 'design-react-kit/dist/design-react-kit';

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
  buttonToggle: {
    id: 'button-toggler-toggle-navigation',
    defaultMessage: 'Toggle navigation',
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
  const [headers, _setHeaders] = useState([]);
  const headersRef = React.useRef(headers);
  const setHeaders = (data) => {
    headersRef.current = data;
    _setHeaders(data);
  };

  const [activeSection, _setActiveSection] = useState(null);
  const activeSectionRef = React.useRef(activeSection);
  const [isNavOpen, setIsNavOpen] = React.useState(
    __CLIENT__ ? window?.innerWidth >= 992 : false,
  );

  const setActiveSection = (data) => {
    activeSectionRef.current = data;
    _setActiveSection(data);
  };
  const [windowScrollY, setWindowScrollY] = useState(0);

  const handleScroll = throttle(() => {
    let scrollDown = window.scrollY > windowScrollY;

    setWindowScrollY(window.scrollY);
    let scrollOffset = (scrollDown ? 0.15 : 0.85) * window.innerHeight;
    let headersHeights = headersRef.current
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
        headersRef.current[0],
      );

      if (section.id !== activeSectionRef.current) {
        setActiveSection(section.id);
      }
    }
  }, 100);

  useEffect(() => {
    if (data?.children) {
      let extractedHeaders = extractHeaders(data.children, intl);

      if (extractedHeaders.length > 0) {
        setHeaders(extractedHeaders);
        setActiveSection(extractedHeaders[0].id);
      }
    }
  }, [data, content_uid]);

  useEffect(() => {
    window?.addEventListener('scroll', handleScroll);
    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClickAnchor = (id) => (e) => {
    e.preventDefault();

    if (window.innerWidth < 992) {
      setIsNavOpen(false);
    }

    // Blur a link
    document.getElementById(`item-${id}`).blur();
    // Focus on section
    document.getElementById(id).focus({ preventScroll: true });
    // Scroll to section
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView?.({
        behavior: 'smooth',
        block: 'start',
      });
    }, 0);
  };

  return headers?.length > 0 ? (
    <div className="sticky-wrapper navbar-wrapper page-side-menu">
      <nav className="navbar it-navscroll-wrapper navbar-expand-lg">
        <div className="menu-wrapper">
          <div className="link-list-wrapper menu-link-list">
            <div className="accordion-wrapper">
              <Accordion>
                <AccordionHeader
                  active={isNavOpen}
                  onToggle={() => {
                    setIsNavOpen(!isNavOpen);
                  }}
                  aria-expanded={isNavOpen ? 'true' : 'false'}
                  className="accordion-button"
                >
                  <h3>{intl.formatMessage(messages.index)}</h3>
                </AccordionHeader>
              </Accordion>
              <AccordionBody
                active={isNavOpen}
                className={
                  isNavOpen
                    ? 'accordion-collapse show'
                    : 'accordion-collapse collapse'
                }
              >
                <ul className="link-list" data-element="page-index">
                  {headers.map((item, i) => (
                    <li className="nav-item" key={item.id}>
                      <a
                        className={`nav-link ${
                          item.id === activeSection && 'active'
                        }`}
                        href={`#${item.id}`}
                        onClick={handleClickAnchor(item.id)}
                        id={`item-${item.id}`}
                      >
                        <span>{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionBody>
            </div>
          </div>
        </div>
      </nav>
    </div>
  ) : null;
};
export default SideMenu;
