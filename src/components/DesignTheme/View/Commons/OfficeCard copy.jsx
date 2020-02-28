import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getContent, resetContent } from '@plone/volto/actions';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
} from 'design-react-kit/dist/design-react-kit';

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
      <Card className="card-bg" noWrapper={false} space tag="div">
        <CardBody tag="div">
          <CardTitle tag="h5">
            <Link
              to={flattenToAppURL(office_fo['@id'])}
              title={office_fo.title}
            >
              {office_fo.title}
            </Link>
          </CardTitle>
          {office_fo.description && (
            <CardText tag="p">{office_fo.description}</CardText>
          )}
          {(office_fo.city || office_fo.zip_code || office_fo.street) && (
            <CardText tag="p">
              {office_fo.stree && <p>{office_fo.street}</p>}
              {(office_fo.city || office_fo.zip_code) && (
                <p>
                  {office_fo.zip_code} {office_fo.city}
                </p>
              )}
            </CardText>
          )}
        </CardBody>
      </Card>
    ) : null;
  }
  return null;
};
export default OfficeCard;
