import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import config from '@plone/volto/registry';
import { isInternalURL, flattenToAppURL } from '@plone/volto/helpers';
import { getFileViewFormat } from 'design-comuni-plone-theme/helpers';
import { FontAwesomeIcon as IconFA } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { Icon } from '@plone/volto/components';

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

const getExtensionForFiles = (element) => {
  const file = {
    ...element.enhanced_link_infos,
    filename: element.data.url,
  };
  const viewFormat = getFileViewFormat(file);
  const icon = viewFormat?.icon ?? {
    lib: 'far',
    name: 'file',
    svg_format: false,
  };
  return (
    <span className="slate-inline-file-infos">
      {' '}
      (
      {!icon.svg_format ? (
        <IconFA
          icon={[icon.lib, icon.name]}
          alt={file.filename}
          title={file.filename}
          size={'1x'}
        />
      ) : (
        <Icon className="icon-svg-custom" name={icon.name} />
      )}{' '}
      {file?.size})
    </span>
  );
};

export const LinkElement = (props) => {
  const { attributes, children, element, mode = 'edit' } = props;

  let dataElementAttr = {};
  if (element.data.dataElement) {
    dataElementAttr['data-element'] = element.data.dataElement;
  }

  let extended_children = <></>;
  if (element.enhanced_link_infos) {
    extended_children = getExtensionForFiles(element);
  }

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
    </a>
  );
};
