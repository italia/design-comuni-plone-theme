/**
 * Icon component.
 * @module components/ItaliaTheme/Icons/SectionIcon
 */
import React from 'react';
import { fontAwesomeAliases } from 'design-comuni-plone-theme/helpers/index';

const FontAwesomeIcon = (props) => {
  const { className, icon, prefix, title } = props;
  const [loadedIcon, setLoadedIcon] = React.useState(null);

  const getIconAlias = (icon, aliasList) => {
    if (icon in aliasList) {
      return aliasList[icon];
    } else {
      return icon;
    }
  };

  let prefixKey = prefix;
  let iconName = '';

  if (Array.isArray(icon)) {
    prefixKey = icon[0];
    iconName = getIconAlias(icon[1], fontAwesomeAliases);
  } else {
    iconName = getIconAlias(icon, fontAwesomeAliases);
  }

  const prefixFolder =
    prefixKey === 'fab' ? 'brands' : prefixKey === 'far' ? 'regular' : 'solid';

  React.useEffect(() => {
    if (iconName && !loadedIcon) {
      import(
        `design-comuni-plone-theme/icons/fontawesome-free-6.4.0-web/svgs/${prefixFolder}/${iconName}.svg`
      )
        .then((_loadedIcon) => {
          setLoadedIcon(_loadedIcon);
        })
        .catch((error) => {});
    }
  }, [iconName, loadedIcon, prefixFolder]);

  return loadedIcon ? (
    <svg
      xmlns={loadedIcon.attributes && loadedIcon.attributes.xmlns}
      viewBox={loadedIcon.attributes && loadedIcon.attributes.viewBox}
      className={`icon fa-icon ${className ?? ''}`}
      dangerouslySetInnerHTML={{
        __html: title
          ? `<title>${title}</title>${loadedIcon.content}`
          : loadedIcon.content,
      }}
    />
  ) : icon ? (
    <span className={`icon fa-icon placeholder ${className ?? ''}`}></span>
  ) : (
    <></>
  );
};

export default FontAwesomeIcon;
