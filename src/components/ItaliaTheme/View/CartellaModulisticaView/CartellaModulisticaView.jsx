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
import DocRow from './DocRow';

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
              return section['@type'] === 'Document' ? (
                <div className="documents-section">
                  <h3>{section.title}</h3>
                  {Object.keys(section.blocks)?.length > 0 && (
                    <TextOrBlocks content={section} />
                  )}
                  {section.items?.length > 0 && (
                    <>
                      {section.items.map((doc) => (
                        <DocRow doc={doc} />
                      ))}
                    </>
                  )}
                </div>
              ) : (
                <DocRow doc={section} />
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
