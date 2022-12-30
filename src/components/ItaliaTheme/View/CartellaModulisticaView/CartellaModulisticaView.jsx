/**
 * CartellaModulisticaView view component.
 * @module components/theme/View/CartellaModulisticaView
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers';
import {
  getModulisticaItems,
  resetModulisticaItems,
} from 'design-comuni-plone-theme/actions';
import {
  PageHeader,
  RelatedItems,
  CartellaModulisticaAfterContent,
  CartellaModulisticaAfterRelatedItems,
  PagePlaceholderAfterContent,
  TextOrBlocks,
  RelatedItemInEvidence,
  PageMetadata,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

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
  const modulisticaItems = useSelector((state) => state.modulisticaItems);
  const dispatch = useDispatch();
  const intl = useIntl();

  const hasItems = content.items?.length > 0;
  const modulistica_items_url =
    content['@components']['modulistica-items']['@id'];

  useEffect(() => {
    if (hasItems && !modulisticaItems.loading && !modulisticaItems.loaded) {
      dispatch(getModulisticaItems(flattenToAppURL(modulistica_items_url)));
    }
  }, [dispatch, hasItems, modulisticaItems, modulistica_items_url]);

  useEffect(() => {
    return () => dispatch(resetModulisticaItems());
  }, [dispatch]);

  const modulistica = modulisticaItems?.data?.items ?? [];

  return (
    <>
      <div className="container px-4 my-4 cartellamodulistica-view">
        <PageHeader
          content={content}
          imageinheader={!!content.image}
          imageinheader_field="image"
        />

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
                    <div className="accordion items">
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

        <PageMetadata content={content} />
      </div>

      <CartellaModulisticaAfterContent content={content} />
      <PagePlaceholderAfterContent content={content} />

      <RelatedItems content={content} list={content?.servizi_collegati ?? []} />
      <RelatedItemInEvidence content={content} />

      <CartellaModulisticaAfterRelatedItems content={content} />
    </>
  );
};

export default CartellaModulisticaView;
