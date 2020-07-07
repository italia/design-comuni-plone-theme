import { defineMessages, useIntl } from 'react-intl';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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

    if (item.id === 'text-body') {
      headers.push({
        id: item.id,
        title: intl.formatMessage(messages.contenuto),
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

    /*if (item.id === 'text-body') {
      headers.push({
        id: item.id,
        title: intl.formatMessage(messages.contenuto),
        item: item,
      });
    }

    let item_headers = item.querySelectorAll('h1, h2, h3, h4, h5, h6');
    item_headers.forEach((elem, index) => {
      if (!elem.classList.contains('no-toc')) {
        headers.push({
          id: elem.getAttribute('id'),
          title: elem.textContent,
          item: elem,
        });
      }
    });*/
  }

  return headers;
};

/**
 * SideMenu view component class.
 * @function SideMenu
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const SideMenu = ({ data, documentBody }) => {
  const intl = useIntl();
  //let history = useHistory();
  const [headers, _setHeaders] = useState([]);
  const headersRef = React.useRef(headers);
  const setHeaders = (data) => {
    headersRef.current = data;
    _setHeaders(data);
  };

  const [activeSection, _setActiveSection] = useState();
  const activeSectionRef = React.useRef(activeSection);
  const setActiveSection = (data) => {
    activeSectionRef.current = data;
    _setActiveSection(data);
  };
  const [windowScrollY, setWindowScrollY] = useState(window.scrollY);

  useEffect(() => {
    if (data?.children) {
      setHeaders(extractHeaders(data.children, intl));
    }

    window.addEventListener('scroll', handleScroll);
  }, [data]);

  const handleScroll = () => {
    let scrollDown = window.scrollY > windowScrollY;
    setWindowScrollY(window.scrollY);
    let scrollOffset = (scrollDown ? 0.15 : 0.85) * window.innerHeight;
    let headersHeights = headersRef.current
      .map((section) => {
        let element = document.getElementById(section.id);
        return {
          id: section.id,
          top: element.getBoundingClientRect().top,
        };
      })
      .filter((section) => section.top <= scrollOffset);
    if (headersHeights.length > 0) {
      let section = headersHeights.reduce(
        (prev, curr) => (prev.top > curr.top ? prev : curr),
        headersRef.current[0],
      );

      console.log('activeSectionbyHeight', section.id);
      if (section.id !== activeSectionRef.current) {
        console.log('setactive section', section.id);
        setActiveSection(section.id);
      }
    }
  };

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
                  <li className="nav-item" key={item.id}>
                    <a
                      className={`nav-link ${
                        item.id === activeSection && 'active'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSection(item.id);
                        var anchorTarget = document.getElementById(item.id);
                        anchorTarget.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        });
                        //       history.push('#' + item.id);
                      }}
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
