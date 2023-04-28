import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { UniversalLink } from '@plone/volto/components';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import Image from '@plone/volto/components/theme/Image/Image';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { ContactLink } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

/**
 * OfficeCard view component class.
 * @function OfficeCard
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const OfficeCard = ({
  office,
  load_data = true,
  icon,
  children,
  margin_bottom = false,
  show_contacts = true,
  size,
  no_details = false,
  ...rest
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
        'card card-teaser preview-image-card border-left-card rounded shadow p-3 ',
        size === 'big' ? 'card-big-io-comune' : 'card-small',
        {
          'mb-3': margin_bottom,
        },
      )}
      {...rest}
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
        {show_contacts && office_fo?.sede?.length > 0 && (
          <div>
            {' '}
            {office_fo?.sede?.map((sede, i) => {
              return (
                <div className="card-text" key={i}>
                  {sede.street && <p>{sede.street}</p>}
                  {(sede.city || sede.zip_code) && (
                    <p>
                      {sede.zip_code} {sede.city}
                    </p>
                  )}
                  {office_fo.contact_info?.map((el) =>
                    el.value_punto_contatto?.map((pdc, i) => {
                      if (pdc.pdc_type === 'telefono') {
                        return (
                          <div key={i}>
                            <ContactLink tel={pdc.pdc_value} label={false} />
                          </div>
                        );
                      } else if (pdc.pdc_type === 'email')
                        return (
                          <div key={i}>
                            <ContactLink email={pdc.pdc_value} label={false} />
                          </div>
                        );
                      return null;
                    }),
                  )}
                </div>
              );
            })}
          </div>
        )}

        {children && <div className="card-text">{children}</div>}
      </div>
      <div className="image-container">
        {office_fo?.image_scales?.[office_fo?.image_field]?.[0] && (
          <Image
            itemUrl={office_fo['@id']}
            image={office_fo.image_scales[office_fo.image_field][0]}
            alt=""
            responsive={false}
          />
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
  icon: PropTypes.string,
};
