/**
 * PageView view component.
 * @module components/theme/View/PageView
 */

import React from 'react';

import {
  SearchSectionForm,
  PageHeaderNav,
  RelatedItems,
  PagePlaceholderAfterContent,
  TextOrBlocks,
  RichText,
} from '@italia/components/ItaliaTheme/View';
import { defineMessages, useIntl } from 'react-intl';
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
  const intl = useIntl();

  return (
    <>
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
                  <RichText serif={false} content={content.info_testata.data} />
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

        <TextOrBlocks content={content} />
      </div>

      <PagePlaceholderAfterContent content={content} />
      <RelatedItems content={content} />
    </>
  );
};

export default PageView;
