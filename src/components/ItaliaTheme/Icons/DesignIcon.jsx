import React, { useState, useEffect, useRef, useMemo } from 'react';
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
  size: '',
  icon: '',
  padding: false,
};

const Icon = ({ icon, title, className, size }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const iconID = useMemo(() => uuid(), []);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { default: namedImport } = await import(
          `bootstrap-italia/src/svg/${icon}.svg`
        );
        ImportedIconRef.current = namedImport;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [icon]);

  if (!loading && ImportedIconRef.current) {
    const { current: name } = ImportedIconRef;
    return (
      <svg
        xmlns={name.attributes?.xmlns}
        viewBox={name.attributes?.viewBox}
        width={name.attributes?.width}
        height={name.attributes?.height}
        style={{ height: size, width: 'auto' }}
        className={className}
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: title
            ? `<title id="${iconID}">${title}</title>${name.content}`
            : name.content,
        }}
        aria-labelledby={iconID}
      />
    );
  }

  return null;
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
