import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import { UniversalLink } from '@plone/volto/components';
import PropTypes from 'prop-types';
import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import { getCalendarDate } from '@italia/helpers';
import {
  Icon,
  CardCategory,
  getItemIcon,
  ListingCategory,
} from '@italia/components/ItaliaTheme';
import Image from '@plone/volto/components/theme/Image/Image';

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
}) => {
  let item_fo = null;
  const locationContent = useSelector((state) => state.content.subrequests);
  const dispatch = useDispatch();
  const key = `generic_card_${item['@id']}`;
  const url = flattenToAppURL(item['@id']);
  const icon = getItemIcon(item);

  const infos = (
    <>
      {showInfos && (
        <CardCategory iconName={icon} date={getCalendarDate(item)}>
          <ListingCategory
            category={item?.design_italia_meta_type}
            item={item}
          />
        </CardCategory>
      )}
    </>
  );

  useEffect(() => {
    if (showimage) {
      dispatch(getContent(url, null, key));
      return () => dispatch(resetContent(key));
    }
  }, [dispatch, key, showimage, url]);

  item_fo = locationContent[key]?.data || item;

  return item_fo ? (
    showimage && item_fo[image_field] ? (
      <div
        className={cx('genericcard card card-img shadow rounded mt-3 ', {
          'card-teaser': !showimage,
        })}
      >
        <div className="img-responsive-wrapper">
          <div className="img-responsive img-responsive-panoramic">
            <figure className="img-wrapper">
              <Image
                image={item_fo[image_field]}
                alt={item_fo.title}
                title={item_fo.title}
              />
            </figure>
          </div>
        </div>
        <div className="card-body">
          {infos}
          <h5 className="card-title">
            {show_icon && <Icon icon={show_icon} padding={false} />}
            <UniversalLink item={item_fo}>{item_fo.title}</UniversalLink>
          </h5>
          {(showDescription || children) && (
            <div className="card-text">
              {item_fo.description} {children}
            </div>
          )}
        </div>
      </div>
    ) : (
      <div className="genericcard card card-teaser shadow p-4 mt-3 rounded">
        <div className="card-body">
          {infos}
          <h5 className="card-title">
            {show_icon && <Icon icon={show_icon} padding={false} />}
            <UniversalLink item={item_fo}>{item_fo.title}</UniversalLink>
          </h5>
          {(showDescription || children) && (
            <div className="card-text">
              {item_fo.description} {children}
            </div>
          )}
        </div>
      </div>
    )
  ) : null;
};

export default GenericCard;

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
