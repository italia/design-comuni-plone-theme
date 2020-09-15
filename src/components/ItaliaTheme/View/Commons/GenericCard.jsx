import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import cx from 'classnames';
import { getContent, resetContent } from '@plone/volto/actions';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import PropTypes from 'prop-types';
import { Icon } from 'design-react-kit/dist/design-react-kit';
/**
 * GenericCard view component class.
 * @function Location
 * @params {object} location: object.
 * @returns {string} Markup of the component.
 */
const GenericCard = ({
  item,
  showimage,
  image_field,
  show_icon,
  showDescription = true,
  column = false,
}) => {
  const key = `generic_card_${item['@id']}`;
  const url = flattenToAppURL(item['@id']);
  const locationContent = useSelector((state) => state.content.subrequests);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContent(url, null, key));
    return () => dispatch(resetContent(key));
  }, [dispatch, item, url, key]);
  const item_fo = locationContent[key]?.data;
  return item_fo ? (
    showimage && item_fo[image_field] ? (
      <div
        className={
          (cx('genericcard card-img card card-teaser shadow p-4 mt-3 rounded'),
          { 'card-column': column })
        }
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
          <h5 className="card-title no-toc">
            {show_icon && <Icon icon={show_icon} padding={false} />}
            <Link to={flattenToAppURL(item_fo['@id'])}>{item_fo.title}</Link>
          </h5>
          {showDescription && (
            <div className="card-text">{item_fo.description}</div>
          )}
        </div>
      </div>
    ) : (
      <div
        className={cx('genericcard card card-teaser shadow p-4 mt-3 rounded', {
          'card-column': column,
        })}
      >
        <div className="card-body">
          <h5 className="card-title no-toc">
            {show_icon && <Icon icon={show_icon} padding={false} />}
            <Link to={flattenToAppURL(item_fo['@id'])}>{item_fo.title}</Link>
          </h5>
          {showDescription && (
            <div className="card-text">{item_fo.description}</div>
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
