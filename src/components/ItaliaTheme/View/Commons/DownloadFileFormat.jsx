import React from 'react';
import PropTypes from 'prop-types';

import { flattenToAppURL } from '@plone/volto/helpers';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const DownloadFileFormat = ({ file, iconSize = 'sm', className }) => {
  const icons = {
    'text/rtf': { lib: 'far', name: 'file-alt' },
    'application/pdf': { lib: 'far', name: 'file-pdf' },
    'application/zip': { lib: 'far', name: 'file-archive' },
    'application/gzip': { lib: 'far', name: 'file-archive' },
    'application/json': { lib: 'fas', name: 'code' },
    'text/html': { lib: 'fas', name: 'code' },
    'image/jpg': { lib: 'far', name: 'file-image' },
    'image/jpeg': { lib: 'far', name: 'file-image' },
    'image/png': { lib: 'far', name: 'file-image' },
    'image/svg': { lib: 'far', name: 'file-image' },
  };
  const defaultIcon = { lib: 'fas', name: 'download' };

  const icon = file ? icons[file['content-type']] ?? defaultIcon : null;
  return file ? (
    <a
      href={flattenToAppURL(file.download)}
      title={file.filename}
      className={className}
    >
      <Icon
        icon={[icon.lib, icon.name]}
        alt={file.filename}
        title={file.filename}
        size={iconSize}
      />
    </a>
  ) : null;
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
DownloadFileFormat.propTypes = {
  file: PropTypes.shape({
    'content-type': PropTypes.string,
    download: PropTypes.string,
    filename: PropTypes.string,
    size: PropTypes.number,
  }).isRequired,
};

export default DownloadFileFormat;
