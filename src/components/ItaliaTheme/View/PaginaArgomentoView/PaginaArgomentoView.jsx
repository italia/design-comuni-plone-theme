/**
 * PaginaArgomentoView view component.
 * @module components/theme/View/PaginaArgomentoView/PaginaArgomentoView
 */

import React from 'react';
import { useLocation } from 'react-router-dom';
import { Portal } from 'react-portal';
import cx from 'classnames';

import { UniversalLink } from '@plone/volto/components';
import { Card, CardBody, CardText } from 'design-react-kit';
import {
  BodyClass,
  flattenToAppURL,
  hasBlocksData,
} from '@plone/volto/helpers';
import {
  CardCategory,
  Breadcrumbs,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import {
  ArgumentIcon,
  PaginaArgomentoPlaceholderAfterContent,
  PaginaArgomentoPlaceholderAfterRelatedItems,
  TextOrBlocks,
  RichText,
  PaginaArgomentoViewNoBlocks,
  RelatedItems,
  RelatedItemInEvidence,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import config from '@plone/volto/registry';

/**
 * PaginaArgomentoView view component class.
 * @function PaginaArgomentoView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const PaginaArgomentoView = ({ content }) => {
  const Image = config.getComponent({ name: 'Image' }).component;
  const location = useLocation();

  const rightHeaderHasContent =
    richTextHasContent(content.ulteriori_informazioni) ||
    content?.unita_amministrative_responsabili?.length > 0;

  return hasBlocksData(content) ? (
    <div id="page-document">
      <div className="ui container px-4">
        <div className="ArgomentoTitleWrapper rounded shadow mt-5  mb-5">
          <div
            className={cx('title-description-wrapper', {
              'col-lg-6': rightHeaderHasContent,
              'col-lg-12': !rightHeaderHasContent,
            })}
          >
            <Breadcrumbs pathname={location.pathname} />

            <ArgumentIcon icon={content.icona} title={content.title} />
            <h1 className="mb-3" data-element="page-name">
              {content?.title}
            </h1>
            <p className="description">{content?.description}</p>
          </div>
          {rightHeaderHasContent && (
            <div className="col-lg-4 offset-lg-2">
              <RichText serif={false} data={content.ulteriori_informazioni} />

              {content?.unita_amministrative_responsabili?.length > 0 &&
                content?.unita_amministrative_responsabili?.map((u, index) => {
                  const uo_object = u;
                  let alt = u.title;
                  if (
                    uo_object?.image_scales?.preview_image?.length > 0 &&
                    uo_object?.preview_caption
                  ) {
                    alt = uo_object?.preview_caption;
                  } else if (
                    uo_object?.image_scales?.image.length > 0 &&
                    uo_object?.image_caption
                  ) {
                    alt = uo_object?.image_caption;
                  }

                  return (
                    <div className="row mb-3" key={index}>
                      <div className="w-100">
                        <Card
                          className={
                            'listing-item card-bg border-left-card card-small'
                          }
                        >
                          <div className="d-flex">
                            <CardBody className="">
                              <CardCategory>
                                <span className="text fw-bold">
                                  <UniversalLink
                                    href={flattenToAppURL(u['@id'])}
                                  >
                                    {u.title || u.id}
                                  </UniversalLink>
                                </span>
                              </CardCategory>
                              <CardText>
                                {uo_object?.sede?.[0]?.street}
                              </CardText>
                            </CardBody>
                            {uo_object &&
                              (uo_object.image_scales.image.length > 0 ||
                                uo_object.image_scales.preview_image.length >
                                  0) && (
                                <div className="image-container me-3">
                                  <Image
                                    item={uo_object}
                                    alt=""
                                    title={alt}
                                    responsive={false}
                                    sizes="100px"
                                  />
                                </div>
                              )}
                          </div>
                        </Card>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
          {content?.image && (
            <>
              <Portal
                node={
                  __CLIENT__ && document.getElementById('portal-header-image')
                }
              >
                <div>
                  <Image
                    item={content}
                    alt={content.caption ?? content.title}
                    title={content.caption ?? content.title}
                    key={content.image.download}
                    responsive={true}
                    sizes="100vw"
                  />
                </div>
              </Portal>
              <BodyClass className="has-image" />
            </>
          )}
        </div>

        <TextOrBlocks content={content} />

        <PaginaArgomentoPlaceholderAfterContent content={content} />
      </div>
      <RelatedItems content={content} />
      <RelatedItemInEvidence content={content} />
      <PaginaArgomentoPlaceholderAfterRelatedItems content={content} />
    </div>
  ) : (
    <PaginaArgomentoViewNoBlocks content={content} />
  );
};

export default PaginaArgomentoView;
