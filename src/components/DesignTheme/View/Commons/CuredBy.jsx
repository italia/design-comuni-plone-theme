import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { getContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';

const messages = defineMessages({
  cured_by: {
    id: 'cured_by',
    defaultMessage: 'A cura di',
  },
  page_cured_by: {
    id: 'page_cured_by',
    defaultMessage: 'Questa pagina è gestita da',
  },
  cured_by_people: {
    id: 'cured_by_people',
    defaultMessage: 'Persone',
  },
});

/**
 * CuredBy view component class.
 * @function CuredBy
 * @params {object} content: Content object.
 * @params {string} office_field: field where office is related
 * @params {string} office_field: field where people is related
 * @returns {string} Markup of the component.
 */
const CuredBy = ({ content, office, people }) => {
  const intl = useIntl();
  const key = content['UID'] + 'curedby';
  const url = flattenToAppURL(office['@id']);
  const officeContent = useSelector(state => state.content.subrequests);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (office) {
      dispatch(getContent(url, null, key));
    }
    return () => {
      // setValue(key, null);
    };
  }, [dispatch, office, url, key]);
  // const office_fo = officeContent?.key?.data;
  let office_fo = null;
  if (key in officeContent) {
    office_fo = officeContent[key].data;
  }
  return (
    <article id="a-cura-di" className="it-page-section anchor-offset mt-5">
      <h4>{intl.formatMessage(messages.cured_by)}</h4>
      <div className="row">
        {office_fo && (
          <div className="col-12 col-sm-8">
            <h6>
              <small>{intl.formatMessage(messages.page_cured_by)}</small>
            </h6>
            <div className="card card-teaser border rounded shadow p-4">
              <div className="card-body pr-3">
                <h5>
                  <a href={office_fo['@id']} title={office_fo.title}>
                    {office_fo.title}
                  </a>
                </h5>
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
          </div>
        )}
        {people && (
          <div className="col-12 col-sm-4">
            <h6>
              <small>{intl.formatMessage(messages.cured_by_people)}</small>
            </h6>
            {people.map((item, i) => (
              <a key={i} href={item['@id']}>
                <div className="chip chip-simple chip-primary">
                  <span className="chip-label">{item.title}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
export default CuredBy;
