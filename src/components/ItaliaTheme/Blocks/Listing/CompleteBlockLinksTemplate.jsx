/*
 * Blocco link completo
 */
import React from 'react';
import PropTypes from 'prop-types';
import { UniversalLink } from '@plone/volto/components';
import cx from 'classnames';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from 'design-react-kit';
import {
  ListingLinkMore,
  ListingImage,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import {
  getComponentWithFallback,
  contentHasImage,
} from 'design-comuni-plone-theme/helpers';
import { isInternalURL } from '@plone/volto/helpers/Url/Url';

import config from '@plone/volto/registry';

const CompleteBlockLinksTemplate = (props) => {
  const {
    items,
    title,
    isEditMode,
    linkAlign,
    linkTitle,
    linkHref,
    // show_block_bg,
    show_description = true,
    id_lighthouse,
    linkmore_id_lighthouse,
    titleLine,
  } = props;
  return (
    <div className="complete-block-links-template">
      <Container className="px-4">
        {title && (
          <Row>
            <Col>
              <h2
                className={cx('mb-4', {
                  'title-bottom-line': titleLine,
                })}
              >
                {title}
              </h2>
            </Col>
          </Row>
        )}
        <Row className="items">
          {items.map((item, index) => {
            const hasImage = contentHasImage(item);
            const BlockExtraTags = getComponentWithFallback({
              name: 'BlockExtraTags',
              dependencies: ['CompleteBlockLinksTemplate', item['@type']],
            }).component;

            return (
              <Col md="6" lg="3" key={item['@id']} className="col-item">
                <Card
                  color=""
                  className="card-bg rounded"
                  noWrapper={false}
                  tag="div"
                >
                  <UniversalLink
                    item={!isEditMode ? item : null}
                    href={isEditMode ? '#' : null}
                    data-element={id_lighthouse}
                    className={'no-external-if-link'}
                  >
                    <div className="d-flex">
                      {hasImage && (
                        <div className="image-container">
                          <ListingImage
                            item={item}
                            className=""
                            sizes="60px"
                            alt={item.title}
                          />
                        </div>
                      )}
                      <div>
                        <CardBody>
                          <CardTitle tag="h3" className="text-secondary">
                            {item.title}
                            {item['@type'] === 'Link' &&
                              !isInternalURL(
                                item.remoteUrl || item.getRemoteUrl,
                              ) &&
                              config.settings.siteProperties
                                .markSpecialLinks && (
                                <Icon
                                  icon="it-external-link"
                                  title={title}
                                  size="xs"
                                  className="ms-1 align-sub external-link"
                                />
                              )}
                          </CardTitle>
                          {show_description && (
                            <CardText tag="p" className="text-secondary">
                              {item.description}
                            </CardText>
                          )}
                          <BlockExtraTags
                            {...props}
                            item={item}
                            itemIndex={index}
                          />
                        </CardBody>
                      </div>
                    </div>
                  </UniversalLink>
                </Card>
              </Col>
            );
          })}
        </Row>
        <ListingLinkMore
          title={linkTitle}
          href={linkHref}
          linkAlign={linkAlign}
          className="my-4"
          linkmoreIdLighthouse={linkmore_id_lighthouse}
        />
      </Container>
    </div>
  );
};

CompleteBlockLinksTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default CompleteBlockLinksTemplate;
