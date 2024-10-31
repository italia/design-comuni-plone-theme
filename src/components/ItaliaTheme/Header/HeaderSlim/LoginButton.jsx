/**
 * LoginButton component.
 * @module components/ItaliaTheme/Header/HeaderSlim/LoginButton
 */

import React from 'react';
import { Button } from 'design-react-kit';

const LoginButton = ({ children, baseLoginUrl, size = 'full' }) => {
  return baseLoginUrl ? (
    <Button
      className="btn-icon login-button"
      color="primary"
      href={baseLoginUrl}
      icon={false}
      size={size}
      tag="a"
      data-element="personal-area-login"
    >
      {children}
    </Button>
  ) : (
    <></>
  );
};

export default LoginButton;
