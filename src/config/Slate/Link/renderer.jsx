import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import config from '@plone/volto/registry';
import { isInternalURL, flattenToAppURL } from '@plone/volto/helpers';
import { EnhanceLink } from 'design-comuni-plone-theme/helpers';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

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

  let enhanced_link = element.data.enhanced_link_infos
    ? EnhanceLink({
        enhanced_link_infos: {
          ...element.data.enhanced_link_infos, //{mime_type: 'image/png', getObjSize: '1.3 MB'}
          filename: element.data.url,
        },
      })
    : null;

  const extended_children = enhanced_link?.children ?? <></>;

  return mode === 'view' ? (
    <ViewLink {...(element.data || {})} {...attributes}>
      {children}
      {extended_children}
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
      {extended_children}
      {!isInternalURL(element.data?.url) &&
        config.settings.siteProperties.markSpecialLinks && (
          <Icon
            icon="it-external-link"
            size="xs"
            className="ms-1 align-sub external-link"
          />
        )}
    </a>
  );
};
