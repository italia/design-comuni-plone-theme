import React from 'react';
import { RichTextRender } from 'design-comuni-plone-theme/components/ItaliaTheme/View';
const BlocksViewWidget = ({ value, children, className }) => {
  return <RichTextRender data={value} add_class={className} serif={false} />;
};

export default BlocksViewWidget;
