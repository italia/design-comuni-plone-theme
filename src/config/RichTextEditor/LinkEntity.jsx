import React from 'react';
import { connect } from 'react-redux';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';

const LinkEntity = connect((state) => ({
  token: state.userSession.token,
}))((props) => {
  const { token, url, target, targetUrl, download, children, dataElement } =
    props;
  const to = token ? url : targetUrl || url;

  return (
    <UniversalLink
      href={to}
      openLinkInNewTab={target === '_blank' || undefined}
      download={download}
      data-element={dataElement || props['data-element'] || null}
    >
      {children}
    </UniversalLink>
  );
});

export default LinkEntity;
