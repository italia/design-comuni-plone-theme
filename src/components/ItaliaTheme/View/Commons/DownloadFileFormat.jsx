import React from 'react';
import PropTypes from 'prop-types';

import { flattenToAppURL } from '@plone/volto/helpers';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  download_in_format: {
    id: 'modulo_download_in_format',
    defaultMessage: 'Scarica in formato',
  },
  download_file: {
    id: 'modulo_download_file',
    defaultMessage: 'Scarica il file',
  },
});

const DownloadFileFormat = ({
  file,
  formatsize = '2x',
  className,
  showLabel = false,
}) => {
  const intl = useIntl();
  const formats = {
    'text/rtf': { icon: { lib: 'far', name: 'file-alt' }, format_name: 'rtf' },
    'application/pdf': {
      icon: { lib: 'far', name: 'file-pdf'},
      format_name: 'pdf',
    },
    'application/zip': {
      icon: { lib: 'far', name: 'file-archive' },
      format_name: 'zip',
    },
    'application/gzip': {
      icon: { lib: 'far', name: 'file-archive' },
      format_name: 'gzip',
    },
    'application/vnd.rar': {
      icon: { lib: 'far', name: 'file-archive' },
      format_name: 'rar',
    },
    'application/x-tar': {
      icon: { lib: 'far', name: 'file-archive' },
      format_name: 'tar',
    },
    'application/json': {
      icon: { lib: 'fas', name: 'code' },
      format_name: 'json',
    },
    'text/javascript': {
      icon: { lib: 'fas', name: 'code' },
      format_name: 'js',
    },
    'text/html': { icon: { lib: 'fas', name: 'code' }, format_name: 'html' },
    'image/jpg': {
      icon: { lib: 'far', name: 'file-image' },
      format_name: 'jpg',
    },
    'image/jpeg': {
      icon: { lib: 'far', name: 'file-image' },
      format_name: 'jpeg',
    },
    'image/png': {
      icon: { lib: 'far', name: 'file-image' },
      format_name: 'png',
    },
    'image/svg': {
      icon: { lib: 'far', name: 'file-image' },
      format_name: 'svg',
    },
    'application/msword': {
      icon: { lib: 'far', name: 'file-word' },
      format_name: 'Word',
    },
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': {
      icon: { lib: 'far', name: 'file-word' },
      format_name: 'Word',
    },
    'application/vnd.ms-excel': {
      icon: { lib: 'far', name: 'file-excel' },
      format_name: 'Excel',
    },
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
      icon: { lib: 'far', name: 'file-excel' },
      format_name: 'Excel',
    },
    'application/vnd.ms-powerpoint': {
      icon: { lib: 'far', name: 'file-ppt' },
      format_name: 'PowerPoint',
    },
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': {
      icon: { lib: 'far', name: 'file-ppt' },
      format_name: 'PowerPoint',
    },
  };
  const defaultIcon = { lib: 'far', name: 'file' };

  const icon = file ? formats[file['content-type']]?.icon ?? defaultIcon : null;
  let label = intl.formatMessage(messages.download_file);
  if (file && formats[file['content-type']]?.icon) {
    label = `${intl.formatMessage(messages.download_in_format)} ${
      formats[file['content-type']].format_name
    }`;
  }

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
        size={formatsize}
      />
      {showLabel && <span className="ml-4">{label}</span>}
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
  }),
};

export default DownloadFileFormat;
