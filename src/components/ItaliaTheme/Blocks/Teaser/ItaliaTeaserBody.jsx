import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import { defineMessages, useIntl } from 'react-intl';
import imageBlockSVG from '@plone/volto/components/manage/Blocks/Image/block-image.svg';
import { isInternalURL, flattenToAppURL } from '@plone/volto/helpers';
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
import {
  CardCategory,
  getItemIcon,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import {
  viewDate,
  getComponentWithFallback,
} from 'design-comuni-plone-theme/helpers';
import { getCategory } from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/Commons/utils';
import { UniversalLink, ConditionalLink } from '@plone/volto/components';
import cx from 'classnames';
import config from '@plone/volto/registry';

const messages = defineMessages({
  PleaseChooseContent: {
    id: 'Please choose an existing content as source for this element',
    defaultMessage:
      'Please choose an existing content as source for this element',
  },
});

const ALIGNMENTS = {
  left: 1,
  right: 2,
};

const alignmentHelper = (align) => {
  const alignment = ALIGNMENTS[align];
  if (alignment === 1) {
    return {
      imageAlignment: { order: alignment, offset: 0, size: 6 },
      contentAlignment: { order: 2, offset: 0, size: 6 },
    };
  } else if (alignment === 2) {
    return {
      imageAlignment: { order: alignment, offset: 1, size: 6 },
      contentAlignment: { order: 1, offset: 0, size: 5 },
    };
  }
};

const ItaliaTeaserBody = (props) => {
  const { className, data, isEditMode, style } = props;
  const intl = useIntl();
  const content = data.href?.[0];
  const image = data.preview_image?.[0];
  const Image = config.getComponent('Image').component;
  const icon = getItemIcon(content);
  const category = getCategory(
    content,
    data.show_type,
    data.show_section,
    props,
  );
  const BlockExtraTags = getComponentWithFallback({
    name: 'BlockExtraTags',
    dependencies: ['HighlightedContent', content?.['@type'] || ''],
  }).component;

  const { imageAlignment, contentAlignment } = alignmentHelper(
    data.styles.align || 'right',
  );
  return (
    <div
      className={cx('block teaser highlitedContent', className, {
        'public-ui': isEditMode && content,
      })}
      style={style}
    >
      {!content && isEditMode && (
        <Message>
          <div className="teaser-item placeholder">
            <img src={imageBlockSVG} alt="" />
            <p>{intl.formatMessage(messages.PleaseChooseContent)}</p>
          </div>
        </Message>
      )}
      {content && (
        <div className={`${data.bg_color ? 'bg-' + data.bg_color : ''} `}>
          <Row>
            {(content.hasPreviewImage || content.image_field || image) && (
              <Col
                lg={{
                  ...imageAlignment,
                }}
              >
                <Image
                  item={image || content}
                  imageField={image ? image.image_field : content.image_field}
                  className={cx('item-image', {
                    'natural-image-size': data.natural_image_size,
                  })}
                  alt=""
                  loading="lazy"
                  responsive={true}
                  role={null}
                  sizes="(max-width:768px) 90vw, (max-width:1024px) 450px, 560px"
                />
              </Col>
            )}
            <Col
              lg={{
                ...contentAlignment,
              }}
            >
              <Card>
                <CardBody className="pb-2">
                  <CardCategory
                    date={
                      content.effective &&
                      data.show_date !== false &&
                      viewDate(intl.locale, content.effective, 'll')
                    }
                    iconName={icon}
                  >
                    {category}
                  </CardCategory>
                  <CardTitle tag="h2">
                    <ConditionalLink
                      condition={!!content['@id']}
                      item={content}
                    >
                      {data.title || content.title}
                    </ConditionalLink>
                  </CardTitle>
                  <CardText>{content.description||content.Description}</CardText>
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
                  {data.moreHref?.length > 0 && (
                    <CardReadMore
                      tag={UniversalLink}
                      iconName="it-arrow-right"
                      text={data.moreTitle || 'Vedi tutte le notizie'}
                      href={flattenToAppURL(data.moreHref[0]?.['@id'])}
                    />
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

ItaliaTeaserBody.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
};

export default ItaliaTeaserBody;
