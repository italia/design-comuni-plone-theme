import React from 'react';

import config from '@plone/volto/registry';

const ContentTypeViewSections = ({ content, defaultSections }) => {
  if (!content) {
    return <></>;
  }

  const sections =
    config.settings?.italiaThemeViewsConfig?.[content['@type']]?.sections ??
    defaultSections;

  return sections?.length > 0 ? (
    sections.map((section, i) => (
      <section.component
        content={content}
        {...section.props}
        key={`${content['@id']}-section-${i}`}
      />
    ))
  ) : (
    <></>
  );
};

export default ContentTypeViewSections;
