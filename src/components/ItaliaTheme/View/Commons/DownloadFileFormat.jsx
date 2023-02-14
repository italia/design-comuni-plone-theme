import React from 'react';
import PropTypes from 'prop-types';

import { flattenToAppURL } from '@plone/volto/helpers';
import { FontAwesomeIcon as IconFA } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { defineMessages, useIntl } from 'react-intl';
import { Icon } from '@plone/volto/components';
import { getFileViewFormat } from 'design-comuni-plone-theme/helpers';

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
  const defaultIcon = { lib: 'far', name: 'file', svg_format: false };
  let label = intl.formatMessage(messages.download_file);
  let icon = null;

  if (file) {
    const viewFormat = getFileViewFormat(file);

    label = viewFormat?.label
      ? `${intl.formatMessage(messages.download_in_format)} ${
          viewFormat?.label
        }`
      : intl.formatMessage(messages.download_file);

    icon = viewFormat?.icon ?? defaultIcon;
  }
  const pdfFile = file?.download?.includes('@@display-file');

  return file ? (
    <a
      href={flattenToAppURL(file.download)}
      title={file.filename}
      className={className}
      target={pdfFile ? '_blank' : '_self'}
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
      {showLabel && <span className="ms-4">{label}</span>}
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
