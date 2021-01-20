/**
 * PaginaArgomentoView view component.
 * @module components/theme/View/PaginaArgomentoView/PaginaArgomentoView
 */

import React, { useEffect } from 'react';

import { UniversalLink } from '@plone/volto/components';
import {
  Card,
  CardBody,
  CardText,
} from 'design-react-kit/dist/design-react-kit';
import { useDispatch, useSelector } from 'react-redux';
import { Portal } from 'react-portal';
import {
  BodyClass,
  flattenToAppURL,
  hasBlocksData,
} from '@plone/volto/helpers';
import { getContent, resetContent } from '@plone/volto/actions';
import { CardCategory } from '@italia/components/ItaliaTheme';
import {
  ArgumentIcon,
  PaginaArgomentoPlaceholderAfterContent,
  TextOrBlocks,
  RichText,
  PaginaArgomentoViewNoBlocks,
} from '@italia/components/ItaliaTheme/View';
import Image from '@plone/volto/components/theme/Image/Image';

/**
 * PaginaArgomentoView view component class.
 * @function PaginaArgomentoView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const PaginaArgomentoView = ({ content }) => {
  const searchResults = useSelector((state) => state.content?.subrequests);
  const dispatch = useDispatch();

  // one request is made for every 'unita_amministrative_responsabili' selected
  useEffect(() => {
    if (content?.unita_amministrative_responsabili?.length > 0) {
      content.unita_amministrative_responsabili.forEach((x) => {
        dispatch(getContent(flattenToAppURL(x['@id']), null, x['@id']));
      });
    }

    return () => {
      if (content?.unita_amministrative_responsabili?.length > 0) {
        content.unita_amministrative_responsabili.forEach((x) => {
          dispatch(resetContent(x['@id']));
        });
      }
    };
  }, [dispatch, content]);

  return hasBlocksData(content) ? (
    <div id="page-document" className="ui container">
      <div className="ArgomentoTitleWrapper mb-5">
        <div className="title-description-wrapper col-lg-6">
          <ArgumentIcon icon={content.icona} />
          <h1 className="mb-3">{content?.title}</h1>
          <p className="description">{content?.description}</p>
        </div>
        <div className="col-lg-4 offset-lg-2">
          <RichText serif={false} content={content.ulteriori_informazioni} />

          {content?.unita_amministrative_responsabili?.length > 0 &&
            content?.unita_amministrative_responsabili?.map((u, index) => {
              return (
                <div className="row mb-3" key={index}>
                  <div className="w-100">
                    <Card className={'listing-item card-bg border-left-card'}>
                      <div className="d-flex">
                        <CardBody className="">
                          <CardCategory>
                            <span className="text font-weight-bold">
                              <UniversalLink href={flattenToAppURL(u['@id'])}>
                                {u.title || u.id}
                              </UniversalLink>
                            </span>
                          </CardCategory>
                          <CardText>
                            {searchResults[u['@id']]?.data?.street}
                          </CardText>
                        </CardBody>
                        {searchResults[u['@id']]?.data?.image && (
                          <div className="image-container mr-3">
                            <Image
                              image={searchResults[u['@id']].data?.image}
                              alt={searchResults[u['@id'].data?.image_caption]}
                              title={
                                searchResults[u['@id'].data?.image_caption]
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
                  <Image
                    image={content.image}
                    alt={content.caption ?? content.title}
                    title={content.caption ?? content.title}
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

      <TextOrBlocks content={content} />

      <PaginaArgomentoPlaceholderAfterContent content={content} />
    </div>
  ) : (
    <PaginaArgomentoViewNoBlocks content={content} />
  );
};

export default PaginaArgomentoView;
