/* eslint-disable react-hooks/exhaustive-deps */
/**
 * LoginButton component.
 * @module components/ItaliaTheme/Header/HeaderSlim/LoginButton
 */

import React from 'react';

import { Button } from 'design-react-kit/dist/design-react-kit';

import config from '@plone/volto/registry';

const LoginButton = ({ children, size = 'full' }) => {
  let loginURL = config.settings.siteProperties?.arLoginUrl;
  if (loginURL) {
    loginURL += loginURL.indexOf('?') >= 0 ? '&' : '?';
    loginURL += 'came_from=' + window.location.href;
  }

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

export default LoginButton;
