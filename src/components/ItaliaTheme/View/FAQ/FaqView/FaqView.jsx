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
} from '@italia/components/ItaliaTheme/View';

/**
 * FaqView view component class.
 * @function FaqView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const FaqView = ({ content }) => {
  return (
    <div id="page-document">
      <div className="ui container">
        <SkipToMainContent />
        <PageHeader
          content={content}
          showdates={true}
          showtassonomiaargomenti={true}
        />
        <TextOrBlocks content={content} />

        <PaginaArgomentoPlaceholderAfterContent content={content} />
      </div>
      <RelatedItems content={content} />
      <RelatedItemInEvidence content={content} />
    </div>
  );
};

export default FaqView;
