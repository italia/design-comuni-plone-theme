/**
 * Icon component.
 * @module components/ItaliaTheme/Icons/SectionIcon
 */
import React from 'react';

const FontAwesomeIcon = (props) => {
  const { className, icon, prefix, title } = props;
  const [loadedIcon, setLoadedIcon] = React.useState(null);
  let prefixKey = prefix;
  let iconName = icon;

  if (Array.isArray(icon)) {
    prefixKey = icon[0];
    iconName = icon[1];
  }

  const prefixFolder =
    prefixKey === 'fab' ? 'brands' : prefixKey === 'far' ? 'regular' : 'solid';

  React.useEffect(() => {
    if (iconName && !loadedIcon) {
      import(
        `design-comuni-plone-theme/icons/fontawesome-free-5.15.4-web/svgs/${prefixFolder}/${iconName}.svg`
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
