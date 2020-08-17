/**
 * PaginaArgomentoView view component.
 * @module components/theme/View/PaginaArgomentoView
 */

import React, { useEffect } from 'react';
import PaginaArgomentoViewNoBlocks from './PaginaArgomentoViewNoBlocks';
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
  Card,
  CardBody,
  CardText,
  CardCategory,
} from 'design-react-kit/dist/design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { getContent, resetContent } from '@plone/volto/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Portal } from 'react-portal';
import { BodyClass } from '@plone/volto/helpers';

/**
 * PaginaArgomentoView view component class.
 * @function PaginaArgomentoView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  unknownBlock: {
    id: 'Unknown Block',
    defaultMessage: 'Unknown Block {block}',
  },
});

const PaginaArgomentoView = ({ content }) => {
  const searchResults = useSelector((state) => state.content?.subrequests);
  const dispatch = useDispatch();

  // one request is made for every 'unita_amministrativa_responsabile' selected
  useEffect(() => {
    content['unita_amministrativa_responsabile']?.forEach((x) => {
      dispatch(getContent(flattenToAppURL(x['@id']), null, x['@id']));
    });
    return () => {
      content['unita_amministrativa_responsabile']?.forEach((x) => {
        dispatch(resetContent(x['@id']));
      });
    };
  }, [dispatch, content]);

  const blocksFieldname = getBlocksFieldname(content);
  const blocksLayoutFieldname = getBlocksLayoutFieldname(content);
  const intl = useIntl();
  const location = useLocation();
  return hasBlocksData(content) ? (
    <div id="page-document" className="ui container">
      <div className="ArgomentoTitleWrapper mb-5">
        <div className="title-description-wrapper col-lg-6">
          <h1 className="mb-3">{content?.title}</h1>
          <p className="description">{content?.description}</p>
        </div>
        <div className="col-lg-4 offset-lg-2">
          <div dangerouslySetInnerHTML={{ __html: content?.box_aiuto?.data }} />

          {content?.unita_amministrativa_responsabile?.length > 0 &&
            content?.unita_amministrativa_responsabile?.map((u, index) => {
              return (
                <div className="row mb-3" key={index}>
                  <div className="w-100">
                    <Card className={'listing-item card-bg border-left-card'}>
                      <div className="d-flex">
                        <CardBody className="">
                          <CardCategory>
                            <span className="text font-weight-bold">
                              <Link to={flattenToAppURL(u['@id'])}>
                                {u.title || u.id}
                              </Link>
                            </span>
                          </CardCategory>
                          <CardText>
                            {searchResults[u['@id']]?.data?.street}
                          </CardText>
                        </CardBody>
                        {searchResults[u['@id']]?.data?.image && (
                          <div className="image-container mr-3">
                            <img
                              alt={searchResults[u['@id']]?.data?.image_caption}
                              src={flattenToAppURL(
                                searchResults[u['@id']]?.data?.image.scales
                                  .preview.download,
                              )}
                              title={
                                searchResults[u['@id']]?.data?.image_caption
                              }
                            />
                          </div>
                        )}
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          {content?.image ? (
            <>
              <Portal
                node={
                  __CLIENT__ && document.getElementById('portal-header-image')
                }
              >
                <div>
                  <img
                    src={flattenToAppURL(content?.image?.download)}
                    alt={content?.caption || content?.title}
                    title={content?.caption || content?.title}
                  />
                </div>
              </Portal>
              <BodyClass className="has-image" />
            </>
          ) : (
            ''
          )}
        </div>
      </div>

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
    <PaginaArgomentoViewNoBlocks content={content} />
  );
};

export default PaginaArgomentoView;
