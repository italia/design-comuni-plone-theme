import React from 'react';
import PropTypes from 'prop-types';

import { flattenToAppURL } from '@plone/volto/helpers';
import { FontAwesomeIcon as IconFA } from '@fortawesome/react-fontawesome';
import { defineMessages, useIntl } from 'react-intl';
import { Icon } from '@plone/volto/components';
import faFileXml from '@italia/icons/file-xml.svg';
import faFileXsd from '@italia/icons/file-xsd.svg';
import faFileOdp from '@italia/icons/file-odp.svg';
import faFileOds from '@italia/icons/file-ods.svg';
import faFileOdt from '@italia/icons/file-odt.svg';

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
      icon: { lib: 'far', name: 'file-pdf' },
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
    'text/xml': {
      icon: { lib: '', name: faFileXml, svg_format: true },
      format_name: 'XML',
    },
    'application/xml': {
      icon: { lib: '', name: faFileXml, svg_format: true },
      format_name: 'XML',
    },
  };

  const extensions = {
    xsd: {
      icon: { lib: '', name: faFileXsd, svg_format: true },
      format_name: 'XSD',
    },
    odt: {
      icon: { lib: '', name: faFileOdt, svg_format: true },
      format_name: 'ODT',
    },
    ods: {
      icon: { lib: '', name: faFileOds, svg_format: true },
      format_name: 'ODS',
    },
    odp: {
      icon: { lib: '', name: faFileOdp, svg_format: true },
      format_name: 'ODP',
    },
  };

  const defaultIcon = { lib: 'far', name: 'file', svg_format: false };
  let label = intl.formatMessage(messages.download_file);
  let icon = null;

  if (file) {
    // check XSD file extension
    const regexEx = /(?:\.([^.]+))?$/;
    const extensionFile = regexEx.exec(file.filename)[1];

    if (extensions[extensionFile]) {
      icon = extensions[extensionFile].icon;
      label = `${intl.formatMessage(messages.download_in_format)} ${
        extensions[extensionFile].format_name
      }`;
    } else if (formats[file['content-type']]) {
      label = `${intl.formatMessage(messages.download_in_format)} ${
        formats[file['content-type']].format_name
      }`;
      icon = formats[file['content-type']]?.icon;
    } else {
      label = intl.formatMessage(messages.download_file);
      icon = defaultIcon;
    }
  }

  return file ? (
    <a
      href={flattenToAppURL(file.download)}
      title={file.filename}
      className={className}
    >
      {!icon.svg_format ? (
        <IconFA
          icon={[icon.lib, icon.name]}
          alt={file.filename}
          title={file.filename}
          size={formatsize}
        />
      ) : (
        <Icon className="icon-svg-custom" name={icon.name} />
      )}
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
