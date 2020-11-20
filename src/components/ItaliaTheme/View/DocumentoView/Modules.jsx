/**
 * Modules view component.
 * @module components/theme/View/DocumentoView/Modules
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';

import {
  Card,
  CardBody,
  CardTitle,
} from 'design-react-kit/dist/design-react-kit';

import {
  DownloadFileFormat,
  RichTextArticle,
} from '@italia/components/ItaliaTheme/View';

/**
 * Modules view component class.
 * @function Modules
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const Modules = ({ content, title, id = 'documenti' }) => {
  const moduli =
    content.items?.filter((item) => item.id !== 'multimedia') ?? [];

  return moduli.length > 0 ? (
    <RichTextArticle tag_id={id} title={title}>
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
                ) : modulo['@type'] === 'Link' ? (
                  <UniversalLink href={modulo['@id']} title={modulo.title}>
                    {modulo.title}
                  </UniversalLink>
                ) : (
                  modulo.title
                )}
              </CardTitle>

              {modulo.description && <p>{modulo.description}</p>}
              <div className="download-formats">
                <DownloadFileFormat
                  file={modulo.file_principale}
                  showLabel={true}
                  className="mb-4"
                />
                <DownloadFileFormat
                  file={modulo.formato_alternativo_1}
                  showLabel={true}
                  className="mb-4"
                />
                <DownloadFileFormat
                  file={modulo.formato_alternativo_2}
                  showLabel={true}
                />
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </RichTextArticle>
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
