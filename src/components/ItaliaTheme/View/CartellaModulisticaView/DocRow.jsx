/**
 * DocRow view component.
 * @module components/theme/View/DocRow
 */

import React, { useState } from 'react';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { DownloadFileFormat } from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { FontAwesomeIcon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
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
      href={item.remoteUrl || flattenToAppURL(item['@id'])}
      title={item.title}
      className="modulistica-link"
    >
      <div className="title">{item.title}</div>
      <FontAwesomeIcon
        icon={['fas', 'link']}
        alt={item.title}
        role="presentation"
        aria-hidden={true}
      />
    </UniversalLink>
  );
};

const DocRow = ({ doc }) => {
  const [itemOpen, setItemOpen] = useState(false);

  const titleWrapper = (
    <div
      className={cx('title-wrap', {
        'single-row': doc.items?.length === 1,
      })}
    >
      <div id={`title-${doc.id}`} className="title">
        <UniversalLink href={doc.remoteUrl || flattenToAppURL(doc['@id'])}>
          {doc.title}
        </UniversalLink>
        {doc?.description && (
          <p className="description text-muted">{doc.description}</p>
        )}
      </div>
    </div>
  );

  return (
    <div
      className={cx('doc-row', {
        'has-children': doc.items?.length > 1,
      })}
      key={doc['@id']}
    >
      {/*Only title and/or description, no files */}
      {!doc.items && <div className="doc">{titleWrapper}</div>}

      {/*Single file*/}
      {doc.items?.length === 1 && (
        <div
          className={cx('doc', {
            'link-to-doc': doc.items[0]?.['@type'] === 'Link',
          })}
        >
          {titleWrapper}
          {doc.items?.length === 1 && (
            <Downloads item={doc.items[0]} titleDoc={doc.title} />
          )}
        </div>
      )}

      {/*Accordion*/}
      {doc.items?.length > 1 && (
        <>
          <div className="accordion-wrapper">
            <div id="headingAccordion" className="accordion-header doc">
              {titleWrapper}
            </div>
            <button
              onClick={() => {
                setItemOpen(itemOpen ? false : true);
              }}
              aria-expanded={itemOpen}
              aria-controls="collapsedContent"
              aria-labelledby={`title-${doc.id}`}
            >
              <Icon
                color="primary"
                icon={itemOpen ? 'it-minus' : 'it-plus'}
                padding={false}
              />
            </button>
          </div>
          <div
            id="collapsedContent"
            className={cx('accordion-content', { open: itemOpen })}
            role="region"
            aria-labelledby="headingAccordion"
          >
            <div className="accordion-inner">
              {doc.items.map((modulo) => (
                <div className="doc modulo" key={modulo['@id']}>
                  <Downloads item={modulo} titleDoc={null} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DocRow;
