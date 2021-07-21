/* eslint-disable react-hooks/exhaustive-deps */
/**
 * FaqFolderView view component.
 * @module components/theme/View/FaqFolderView
 */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Container } from 'design-react-kit/dist/design-react-kit';
import {
  PageHeader,
  RelatedItems,
  FaqFolderPlaceholderAfterContent,
  TextOrBlocks,
  RelatedItemInEvidence,
  PageMetadata,
  FaqFolderSearchBar,
  FaqFolderTree,
} from '@italia/components/ItaliaTheme/View';
import { useDebouncedEffect } from '@italia/helpers';
import { searchContent, resetSearchContent } from '@plone/volto/actions';
import { getBaseUrl, flattenToAppURL } from '@plone/volto/helpers';

/**
 * FaqFolderView view component class.
 * @function FaqFolderView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const FaqFolderView = ({ content }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = getBaseUrl(location?.pathname || '');
  //const intl = useIntl();

  const searchResults = useSelector(
    (state) => state.search.subrequests['faq_folder'],
  );
  const [searchableText, setSearchableText] = useState('');
  const [faqFolderTree, setFaqFolderTree] = useState({});

  const doSearch = () => {
    dispatch(
      searchContent(
        pathname,
        {
          'path.depth': 3,
          fullobjects: true,
          SearchableText: searchableText || undefined,
        },
        'faq_folder',
      ),
    );
    return () => {
      dispatch(resetSearchContent('faq_folder'));
    };
  };

  useEffect(() => {
    return doSearch();
  }, [pathname]);

  useDebouncedEffect(
    () => {
      return doSearch();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    600,
    [searchableText],
  );

  const addToTree = (tree, item) => {
    let added = false;
    tree.res_items.forEach((r) => {
      if (
        flattenToAppURL(item.parent['@id']).indexOf(
          flattenToAppURL(r['@id']),
        ) >= 0
      ) {
        r = addToTree(r, item);
        added = true;
      }
    });
    if (!added) {
      tree.res_items.push({ ...item, res_items: [] });
    }

    return tree;
  };

  useEffect(() => {
    let tree = { ...content, res_items: [] };
    const items = (searchResults?.items || [])
      .filter(
        (r) => flattenToAppURL(r['@id']) !== flattenToAppURL(content['@id']),
      )
      .sort((a, b) => {
        return flattenToAppURL(a['@id']) > flattenToAppURL(b['@id']) ? 1 : -1;
      });

    if (items.length > 0) {
      items.forEach((r) => {
        tree = addToTree(tree, r);
      });

      setFaqFolderTree(tree);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResults]);

  return (
    <>
      {/* -------HEADER------- */}
      <Container className="px-4 my-4 faqfolder-view">
        <PageHeader
          content={content}
          imageinheader={true}
          imageinheader_field="image"
        />
      </Container>

      {/* -------SEARCH------- */}
      <FaqFolderSearchBar setSearchableText={setSearchableText} />

      {/* -------CONTENT------- */}
      <Container className="px-4">
        <TextOrBlocks content={content} />
        <FaqFolderTree tree={faqFolderTree} />
        {content.show_modified && <PageMetadata content={content} />}
      </Container>

      {/* -------BOTTOM------- */}

      <FaqFolderPlaceholderAfterContent content={content} />

      <RelatedItems content={content} list={content?.servizi_collegati ?? []} />

      <RelatedItemInEvidence content={content} />
    </>
  );
};

export default FaqFolderView;
