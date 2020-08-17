/**
 * PageView view component.
 * @module components/theme/View/PageView
 */

import React from 'react';
import {
  getBlocksFieldname,
  getBlocksLayoutFieldname,
  hasBlocksData,
  getBaseUrl,
} from '@plone/volto/helpers';
import { map } from 'lodash';
import { blocks } from '@italia/config';
import {
  SearchSectionForm,
  PageHeaderNav,
} from '@italia/components/ItaliaTheme/View';
import { defineMessages, useIntl } from 'react-intl';
import { useLocation } from 'react-router-dom';
import { Container } from 'design-react-kit/dist/design-react-kit';

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
  inThisSection: {
    id: 'In this section',
    defaultMessage: 'In questa sezione',
  },
});

const PageView = ({ content }) => {
  const blocksFieldname = getBlocksFieldname(content);
  const blocksLayoutFieldname = getBlocksLayoutFieldname(content);
  const intl = useIntl();
  const location = useLocation();

  return hasBlocksData(content) ? (
    <div id="page-document" className="ui container">
      {/*-----Testata-----*/}
      <Container className="PageHeaderWrapper px-3 px-md-4 mb-4">
        <div className="row">
          <div className="title-description-wrapper col-lg-6">
            <h1 className="mb-3">{content?.title}</h1>
            <p className="description">{content?.description}</p>
            {content?.ricerca_in_testata && (
              <SearchSectionForm content={content} />
            )}
          </div>
          <div className="col-lg-4 offset-lg-2">
            {content.info_testata?.data?.replace(/<[^>]+>/g, '') && (
              <div className="header-infos px-4 mb-5">
                <div
                  dangerouslySetInnerHTML={{
                    __html: content?.info_testata?.data,
                  }}
                />
              </div>
            )}
            {content.mostra_navigazione && (
              <PageHeaderNav
                content={content}
                title={intl.formatMessage(messages.inThisSection)}
              />
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
