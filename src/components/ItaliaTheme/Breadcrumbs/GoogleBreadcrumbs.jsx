/**
 * GoogleBreadcrumbs components.
 * @module components/theme/Breadcrumbs/GoogleBreadcrumbs
 */

/*
Google Structured Data: Breadcrumbs
ref: https://developers.google.com/search/docs/advanced/structured-data/breadcrumb
*/

import React from 'react';
import { Helmet, toPublicURL } from '@plone/volto/helpers';

const GoogleBreadcrumbs = ({ items }) => {
  return items?.length > 0 ? (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: items.map((item, i) => {
            return {
              '@type': 'ListItem',
              position: i + 1,
              name: item.title,
              item: i < items.length - 1 ? toPublicURL(item.url) : undefined,
            };
          }),
        })}
      </script>
    </Helmet>
  ) : null;
};

export default GoogleBreadcrumbs;
