/**
 * CartellaModulisticaView view component.
 * @module components/theme/View/CartellaModulisticaView
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import {
  PageHeader,
  RelatedItems,
  PagePlaceholderAfterContent,
  TextOrBlocks,
  DownloadFileFormat,
} from '@italia/components/ItaliaTheme/View';
import cx from 'classnames';

/**
 * CartellaModulisticaView view component class.
 * @function CartellaModulisticaView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const CartellaModulisticaView = ({ content }) => {
  const modulistica_key = 'modulistica';
  const locationContent = useSelector((state) => state.content.subrequests);
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      content?.items?.length > 0 &&
      !locationContent[modulistica_key]?.loaded
    ) {
      const modulistica_items_url =
        content['@components']['modulistica-items']['@id'];

      dispatch(getContent(modulistica_items_url, null, modulistica_key));
      return () => dispatch(resetContent(modulistica_key));
    }
  }, []);

  const modulistica = locationContent[modulistica_key]?.data?.items ?? [];

  return (
    <>
      <div className="container px-4 my-4 cartellamodulistica-view">
        <PageHeader content={content} />
        <TextOrBlocks content={content} />
        {modulistica.length > 0 && (
          <section className="modulistica">
            {modulistica.map((section) => {
              return (
                <div className="documents-section">
                  <h3>{section.title}</h3>
                  {Object.keys(section.blocks)?.length > 0 && (
                    <TextOrBlocks content={section} />
                  )}
                  {section.items?.length > 0 && (
                    <div className="documents">
                      {section.items.map((doc) => (
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
                                {doc.items?.length > 1 &&
                                  ` - ${doc.items[0]?.title}`}
                              </Link>
                            </div>
                            {doc.items?.length > 0 && (
                              <div className="downloads">
                                <DownloadFileFormat
                                  file={doc.items[0]?.file_principale}
                                />
                                <DownloadFileFormat
                                  file={doc.items[0]?.formato_alternativo_1}
                                />
                                <DownloadFileFormat
                                  file={doc.items[0]?.formato_alternativo_2}
                                />
                              </div>
                            )}
                          </div>
                          {doc.items?.length > 1 && (
                            <>
                              {doc.items
                                .filter((doc, index) => index > 0)
                                .map((modulo) => (
                                  <div class="doc modulo">
                                    <div className="title">{modulo.title}</div>
                                    <div className="downloads">
                                      <DownloadFileFormat
                                        file={modulo?.file_principale}
                                      />
                                      <DownloadFileFormat
                                        file={modulo?.formato_alternativo_1}
                                      />
                                      <DownloadFileFormat
                                        file={modulo?.formato_alternativo_2}
                                      />
                                    </div>
                                  </div>
                                ))}
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}
      </div>

      <PagePlaceholderAfterContent content={content} />
      <RelatedItems content={content} />
    </>
  );
};

export default CartellaModulisticaView;
