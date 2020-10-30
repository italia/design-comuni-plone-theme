import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import cx from 'classnames';
import { getContent, resetContent } from '@plone/volto/actions';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import PropTypes from 'prop-types';
import { Icon, CardCategory } from 'design-react-kit/dist/design-react-kit';
import { getCalendarDate, getIcon } from '@italia/helpers';
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
  showInfosFor = null,
  children,
}) => {
  let item_fo = null;
  const locationContent = useSelector((state) => state.content.subrequests);
  const dispatch = useDispatch();
  const key = `generic_card_${item['@id']}`;
  const url = flattenToAppURL(item['@id']);

  const infos = (
    <>
      {showInfos &&
        (!showInfosFor || showInfosFor.indexOf(item['@type']) >= 0) && (
          <CardCategory date={getCalendarDate(item)}>
            <Icon
              className="icon"
              color="primary"
              icon={getIcon(item['@type'])}
              padding={false}
            />
            {item?.design_italia_meta_type}
          </CardCategory>
        )}
    </>
  );

  useEffect(() => {
    if (showimage) {
      dispatch(getContent(url, null, key));
      return () => dispatch(resetContent(key));
    }
  }, []);

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
              <img
                src={flattenToAppURL(
                  item_fo[image_field].scales.preview.download,
                )}
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
            <Link to={flattenToAppURL(item_fo['@id'])}>{item_fo.title}</Link>
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
            <Link to={flattenToAppURL(item_fo['@id'])}>{item_fo.title}</Link>
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
