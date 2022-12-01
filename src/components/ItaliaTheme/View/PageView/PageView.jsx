/**
 * PageView view component.
 * @module components/theme/View/PageView
 */
import React from 'react';
import cx from 'classnames';
import {
  SearchSectionForm,
  PageHeaderNav,
  RelatedItems,
  PagePlaceholderAfterContent,
  PagePlaceholderAfterRelatedItems,
  PagePlaceholderTitle,
  TextOrBlocks,
  RichText,
  RelatedItemInEvidence,
  richTextHasContent,
  PageHeaderTassonomiaArgomenti,
  Sharing,
  Actions,
  PageMetadata,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { defineMessages, useIntl } from 'react-intl';
import { getLayoutFieldname } from '@plone/volto/helpers';
// eslint-disable-next-line import/no-unresolved
import Image from '@plone/volto/components/theme/Image/Image';

import config from '@plone/volto/registry';

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
  modified: {
    id: 'modified',
    defaultMessage: 'Ultimo aggiornamento',
  },
});

const PageView = ({ content, token, location, history }) => {
  const intl = useIntl();
  const layout = content[getLayoutFieldname(content)];

  if (layout === 'document_view') {
    const rightHeaderHasContent =
      content.image?.scales ||
      richTextHasContent(content.info_testata) ||
      content.mostra_navigazione ||
      content?.tassonomia_argomenti?.length > 0 ||
      content.mostra_bottoni_condivisione;

    return (
      <>
        <div id="page-document" className="ui container px-4">
          {/*-----Testata-----*/}
          <div className="PageHeaderWrapper mb-4">
            <div className="row">
              <div
                className={cx('title-description-wrapper', {
                  'col-lg-6': rightHeaderHasContent,
                  'col-lg-12': !rightHeaderHasContent,
                })}
              >
                <PagePlaceholderTitle content={content}>
                  <h1 className="mb-3">{content?.title}</h1>
                </PagePlaceholderTitle>

                <p className="description">{content?.description}</p>
                {content?.ricerca_in_testata && (
                  <SearchSectionForm content={content} />
                )}
              </div>
              {rightHeaderHasContent && (
                <div className="col-lg-4 offset-lg-2">
                  {content.mostra_bottoni_condivisione && (
                    <div className="px-4 mb-4">
                      <Sharing url={content['@id']} title={content.title} />
                      <Actions url={content['@id']} title={content.title} />
                    </div>
                  )}
                  {content.image?.scales && (
                    <div className="header-image px-4 mb-3">
                      <Image
                        image={content.image}
                        alt={content.title}
                        maxSize={300}
                        key={content.image?.download}
                      />
                    </div>
                  )}
                  {richTextHasContent(content.info_testata) && (
                    <div className="header-infos px-4 mb-5">
                      <RichText serif={false} content={content.info_testata} />
                    </div>
                  )}

                  {content.mostra_navigazione && (
                    <PageHeaderNav
                      content={content}
                      title={intl.formatMessage(messages.inThisSection)}
                    />
                  )}
                  {content?.tassonomia_argomenti?.length > 0 && (
                    <div className="px-4">
                      <PageHeaderTassonomiaArgomenti content={content} />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <TextOrBlocks content={content} />

          {content.show_modified && <PageMetadata content={content} />}
        </div>

        <PagePlaceholderAfterContent content={content} />
        <RelatedItems content={content} />
        <RelatedItemInEvidence content={content} />
        <PagePlaceholderAfterRelatedItems content={content} />
      </>
    );
  } else {
    const getViewByLayout = () => config.views.layoutViews[layout] || null;
    const Layout = getViewByLayout();

    return Layout ? (
      <Layout
        content={content}
        location={location}
        token={token}
        history={history}
      />
    ) : null;
  }
};

export default PageView;
