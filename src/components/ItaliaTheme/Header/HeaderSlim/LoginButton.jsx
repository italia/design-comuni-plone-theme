/* eslint-disable react-hooks/exhaustive-deps */
/**
 * LoginButton component.
 * @module components/ItaliaTheme/Header/HeaderSlim/LoginButton
 */

import React, { useState, useEffect } from 'react';

import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

import config from '@plone/volto/registry';

const LoginButton = ({ children, size = 'full', designReactKit }) => {
  let [loginURL, setLoginURL] = useState(
    config.settings.siteProperties?.arLoginUrl,
  );

  useEffect(() => {
    if (loginURL && __CLIENT__) {
      if (loginURL.indexOf('came_from') < 0) {
        let came_from = loginURL.indexOf('?') >= 0 ? '&' : '?';
        came_from += 'came_from=' + window?.location?.href ?? '';
        setLoginURL(loginURL + came_from);
      }
    }
  }, []);

  const { Button } = designReactKit;
  return loginURL ? (
    <Button
      className="btn-icon"
      color="primary"
      href={loginURL}
      icon={false}
      size={size}
      tag="a"
    >
      {children}
    </Button>
  ) : (
    <></>
  );
};

export default injectLazyLibs(['designReactKit'])(LoginButton);
