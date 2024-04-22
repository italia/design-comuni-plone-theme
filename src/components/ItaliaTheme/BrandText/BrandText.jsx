import React from 'react';
import cx from 'classnames';
import { useIntl } from 'react-intl';
import { SiteProperty } from 'volto-site-settings';
import { getSiteProperty } from 'design-comuni-plone-theme/helpers';

const BrandText = ({ mobile = false, subsite }) => {
  const intl = useIntl();
  const title = SiteProperty({
    property: 'site_title',
    forceValue: !subsite ? getSiteProperty('siteTitle', intl.locale) : null,
    defaultValue: getSiteProperty('siteTitle', intl.locale),
    getValue: true,
  });

  const description = SiteProperty({
    property: 'site_subtitle',
    defaultValue: getSiteProperty('siteSubtitle', intl.locale),
    getValue: true,
  });

  return (
    <div className="it-brand-text">
      {title && <div className="it-brand-title">{title}</div>}
      {description && (
        <div
          className={cx('it-brand-tagline', { 'd-none d-md-block': !mobile })}
        >
          {description}
        </div>
      )}
    </div>
  );
};

export default BrandText;
