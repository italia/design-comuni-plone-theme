import React from 'react';
import { useIntl } from 'react-intl';
import { SiteProperty } from 'volto-site-settings';
import { getSiteProperty } from 'design-comuni-plone-theme/helpers';

const BrandTextFooter = () => {
  const intl = useIntl();
  let title = SiteProperty({
    property: 'site_title',
    defaultValue: getSiteProperty('siteTitle', intl.locale),
    getValue: true,
    getParent: true,
  });

  const description = SiteProperty({
    property: 'site_subtitle',
    defaultValue: getSiteProperty('siteSubtitle', intl.locale),
    getValue: true,
    getParent: true,
  });
  const titleSplit = title?.split('\n') ?? null;
  title = titleSplit?.map((t, i) => (
    <React.Fragment key={i}>
      {t}
      {i < titleSplit.length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <div className="it-brand-text">
      {title && <div className="h2">{title}</div>}
      {description && <div className="h3">{description}</div>}
    </div>
  );
};

export default BrandTextFooter;
