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
} from 'design-react-kit/dist/design-react-kit';

import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import Image from '@plone/volto/components/theme/Image/Image';
import { flattenToAppURL } from '@plone/volto/helpers';

import { getCategory } from '@italia/components/ItaliaTheme/Blocks/Listing/Commons/utils';
import { CardCategory, getItemIcon } from '@italia/components/ItaliaTheme';
import { viewDate } from '@italia/helpers';

const Body = (props) => {
  const { content, block } = props;
  const intl = useIntl();
  const moment = props.moment.default;
  moment.locale(intl.locale);
  const icon = getItemIcon(content);

  const { show_type = true, show_section } = block;
  const category = getCategory(content, show_type, show_section, props);

  return (
    <div className={`${block.bg_color ? 'bg-' + block.bg_color : ''}`}>
      <Row>
        {content.image && (
          <Col lg={{ size: 6, offset: 1, order: 2 }}>
            <Image
              image={content.image}
              alt=""
              className={cx('item-image', {
                'natural-image-size': block.natural_image_size,
              })}
              role={null}
            />
          </Col>
        )}
        <Col lg={{ size: 5, order: 1 }}>
          <Card>
            <CardBody className="pb-2">
              <CardCategory
                date={
                  content.effective &&
                  viewDate(intl.locale, moment, content.effective, 'll')
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

              {content.tassonomia_argomenti &&
                content.tassonomia_argomenti.length > 0 && (
                  <>
                    {content.tassonomia_argomenti.map((argomento, idx) => (
                      <Chip
                        simple
                        color="primary"
                        key={`${idx} ${argomento['@id']}`}
                        className="mr-2"
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

export default injectLazyLibs(['moment'])(Body);
