/**
 * ReleaseLog component.
 * @module components/ReleaseLog/ReleaseLog
 */

import React, { useState, useEffect } from 'react';

import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'design-react-kit';
import { Helmet } from '@plone/volto/helpers';
import { marked } from 'marked';

import './ReleaseLog.css';

const ReleaseLog = () => {
  let ReleaseDCPT = null;
  let ReleaseIoCittadino = null;
  let ReleaseIoPrenoto = null;
  try {
    ReleaseDCPT = require('design-comuni-plone-theme/../RELEASE.md');
  } catch {
    console.log("design-comuni-plone-theme/../RELEASE.md doesn't exists");
  }
  try {
    ReleaseIoCittadino = require('@redturtle/volto-io-cittadino/../RELEASE.md');
  } catch {
    console.log("@redturtle/volto-io-cittadino/../RELEASE.md doesn't exists");
  }
  try {
    ReleaseIoPrenoto = require('@redturtle/volto-io-prenoto/../RELEASE.md');
  } catch {
    console.log("@redturtle/volto-io-prenoto/../RELEASE.md doesn't exists");
  }

  const LOGS_TO_VIEW = [
    { name: 'io-Comune', file: ReleaseDCPT },
    {
      name: 'io-Cittadino',
      file: ReleaseIoCittadino,
    },
    { name: 'io-Prenoto', file: ReleaseIoPrenoto },
  ];

  const [activeTab, toggleTab] = useState(LOGS_TO_VIEW[0].name);
  const [logDCPT, setLogDCPT] = useState('');
  const [logIoCittadino, setLogIoCittadino] = useState('');
  const [logIoPrenoto, setLogIoPrenoto] = useState('');

  useEffect(() => {
    if (ReleaseDCPT) {
      try {
        fetch(ReleaseDCPT)
          .then((res) => res.text())
          .then((text) => {
            setLogDCPT(marked(text));
          });
      } catch {
        console.log(ReleaseDCPT + ' not found.');
      }
    }
    if (ReleaseIoCittadino) {
      try {
        fetch(ReleaseIoCittadino)
          .then((res) => res.text())
          .then((text) => {
            setLogIoCittadino(marked(text));
          });
      } catch {
        console.log(ReleaseIoCittadino + ' not found.');
      }
    }
    if (ReleaseIoPrenoto) {
      try {
        fetch(ReleaseIoPrenoto)
          .then((res) => res.text())
          .then((text) => {
            setLogIoPrenoto(marked(text));
          });
      } catch {
        console.log(ReleaseIoPrenoto + ' not found.');
      }
    }
  }, []);

  const viewTab = (tab) => {
    if (activeTab !== tab) {
      toggleTab(tab);
    }
  };

  return (
    <div className="public-ui">
      <Helmet title="Release LOG" />
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Container className="px-4 my-4">
        <h1>Lista degli aggiornamenti</h1>
        <Nav tabs className="mb-3">
          {LOGS_TO_VIEW.filter((log) => log.file != null).map((log) => (
            <NavItem key={log.name}>
              <NavLink
                href="#"
                active={activeTab === log.name}
                onClick={() => viewTab(log.name)}
              >
                <span>{log.name}</span>
              </NavLink>
            </NavItem>
          ))}
        </Nav>

        <TabContent activeTab={activeTab}>
          {LOGS_TO_VIEW.filter((log) => log.file != null).map((log) => (
            <TabPane
              tabId={log.name}
              className="p-3"
              key={log.name + 'tabcontent'}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    log.name === 'io-comune' ? (
                      logDCPT
                    ) : log.name == 'io-cittadino' ? (
                      logIoCittadino
                    ) : log.name == 'io-prenoto' ? (
                      logIoPrenoto
                    ) : (
                      <div></div>
                    ),
                }}
              ></div>
            </TabPane>
          ))}
        </TabContent>
      </Container>
    </div>
  );
};

export default ReleaseLog;
