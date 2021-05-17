/**
 * CartellaModulisticaView view component.
 * @module components/theme/View/CartellaModulisticaView
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import {
  PageHeader,
  RelatedItems,
  PagePlaceholderAfterContent,
  TextOrBlocks,
  RelatedItemInEvidence,
} from '@italia/components/ItaliaTheme/View';

import DocRow from './DocRow';

const messages = defineMessages({
  formati_scaricabili: {
    id: 'cartellamodulistica_formati_scaricabili',
    defaultMessage: 'Formati scaricabili',
  },
});

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
  const intl = useIntl();
  useEffect(() => {
    if (
      content?.items?.length > 0 &&
      !locationContent[modulistica_key]?.loaded
    ) {
      const modulistica_items_url =
        content['@components']['modulistica-items']['@id'];

      dispatch(
        getContent(
          flattenToAppURL(modulistica_items_url),
          null,
          modulistica_key,
        ),
      );
      return () => dispatch(resetContent(modulistica_key));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <div className="documents-section" key={section['@id']}>
                  {/* <h3>{section.title}</h3> */}

                  {Object.keys(section.blocks)?.length > 0 && (
                    <TextOrBlocks content={section} />
                  )}

                  {section.items?.length > 0 && (
                    <div className="items">
                      <div className="items-header">
                        <div></div>
                        <div className="downloads">
                          {intl.formatMessage(messages.formati_scaricabili)}
                        </div>
                      </div>
                      {section.items.map((doc) => (
                        <DocRow doc={doc} key={doc['@id']} />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="document-row-section" key={section['@id']}>
                  <DocRow doc={section} />
                </div>
              );
            })}
          </section>
        )}
      </div>
      <PagePlaceholderAfterContent content={content} />

      <RelatedItems content={content} list={content?.servizi_collegati ?? []} />

      <RelatedItemInEvidence content={content} />
    </>
  );
};

export default CartellaModulisticaView;
