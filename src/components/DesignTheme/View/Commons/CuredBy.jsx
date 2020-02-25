import { defineMessages, useIntl } from 'react-intl';
import React from 'react';
import OfficeCard from './OfficeCard';

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
  return (
    <article id="a-cura-di" className="it-page-section anchor-offset mt-5">
      <h4>{intl.formatMessage(messages.cured_by)}</h4>
      <div className="row">
        {office && (
          <div className="col-12 col-sm-8">
            <h6>
              <small>{intl.formatMessage(messages.page_cured_by)}</small>
            </h6>
            <OfficeCard content={content} office={office} />
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
