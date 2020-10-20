/**
 * Modules view component.
 * @module components/theme/View/DocumentoView/Modules
 */

import React from 'react';
import PropTypes from 'prop-types';

import { flattenToAppURL } from '@plone/volto/helpers';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  Card,
  CardBody,
  CardTitle,
} from 'design-react-kit/dist/design-react-kit';

/**
 * Modules view component class.
 * @function Modules
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const Modules = ({ content }) => {
  const moduli =
    content.items?.filter((item) => item.id !== 'multimedia') ?? [];

  return moduli.length > 0 ? (
    <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal modules">
      {moduli.map((modulo) => (
        <Card
          className="card card-teaser shadow p-4 mt-3 rounded modulo"
          noWrapper={true}
          tag="div"
        >
          <CardBody tag="div">
            <CardTitle tag="h5">
              {modulo.file_principale ? (
                <a
                  href={flattenToAppURL(modulo.file_principale.download)}
                  title={modulo.title ?? modulo.file_principale.filename}
                >
                  {modulo.title ?? modulo.file_principale.filename}
                </a>
              ) : (
                modulo.title
              )}
            </CardTitle>

            {modulo.description && <p>{modulo.description}</p>}
            <div className="download-formats">
              <DownloadFormat file={modulo.file_principale} />
              <DownloadFormat file={modulo.formato_alternativo_1} />
              <DownloadFormat file={modulo.formato_alternativo_2} />
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  ) : null;
};

const DownloadFormat = ({ file }) => {
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
    <a href={flattenToAppURL(file.download)} title={file.filename}>
      <Icon
        icon={[icon.lib, icon.name]}
        alt={file.filename}
        title={file.filename}
      />
    </a>
  ) : null;
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Modules.propTypes = {
  content: PropTypes.shape({
    items: PropTypes.array,
  }).isRequired,
};

export default Modules;
