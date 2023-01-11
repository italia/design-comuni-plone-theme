/**
 * ModuloView view component.
 * @module components/theme/View/ModuloView
 */

import React from 'react';

import {
  PageHeader,
  RelatedItems,
  PagePlaceholderAfterContent,
  ModuloFiles,
  ModuloText,
  ModuloPlaceholderAfterContent,
  ModuloPlaceholderAfterRelatedItems,
  RelatedItemInEvidence,
  ContentTypeViewSections,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

export const ModuloViewSectionsOrder = [
  { /* FILES */ component: ModuloFiles },
  { /* TESTO */ component: ModuloText },
];

/**
 * ModuloView view component class.
 * @function ModuloView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const ModuloView = ({ content }) => {
  return (
    <>
      <div className="container px-4 my-4 modulo-view">
        <PageHeader content={content} />

        {/* SEZIONI */}
        <ContentTypeViewSections
          content={content}
          defaultSections={ModuloViewSectionsOrder}
        />
      </div>

      <ModuloPlaceholderAfterContent content={content} />
      <PagePlaceholderAfterContent content={content} />

      <RelatedItems content={content} />
      <RelatedItemInEvidence content={content} />

      <ModuloPlaceholderAfterRelatedItems content={content} />
    </>
  );
};

export default ModuloView;
