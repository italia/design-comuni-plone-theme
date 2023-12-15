import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { ConditionalLink, UniversalLink } from '@plone/volto/components';
import cx from 'classnames';
import {
  Row,
  Col,
  Chip,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardReadMore,
} from 'design-react-kit';

import { flattenToAppURL } from '@plone/volto/helpers';

import { getCategory } from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/Commons/utils';
import {
  CardCategory,
  getItemIcon,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import {
  viewDate,
  getComponentWithFallback,
} from 'design-comuni-plone-theme/helpers';
import config from '@plone/volto/registry';

const Body = (props) => {
  const { content, block } = props;
  const intl = useIntl();
  const Image = config.getComponent({ name: 'Image' }).component;
  const icon = getItemIcon(content);

  const { show_type = true, show_section } = block;
  const category = getCategory(content, show_type, show_section, props);

  const BlockExtraTags = getComponentWithFallback({
    name: 'BlockExtraTags',
    dependencies: ['HighlightedContent', content['@type']],
  }).component;

  return (
    <div className={`${block.bg_color ? 'bg-' + block.bg_color : ''}`}>
      <Row>
        {(content.preview_image || content.image) && (
          <Col lg={{ size: 6, offset: 1, order: 2 }}>
            <Image
              item={content}
              imageField={content.preview_image ? 'preview_image' : 'image'}
              alt=""
              className={cx('item-image', {
                'natural-image-size': block.natural_image_size,
              })}
              role={null}
              responsive={true}
              sizes="(max-width:768px) 90vw, (max-width:1024px) 450px, 560px"
            />
          </Col>
        )}
        <Col lg={{ size: 5, order: 1 }}>
          <Card>
            <CardBody className="pb-2">
              <CardCategory
                date={
                  content.effective &&
                  block.show_date !== false &&
                  viewDate(intl.locale, content.effective, 'll')
                }
                iconName={icon}
              >
                {category}
              </CardCategory>
              <CardTitle tag="h2">
                <ConditionalLink condition={!!content['@id']} item={content}>
                  {content.title}
                </ConditionalLink>
              </CardTitle>
              <CardText>{content.description}</CardText>
              <BlockExtraTags {...props} item={content} itemIndex={0} />
              {content.tassonomia_argomenti &&
                content.tassonomia_argomenti.length > 0 && (
                  <>
                    {content.tassonomia_argomenti.map((argomento, idx) => (
                      <Chip
                        simple
                        color="primary"
                        key={`${idx} ${argomento['@id']}`}
                        className="me-2"
                      >
                        <ConditionalLink
                          condition={!!argomento['@id']}
                          item={argomento}
                          className="chip-label text-decoration-none"
                        >
                          {argomento.title}
                        </ConditionalLink>
                      </Chip>
                    ))}
                  </>
                )}

              {block.moreHref && (
                <CardReadMore
                  tag={UniversalLink}
                  iconName="it-arrow-right"
                  text={block.moreTitle || 'Vedi tutte le notizie'}
                  href={flattenToAppURL(block.moreHref)}
                />
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Body.propTypes = {
  content: PropTypes.objectOf(PropTypes.any),
  pathname: PropTypes.string,
};

export default Body;
