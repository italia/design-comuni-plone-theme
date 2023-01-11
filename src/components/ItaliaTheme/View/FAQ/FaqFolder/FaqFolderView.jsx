/* eslint-disable react-hooks/exhaustive-deps */
/**
 * FaqFolderView view component.
 * @module components/theme/View/FaqFolderView
 */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { defineMessages, useIntl } from 'react-intl';
import { Container, Spinner } from 'design-react-kit';
import {
  PageHeader,
  RelatedItems,
  FaqFolderPlaceholderAfterContent,
  FaqFolderPlaceholderAfterRelatedItems,
  TextOrBlocks,
  RelatedItemInEvidence,
  PageMetadata,
  FaqFolderSearchBar,
  FaqFolderTree,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { useDebouncedEffect } from 'design-comuni-plone-theme/helpers';
import { resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';

import { GET_CONTENT } from '@plone/volto/constants/ActionTypes';

const messages = defineMessages({
  no_results: {
    id: 'Faq Folder: Nessun risultato trovato',
    defaultMessage: 'Non ho trovato la risposta che cercavi',
  },
});

/**
 * FaqFolderView view component class.
 * @function FaqFolderView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const FaqFolderView = ({ content }) => {
  const intl = useIntl();

  const FAQ_FOLDER_KEY = 'FAQ_FOLDER';
  const structure_url = content?.['@components']?.['faq-structure']?.['@id'];
  const dispatch = useDispatch();
  //const intl = useIntl();

  const faq_structure = useSelector(
    (state) => state.content.subrequests?.[FAQ_FOLDER_KEY],
  );
  const [searchableText, setSearchableText] = useState('');

  const doSearch = () => {
    const url =
      structure_url +
      (searchableText ? '?SearchableText=' + searchableText + '*' : '');

    const dispatch_obj = {
      type: GET_CONTENT,
      subrequest: FAQ_FOLDER_KEY,
      request: {
        op: 'get',
        path: `${flattenToAppURL(url)}`,
      },
    };
    dispatch(dispatch_obj);

    return () => dispatch(resetContent(FAQ_FOLDER_KEY));
  };

  useEffect(() => {
    if (structure_url) {
      doSearch();
    }
  }, [structure_url]);

  useDebouncedEffect(
    () => {
      return doSearch();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    600,
    [searchableText],
  );

  return (
    <>
      {/* -------HEADER------- */}
      <Container className="px-4 my-4 faqfolder-view">
        <PageHeader
          content={content}
          imageinheader={!!content.image}
          imageinheader_field="image"
        />
      </Container>

      {/* -------SEARCH------- */}
      <FaqFolderSearchBar
        searchableText={searchableText}
        setSearchableText={setSearchableText}
      />

      {/* -------CONTENT------- */}
      <Container className="px-4">
        <TextOrBlocks content={content} />

        {faq_structure && (
          <>
            {faq_structure?.loaded &&
              searchableText?.length > 0 &&
              faq_structure.data?.items?.length === 0 && (
                <>{intl.formatMessage(messages.no_results)}</>
              )}

            {faq_structure?.loading && (
              <div className="mt-5 mb-5 loading">
                <Spinner active double={false} small={false} tag="div" />
              </div>
            )}

            {!faq_structure?.loading && faq_structure.data?.items?.[0] && (
              <FaqFolderTree tree={faq_structure.data.items[0]} />
            )}
          </>
        )}

        <PageMetadata content={content} />
      </Container>

      {/* -------BOTTOM------- */}

      <FaqFolderPlaceholderAfterContent content={content} />

      <RelatedItems content={content} list={content?.servizi_collegati ?? []} />
      <RelatedItemInEvidence content={content} />

      <FaqFolderPlaceholderAfterRelatedItems content={content} />
    </>
  );
};

export default FaqFolderView;
