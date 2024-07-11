import React from 'react';
import cx from 'classnames';
import { useIntl } from 'react-intl';
import { SiteProperty } from 'volto-site-settings';
import { getSiteProperty } from 'design-comuni-plone-theme/helpers';

const BrandText = ({ mobile = false, getParent = false }) => {
  const intl = useIntl();
  let title = SiteProperty({
    property: 'site_title',
    defaultValue: getSiteProperty('siteTitle', intl.locale),
    getValue: true,
    getParent: getParent,
  });

  const description = SiteProperty({
    property: 'site_subtitle',
    defaultValue: getSiteProperty('siteSubtitle', intl.locale),
    getValue: true,
    getParent: getParent,
  });
  const titleSplit = title?.split('\n') ?? null;
  title = titleSplit?.map((t, i) => (
    <>
      {t}
      {i < titleSplit.length - 1 && <br />}
    </>
  ));

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
