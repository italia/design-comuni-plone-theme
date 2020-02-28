import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getContent, resetContent } from '@plone/volto/actions';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';

/**
 * OfficeCard view component class.
 * @function OfficeCard
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const OfficeCard = ({ content, office }) => {
  const key = office['@id'] + '_curedby';
  const url = flattenToAppURL(office['@id']);
  const officeContent = useSelector(state => state.content.subrequests);
  const dispatch = useDispatch();

  useEffect(() => {
    if (office) {
      dispatch(getContent(url, null, key));
    }
    return () => dispatch(resetContent(key));
  }, [dispatch, office, url, key]);

  // const office_fo = officeContent?.key?.data;
  let office_fo = null;
  if (key in officeContent) {
    office_fo = officeContent[key].data;
    return office_fo ? (
      <div className="card card-teaser border rounded shadow p-4">
        <div className="card-body pr-3">
          <h5 className="card-title">
            <Link
              to={flattenToAppURL(office_fo['@id'])}
              title={office_fo.title}
            >
              {office_fo.title}
            </Link>
          </h5>
          <p class="card-text">{office_fo.description}</p>
          {(office_fo.city || office_fo.zip_code || office_fo.street) && (
            <div className="card-text">
              {office_fo.stree && <p>{office_fo.street}</p>}
              {(office_fo.city || office_fo.zip_code) && (
                <p>
                  {office_fo.zip_code} {office_fo.city}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    ) : null;
  }
  return null;
};
export default OfficeCard;
