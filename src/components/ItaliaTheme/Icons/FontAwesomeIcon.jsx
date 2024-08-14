/**
 * Icon component.
 * @module components/ItaliaTheme/Icons/SectionIcon
 */
import React, { useMemo } from 'react';
import { v4 as uuid } from 'uuid';
import { fontAwesomeAliases } from 'design-comuni-plone-theme/helpers/index';

const FontAwesomeIcon = (props) => {
  const { className, icon, prefix, title } = props;
  const iconID = useMemo(() => uuid(), []);
  const [loadedIcon, setLoadedIcon] = React.useState({
    module: null,
    iconName: '',
    family: 'solid',
  });
  const getIconAlias = (icon, aliasList) => {
    if (icon in aliasList) {
      return aliasList[icon];
    } else {
      return icon;
    }
  };

  const getIconInfo = (icon, prefix) => {
    let prefixKey = prefix;
    let iconName = '';
    if (Array.isArray(icon)) {
      prefixKey = icon[0];
      iconName = getIconAlias(icon[1], fontAwesomeAliases);
    } else {
      iconName = getIconAlias(icon, fontAwesomeAliases);
    }

    return [
      prefixKey === 'fab'
        ? 'brands'
        : prefixKey === 'far'
          ? 'regular'
          : prefixKey === 'fas'
            ? 'solid'
            : prefixKey != null
              ? prefixKey
              : 'solid',
      iconName,
    ];
  };

  React.useEffect(() => {
    const [prefixFolder, iconName] = getIconInfo(icon, prefix);
    if (
      iconName &&
      (iconName !== loadedIcon.iconName || prefixFolder !== loadedIcon.family)
    ) {
      import(
        `design-comuni-plone-theme/icons/fontawesome-free-6.4.0-web/svgs/${prefixFolder}/${iconName}.svg`
      )
        .then((_loadedIcon) => {
          setLoadedIcon({
            module: _loadedIcon.default,
            iconName,
            family: prefixFolder,
          });
        })
        .catch((error) => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [icon, prefix, loadedIcon]);

  return loadedIcon.module ? (
    <svg
      xmlns={loadedIcon.module.attributes && loadedIcon.module.attributes.xmlns}
      viewBox={
        loadedIcon.module.attributes && loadedIcon.module.attributes.viewBox
      }
      className={`icon fa-icon ${className ?? ''}`}
      dangerouslySetInnerHTML={{
        __html: title
          ? `<title id="${iconID}">${title}</title>${loadedIcon.module.content}`
          : loadedIcon.module.content,
      }}
      aria-labelledby={iconID}
      aria-hidden={props['aria-hidden']}
    />
  ) : icon ? (
    <span className={`icon fa-icon placeholder ${className ?? ''}`}></span>
  ) : (
    <></>
  );
};

export default FontAwesomeIcon;
