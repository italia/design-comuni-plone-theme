import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { isInternalURL, flattenToAppURL } from '@plone/volto/helpers';
import React from 'react';
import { Icon } from 'design-react-kit/dist/design-react-kit';

const LinkEntity = connect((state) => ({
  token: state.userSession.token,
}))(({ token, key, url, target = '_blank', targetUrl, download, children }) => {
  const to = token ? url : targetUrl || url;
  if (download) {
    return token ? (
      <Link key={key} to={flattenToAppURL(to)}>
        {children}
      </Link>
    ) : (
      <a key={key} href={download}>
        {children}
      </a>
    );
  }
  return isInternalURL(to) ? (
    <Link key={key} to={flattenToAppURL(to)}>
      {children}
    </Link>
  ) : (
    <a key={key} href={to} target={target} rel="noopener noreferrer">
      {children}
      <Icon icon={'it-external-link'} className="external-link" />
    </a>
  );
});

const customLinkRenderer = (children, props, { key }) => {
  return (
    <LinkEntity key={key} {...props}>
      {children}
    </LinkEntity>
  );
};

export default customLinkRenderer;
