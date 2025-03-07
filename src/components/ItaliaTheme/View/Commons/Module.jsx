/**
 * Modules view component.
 * @module components/theme/View/DocumentoView/Modules
 */

import React from 'react';
import PropTypes from 'prop-types';
import { UniversalLink } from '@plone/volto/components';

import { Card, CardBody, CardTitle } from 'design-react-kit';

import { DownloadFileFormat } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

/**
 * Module view component class.
 * @function Modules
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const Module = ({ item }) => {
  return item ? (
    <Card
      className="card card-teaser shadow p-4 mt-3 rounded modulo"
      noWrapper={true}
      tag="div"
    >
      <CardBody tag="div">
        <CardTitle className="h5">
          {item.file_principale ? (
            item.title ?? item.file_principale.filename
          ) : item['@type'] === 'Link' ? (
            <UniversalLink item={item} title={item.title}>
              {item.title}
            </UniversalLink>
          ) : (
            item.title
          )}
        </CardTitle>

        {item.description && <p>{item.description}</p>}
        <div className="download-formats">
          <DownloadFileFormat
            file={item.file}
            showLabel={true}
            title={item.title ?? item.file.filename}
            hideFileFormatLabel={true}
            className="mb-4"
          />
          <DownloadFileFormat
            file={item.file_principale}
            showLabel={true}
            title={item.title ?? item.file_principale.filename}
            hideFileFormatLabel={true}
            className="mb-4"
          />
          <DownloadFileFormat
            file={item.formato_alternativo_1}
            showLabel={true}
            title={item.title ?? item.formato_alternativo_1.filename}
            hideFileFormatLabel={true}
            className="mb-4"
          />
          <DownloadFileFormat
            file={item.formato_alternativo_2}
            showLabel={true}
            title={item.title ?? item.formato_alternativo_2.filename}
            hideFileFormatLabel={true}
          />
        </div>
      </CardBody>
    </Card>
  ) : null;
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Module.propTypes = {
  item: PropTypes.shape({
    '@id': PropTypes.string,
  }).isRequired,
};

export default Module;
