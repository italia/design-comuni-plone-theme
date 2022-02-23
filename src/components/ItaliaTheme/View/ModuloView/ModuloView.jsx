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
} from '@italia/components/ItaliaTheme/View';

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

        <ModuloFiles content={content} />

        <ModuloText content={content} />
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
