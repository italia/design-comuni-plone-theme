import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'design-react-kit';
import cx from 'classnames';

import { UniversalLink } from '@plone/volto/components';
import { CardCategory } from 'design-comuni-plone-theme/components/ItaliaTheme';
import {
  ListingCategory,
  ListingImage,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import { contentHasImage } from 'design-comuni-plone-theme/helpers';

export const CardPersona = ({
  item,
  className,
  titleClassName = '',
  titleTagName = 'h3',
  showImage,
  show_description = true,
  icon,
  type,
  isEditMode,
}) => {
  const hasImage = contentHasImage(item) && showImage;

  return (
    <Card
      className={cx(
        {
          'card-with-image': hasImage,
        },
        `card-persona card-big-io-comune card-teaser-image card-flex no-after border border-light rounded`,
        className,
      )}
    >
      <div className="card-image-wrapper">
        <CardBody>
          {(icon || type) && (
            <CardCategory iconName={icon}>
              <ListingCategory category={type} item={item} />
            </CardCategory>
          )}
          <CardTitle tag={titleTagName} className={titleClassName}>
            <UniversalLink
              item={!isEditMode ? item : null}
              href={isEditMode ? '#' : ''}
            >
              {item.title || item.id}
            </UniversalLink>
          </CardTitle>
          {show_description && (
            <CardText>{item.incarichi || item.description}</CardText>
          )}
        </CardBody>
        {hasImage && (
          <div className="card-image card-image-rounded">
            <ListingImage item={item} sizes="130px" />
          </div>
        )}
      </div>
    </Card>
  );
};

export default CardPersona;
