/**
 * DocRow view component.
 * @module components/theme/View/DocRow
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import { DownloadFileFormat } from '@italia/components/ItaliaTheme/View';
import cx from 'classnames';

/**
 * DocRow view component class.
 * @function DocRow
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const DocRow = ({ doc }) => {
  return (
    <div
      className={cx('doc-row', {
        'has-children': doc.items?.length > 1,
      })}
      key={doc['@id']}
    >
      <div className="doc">
        <div className="title">
          <Link to={flattenToAppURL(doc['@id'])}>
            {doc.title}
            {doc.items?.length > 1 && ` - ${doc.items[0]?.title}`}
          </Link>
        </div>
        {doc.items?.length === 1 && (
          <div className="downloads">
            <DownloadFileFormat file={doc.items[0]?.file_principale} />
            <DownloadFileFormat file={doc.items[0]?.formato_alternativo_1} />
            <DownloadFileFormat file={doc.items[0]?.formato_alternativo_2} />
          </div>
        )}
      </div>
      {doc.items?.length > 1 && (
        <>
          {doc.items.map((modulo) => (
            <div class="doc modulo">
              <div className="title">{modulo.title}</div>
              <div className="downloads">
                <DownloadFileFormat file={modulo?.file_principale} />
                <DownloadFileFormat file={modulo?.formato_alternativo_1} />
                <DownloadFileFormat file={modulo?.formato_alternativo_2} />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default DocRow;
