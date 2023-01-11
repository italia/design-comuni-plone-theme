/**
 * FaqView view component.
 * @module components/theme/View/FaqView/FaqView
 */

import React from 'react';
import {
  PaginaArgomentoPlaceholderAfterContent,
  TextOrBlocks,
  RelatedItems,
  RelatedItemInEvidence,
  SkipToMainContent,
  PageHeader,
  PageMetadata,
  FaqPlaceholderAfterContent,
  FaqPlaceholderAfterRelatedItems,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

/**
 * FaqView view component class.
 * @function FaqView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const FaqView = ({ content }) => {
  return (
    <div id="page-document">
      <div className="ui container px-4">
        <SkipToMainContent />
        <PageHeader
          content={content}
          showdates={true}
          showtassonomiaargomenti={true}
        />
        <TextOrBlocks content={content} />

        <PaginaArgomentoPlaceholderAfterContent content={content} />

        <PageMetadata content={content} />
      </div>

      <FaqPlaceholderAfterContent content={content} />

      <RelatedItems content={content} />
      <RelatedItemInEvidence content={content} />

      <FaqPlaceholderAfterRelatedItems content={content} />
    </div>
  );
};

export default FaqView;
