/**
 * DocRow view component.
 * @module components/theme/View/DocRow
 */

import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { DownloadFileFormat } from '@italia/components/ItaliaTheme/View';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';

/**
 * DocRow view component class.
 * @function DocRow
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const Downloads = ({ item, titleDoc }) => {
  return item['@type'] === 'Modulo' ? (
    <React.Fragment>
      {!titleDoc ? (
        <div className="title">{item.title}</div>
      ) : (
        titleDoc !== item.title && <div className="title">{item.title}</div>
      )}
      <div className="downloads">
        <DownloadFileFormat file={item?.file_principale} />
        <DownloadFileFormat file={item?.formato_alternativo_1} />
        <DownloadFileFormat file={item?.formato_alternativo_2} />
      </div>
    </React.Fragment>
  ) : (
    <UniversalLink
      href={flattenToAppURL(item['@id'])}
      title={item.title}
      className="modulistica-link"
    >
      <div className="title">{item.title}</div>
      <Icon
        icon={['fas', 'link']}
        alt={item.title}
        role="presentation"
        aria-hidden={true}
      />
    </UniversalLink>
  );
};

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
          <UniversalLink href={flattenToAppURL(doc['@id'])}>
            {doc.title}
            {/* {doc.items?.length > 1 && ` - ${doc.items[0]?.title}`} */}
          </UniversalLink>
        </div>
        {doc.items?.length === 1 && (
          <Downloads item={doc.items[0]} titleDoc={doc.title} />
        )}
      </div>
      {doc.items?.length > 1 && (
        <>
          {doc.items.map((modulo) => (
            <div className="doc modulo" key={modulo['@id']}>
              <Downloads item={modulo} titleDoc={null} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default DocRow;
