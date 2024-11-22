import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  padding: PropTypes.bool,
};

const defaultProps = {
  color: '',
  size: '24px',
  icon: '',
  padding: false,
};

// No ts means we get many different things here, standardize it
const SIZE_MAPPINGS = {
  xs: '1rem',
  sm: '1.25rem',
  md: defaultProps.size,
  lg: '1.75rem',
  xl: '2rem',
};

function getIconMapSizeConfig(size) {
  const mapKeys = Object.keys(SIZE_MAPPINGS);
  if (mapKeys.includes(size)) return SIZE_MAPPINGS[size];
  return size;
}

const iconCache = new Map(); // Global cache using Map

const Icon = ({ icon, title, className, size }) => {
  const [iconState, setIconState] = useState({
    loading: true,
    icon: undefined,
    // Move to useId in react18
    id: uuid(),
  });

  useEffect(() => {
    let loadableIcon = iconCache.get(icon);
    // Use the cached icon if available
    if (loadableIcon) {
      setIconState((prev) => ({
        ...prev,
        loading: false,
        icon: loadableIcon,
      }));
    } else {
      // Otherwise, dynamically import the icon
      const importIcon = async () => {
        try {
          const { default: namedImport } = await import(
            `bootstrap-italia/src/svg/${icon}.svg`
          );
          iconCache.set(icon, namedImport); // Cache the imported icon
          loadableIcon = namedImport;
        } catch (err) {
          console.error(`Error loading icon: ${icon}`, err);
        } finally {
          setIconState((prev) => ({
            ...prev,
            loading: false,
            icon: loadableIcon,
          }));
        }
      };
      importIcon();
    }
  }, [icon]);

  const iconSize = getIconMapSizeConfig(size);

  // Placeholder that is shown while the icon is loading
  if (iconState.loading) {
    return (
      <span
        style={{
          width: iconSize,
          height: iconSize,
          backgroundColor: 'transparent',
        }}
        className={className}
      />
    );
  }

  // Render the icon once it's loaded
  if (iconState.icon) {
    return (
      <svg
        xmlns={iconState.icon.attributes?.xmlns}
        viewBox={iconState.icon.attributes?.viewBox}
        width={iconState.icon.attributes?.width}
        height={iconState.icon.attributes?.height}
        style={{ height: iconSize, width: iconSize }}
        className={className}
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: title
            ? `<title id="${iconState.id}">${title}</title>${iconState.icon.content}`
            : iconState.icon.content,
        }}
        aria-labelledby={iconState.id}
      />
    );
  }

  return null;
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
