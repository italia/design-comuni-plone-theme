import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getContent, resetContent } from '@plone/volto/actions';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import PropTypes from 'prop-types';
import { Icon } from 'design-react-kit/dist/design-react-kit';
import { RichTextArticle } from './RichTextArticle';

/**
 * ContactCard view component class.
 * @function Location
 * @params {object} location: object.
 * @returns {string} Markup of the component.
 */
const ContactCard = ({ item, showimage, image_field, show_icon, icon }) => {
  const key = `contact_card_${item['@id']}`;
  const url = flattenToAppURL(item['@id']);
  const locationContent = useSelector(state => state.content.subrequests);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContent(url, null, key));
    return () => dispatch(resetContent(key));
  }, [dispatch, item, url, key]);
  const item_fo = locationContent[key]?.data;
  return item_fo ? (
    <div className="genericcard card card-teaser shadow p-4 mt-3 rounded border">
      <div className="card-body">
        <h5 className="card-title">
          {show_icon && <Icon icon={icon} padding={false} />}
          <Link to={flattenToAppURL(item_fo['@id'])}>{item_fo.title}</Link>
        </h5>
        <div className="card-text">
          <RichTextArticle
            content={item?.organizzato_da_esterno?.data}
            tag_id={'contatti'}
          />
          <div>{item?.contact_phone}</div>
          <div>{item?.contact_email}</div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ContactCard;

ContactCard.propTypes = {
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
