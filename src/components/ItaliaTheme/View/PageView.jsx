/**
 * PageView view component.
 * @module components/theme/View/PageView
 */

import React, { useState, useEffect } from 'react';
import {
  getBlocksFieldname,
  getBlocksLayoutFieldname,
  hasBlocksData,
  getBaseUrl,
} from '@plone/volto/helpers';
import { map } from 'lodash';
import { blocks } from '@italia/config';
import { defineMessages, useIntl } from 'react-intl';
import { useLocation, Link } from 'react-router-dom';
import {
  Container,
  Icon,
  Button,
} from 'design-react-kit/dist/design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { getContent, resetContent } from '@plone/volto/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Portal } from 'react-portal';
import { BodyClass } from '@plone/volto/helpers';
import { SearchUtils } from '@italia/components';

const { getSearchParamsURL } = SearchUtils;

/**
 * PageView view component class.
 * @function PageView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  unknownBlock: {
    id: 'Unknown Block',
    defaultMessage: 'Unknown Block {block}',
  },
  search: {
    id: 'search',
    defaultMessage: 'Cerca',
  },
  searchLabel: {
    id: 'searchContentIn',
    defaultMessage: 'Cerca contenuti in',
  },
});

const PageView = ({ content }) => {
  // const searchResults = useSelector((state) => state.content?.subrequests);
  // const dispatch = useDispatch();

  // // one request is made for every 'unita_amministrativa_responsabile' selected
  // useEffect(() => {
  //   content['unita_amministrativa_responsabile']?.forEach((x) => {
  //     dispatch(getContent(flattenToAppURL(x['@id']), null, x['@id']));
  //   });
  //   return () => {
  //     content['unita_amministrativa_responsabile']?.forEach((x) => {
  //       dispatch(resetContent(x['@id']));
  //     });
  //   };
  // }, [dispatch, content]);

  const blocksFieldname = getBlocksFieldname(content);
  const blocksLayoutFieldname = getBlocksLayoutFieldname(content);
  const intl = useIntl();
  const location = useLocation();

  const [searchableText, setSearchableText] = useState('');
  const doSearch = (e) => {
    if (!e || e.key === 'Enter') {
      if (__CLIENT__)
        window.location.href =
          window.location.origin +
          getSearchParamsURL(searchableText, {}, {}, {}) +
          '&custom_path=' +
          flattenToAppURL(content['@id']);
    }
  };

  return hasBlocksData(content) ? (
    <div id="page-document" className="ui container">
      {/*-----Testata-----*/}
      <Container className="PageHeaderWrapper px-4 mb-4">
        <div className="row">
          <div className="title-description-wrapper col-lg-6">
            <h1 className="mb-3">{content?.title}</h1>
            <p className="description">{content?.description}</p>

            {/* --- Form di ricerca --- */}
            {content?.ricerca_in_testata && (
              <div class="form-group mt-5">
                <div className="input-group mb-3">
                  <input
                    id="search-page-text"
                    type="text"
                    value={searchableText}
                    className="form-control"
                    onChange={(e) => setSearchableText(e.target.value)}
                    onKeyDown={doSearch}
                    placeholder={`${intl.formatMessage(
                      messages.searchLabel,
                    )} "${content.title}"`}
                    aria-label={`${intl.formatMessage(messages.searchLabel)} "${
                      content.title
                    }"`}
                    aria-describedby="search-page-button"
                  />
                  <div className="input-group-append">
                    <Button
                      color="link"
                      onClick={() => doSearch()}
                      title={intl.formatMessage(messages.search)}
                      id="search-page-button"
                      className="pr-2"
                    >
                      <Icon icon="it-search" aria-hidden={true} size="sm" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
            {/* ---- fine form di ricerca ---- */}
          </div>
          <div className="col-lg-4 offset-lg-2">
            {content.info_testata?.data && (
              <div className="header-infos">
                <div
                  dangerouslySetInnerHTML={{
                    __html: content?.info_testata?.data,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Render other blocks in view, skip title and description */}
      {map(content[blocksLayoutFieldname]?.items, (block) => {
        const blockType = content[blocksFieldname]?.[block]?.['@type'];
        if (['title', 'description'].indexOf(blockType) > -1) return null;

        const Block = blocks.blocksConfig[blockType]?.['view'] || null;
        return Block !== null ? (
          <Block
            key={block}
            id={block}
            properties={content}
            data={content[blocksFieldname][block]}
            path={getBaseUrl(location?.pathname || '')}
          />
        ) : (
          <div key={block}>
            {intl.formatMessage(messages.unknownBlock, {
              block: content[blocksFieldname]?.[block]?.['@type'],
            })}
          </div>
        );
      })}
    </div>
  ) : (
    <Container id="page-document">
      <h1 className="documentFirstHeading">{content.title}</h1>
      {content.description && (
        <p className="documentDescription">{content.description}</p>
      )}
      {content.text && (
        <div
          dangerouslySetInnerHTML={{
            __html: content.text.data,
          }}
        />
      )}
    </Container>
  );
};

export default PageView;
