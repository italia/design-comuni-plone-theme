import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { UniversalLink } from '@plone/volto/components';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { getCalendarDate } from 'design-comuni-plone-theme/helpers';
import {
  Icon,
  CardCategory,
  getItemIcon,
  ListingCategory,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import config from '@plone/volto/registry';

/**
 * GenericCard view component class.
 * @function GenericCard
 * @params {object} location: object.
 * @returns {string} Markup of the component.
 */
const GenericCard = ({
  item,
  showimage,
  image_field,
  show_icon,
  showDescription = true,
  showInfos = false,
  children,
  size,
  rrule,
}) => {
  const icon = getItemIcon(item);
  const Image = config.getComponent({ name: 'Image' }).component;
  const infos = (
    <>
      {showInfos && (
        <CardCategory
          iconName={icon}
          date={getCalendarDate(item, rrule.rrulestr)}
        >
          <ListingCategory
            category={item?.design_italia_meta_type}
            item={item}
          />
        </CardCategory>
      )}
    </>
  );
  const cooked_image_field = image_field || item.image_field;
  // (item.preview_image ? 'preview_image' : 'image');
  const image =
    showimage &&
    item &&
    Image({
      item: item,
      imageField: cooked_image_field,
      alt: '',
      title: item.title,
    });

  return item ? (
    image ? (
      <div className={cx('genericcard card card-img shadow rounded mt-3')}>
        <div className="img-responsive-wrapper">
          <div className="img-responsive img-responsive-panoramic">
            <figure className="img-wrapper">{image}</figure>
          </div>
        </div>
        <div className="card-body px-4">
          {infos}
          <div className="card-title h5">
            {show_icon && <Icon icon={show_icon} padding={false} />}
            <UniversalLink item={item}>{item.title}</UniversalLink>
          </div>
          {(showDescription || children) && (
            <div className="card-text">
              {item.description} {children}
            </div>
          )}
        </div>
      </div>
    ) : (
      <div
        className={cx(
          'genericcard card card-teaser shadow p-4 mt-3 rounded',
          size === 'big' ? 'card-big-io-comune' : 'card-small',
        )}
      >
        <div className="card-body">
          {infos}
          <div className="card-title h5">
            {show_icon && <Icon icon={show_icon} padding={false} />}
            <UniversalLink item={item}>{item.title}</UniversalLink>
          </div>
          {(showDescription || children) && (
            <div className="card-text">
              {item.description} {children}
            </div>
          )}
        </div>
      </div>
    )
  ) : null;
};

export default injectLazyLibs(['rrule'])(GenericCard);

GenericCard.propTypes = {
  item: PropTypes.shape({
    '@id': PropTypes.string,
    '@type': PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    review_state: PropTypes.string,
  }),
  showimage: PropTypes.bool,
  image_field: PropTypes.string,
};
