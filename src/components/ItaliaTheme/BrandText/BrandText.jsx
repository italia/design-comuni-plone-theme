import React from 'react';
import cx from 'classnames';
import { useIntl } from 'react-intl';
import { getSiteProperty } from 'design-volto-theme/helpers';

const BrandText = ({ mobile = false, subsite }) => {
  const intl = useIntl();
  return (
    <div className="it-brand-text">
      <h2 className="no_toc">
        {subsite?.title || getSiteProperty('siteTitle', intl.locale)}
      </h2>
      <h3 className={cx('no_toc', { 'd-none d-md-block': !mobile })}>
        {subsite?.description || getSiteProperty('siteSubtitle', intl.locale)}
      </h3>
    </div>
  );
};

export default BrandText;
