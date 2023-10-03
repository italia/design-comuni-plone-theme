import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import config from '@plone/volto/registry';
import { isInternalURL, flattenToAppURL } from '@plone/volto/helpers';

const ViewLink = ({
  url,
  target,
  download,
  children,
  className,
  dataElement,
}) => {
  const { openExternalLinkInNewTab } = config.settings;
  let dataElementAttr = {};
  if (dataElement) {
    dataElementAttr['data-element'] = dataElement;
  }
  return (
    <UniversalLink
      href={url}
      openLinkInNewTab={
        (openExternalLinkInNewTab && !isInternalURL(url)) || target === '_blank'
      }
      download={download}
      className={className}
      {...dataElementAttr}
    >
      {children}
    </UniversalLink>
  );
};

export const LinkElement = (props) => {
  const { attributes, children, element, mode = 'edit' } = props;

  let dataElementAttr = {};
  if (element.data.dataElement) {
    dataElementAttr['data-element'] = element.data.dataElement;
  }
  return mode === 'view' ? (
    <ViewLink {...(element.data || {})} {...attributes}>
      {children}
    </ViewLink>
  ) : (
    <a
      {...attributes}
      {...dataElementAttr}
      className={'slate-editor-link ' + (attributes.className ?? '')}
      href={
        isInternalURL(element.data?.url)
          ? flattenToAppURL(element.data?.url)
          : element.data?.url
      }
      onClick={(e) => e.preventDefault()}
    >
      {Array.isArray(children)
        ? children.map((child, i) => {
            if (child?.props?.decorations) {
              const isSelection =
                child.props.decorations.findIndex((deco) => deco.isSelection) >
                -1;
              if (isSelection)
                return (
                  <span className="highlight-selection" key={`${i}-sel`}>
                    {child}
                  </span>
                );
            }
            return child;
          })
        : children}
    </a>
  );
};
