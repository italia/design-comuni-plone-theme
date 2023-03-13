import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { UniversalLink } from '@plone/volto/components';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import {
  RichText,
  ContactLink,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

/**
 * OfficeCard view component class.
 * @function OfficeCard
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const OfficeCard = ({
  office,
  load_data = true,
  extended,
  icon,
  children,
  margin_bottom = false,
  show_contacts = true,
  size,
  no_details = false,
}) => {
  const url = flattenToAppURL(office['@id']);
  const key = `${url}_office`;

  const officeContent = useSelector((state) => state.content.subrequests);
  const dispatch = useDispatch();

  useEffect(() => {
    if (load_data) {
      dispatch(getContent(url, null, key));
      return () => dispatch(resetContent(key));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  let office_fo = load_data ? officeContent?.[key]?.data : office;

  return office_fo ? (
    <div
      className={cx(
        'card card-teaser border-left-card rounded shadow p-3 ',
        size === 'big' ? 'card-big' : 'card-small',
        {
          'mb-3': margin_bottom,
        },
      )}
    >
      {icon && <Icon icon={icon}></Icon>}
      <div className="card-body pe-3">
        <h5 className="card-title">
          <UniversalLink
            item={office_fo}
            title={office_fo.title}
            data-element="service-area"
          >
            {office_fo.title}
          </UniversalLink>
        </h5>
        <p className="card-text">{office_fo.description}</p>
        {show_contacts &&
          (office_fo.city || office_fo.zip_code || office_fo.street) && (
            <div className="card-text">
              {office_fo.street && <p>{office_fo.street}</p>}
              {(office_fo.city || office_fo.zip_code) && (
                <p>
                  {office_fo.zip_code} {office_fo.city}
                </p>
              )}
              {(office_fo.telefono || office_fo.email) && (
                <p>
                  <ContactLink tel={office_fo.telefono} label={true} />
                  <br />
                  <ContactLink email={office_fo.email} label={true} />
                </p>
              )}

              {extended ? (
                <>
                  <RichText
                    serif={false}
                    add_class="card-text"
                    content={office_fo.contact_info}
                  />
                </>
              ) : null}
            </div>
          )}
        {children && <div className="card-text">{children}</div>}
      </div>
      <div className="image-container">
        {office.preview_image?.scales?.preview && (
          <img src={office.preview_image?.scales?.preview} alt={office.id} />
        )}
      </div>
    </div>
  ) : null;
};
export default OfficeCard;

OfficeCard.propTypes = {
  office: PropTypes.shape({
    '@id': PropTypes.string,
    '@type': PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    review_state: PropTypes.string,
  }),
  extended: PropTypes.bool,
  icon: PropTypes.string,
};
