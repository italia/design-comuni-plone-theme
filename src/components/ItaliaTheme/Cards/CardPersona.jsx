import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'design-react-kit/dist/design-react-kit';

import { UniversalLink } from '@plone/volto/components';
import Image from '@plone/volto/components/theme/Image/Image';
import { CardCategory } from '@italia/components/ItaliaTheme';
import { ListingCategory } from '@italia/components/ItaliaTheme';

export const CardPersona = ({
  item,
  className,
  showImage,
  natural_image_size,
  listingText,
  icon,
  isEditMode,
}) => {
  return (
    <Card
      className={`card-persona card-teaser-image card-flex no-after ${
        className ?? ''
      }`}
    >
      <div className="card-image-wrapper">
        <CardBody>
          <CardCategory iconName={icon}>
            <ListingCategory
              category={item?.design_italia_meta_type}
              item={item}
            />
          </CardCategory>
          <CardTitle tag="h3">
            <UniversalLink
              item={!isEditMode ? item : null}
              href={isEditMode ? '#' : ''}
            >
              {item.title || item.id}
            </UniversalLink>
          </CardTitle>
          {listingText && <CardText>{listingText}</CardText>}
        </CardBody>
        {showImage && (
          <div className="card-image card-image-rounded">
            <Image
              className="listing-image"
              image={item.foto_persona}
              aria-hidden="true"
              alt=""
              useOriginal={false}
              maxSize={300}
            />
          </div>
        )}
      </div>
    </Card>
  );
};

export default CardPersona;
