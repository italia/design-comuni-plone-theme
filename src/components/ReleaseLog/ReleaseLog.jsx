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
import config from '@plone/volto/registry';
import './ReleaseLog.css';

const ReleaseLog = () => {
  const { addonsInfo } = config.settings;
  const addons = addonsInfo.map((addon) => addon.name);
  const ReleaseDCPT = addons.includes('design-comuni-plone-theme')
    ? require('design-comuni-plone-theme/../RELEASE.md')
    : null;
  const ReleaseIoCittadino = addons.includes('@redturtle/volto-io-cittadino')
    ? require('@redturtle/volto-io-cittadino/../RELEASE.md')
    : null;
  const ReleaseIoPrenoto = addons.includes('@redturtle/volto-io-prenoto')
    ? require('@redturtle/volto-io-prenoto/../RELEASE.md')
    : null;

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
      <Container className="px-4 my-4 release-log">
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
                    log.name === 'io-Comune' ? (
                      logDCPT
                    ) : log.name == 'io-Cittadino' ? (
                      logIoCittadino
                    ) : log.name == 'io-Prenoto' ? (
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
