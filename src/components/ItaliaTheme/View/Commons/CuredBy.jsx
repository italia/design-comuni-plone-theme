import { defineMessages, useIntl } from 'react-intl';
import React from 'react';
import PropTypes from 'prop-types';
import { Chip, ChipLabel } from 'design-react-kit/dist/design-react-kit';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import { OfficeCard } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

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
const CuredBy = ({ office, people, title }) => {
  const intl = useIntl();
  return (
    <article
      id="a-cura-di"
      className="it-page-section anchor-offset mt-5"
      aria-labelledby={'header-a-cura-di'}
    >
      <h4 id="header-a-cura-di">
        {title ?? intl.formatMessage(messages.cured_by)}
      </h4>
      <div className="row">
        {office && (
          <div className="col-12 col-sm-8">
            <h5>
              <small>{intl.formatMessage(messages.page_cured_by)}</small>
            </h5>
            <OfficeCard office={office} />
          </div>
        )}
        {people?.length > 0 ? (
          <div className={`col-12 ${office && 'col-sm-4'}`}>
            {office && (
              <h5>
                <small>{intl.formatMessage(messages.cured_by_people)}</small>
              </h5>
            )}
            {people.map((item, i) => (
              <Link
                to={flattenToAppURL(item['@id'])}
                key={item['@id']}
                className="text-decoration-none mr-2"
              >
                <Chip
                  color="primary"
                  disabled={false}
                  large={false}
                  simple
                  tag="div"
                >
                  <ChipLabel tag="span">{item.title}</ChipLabel>
                </Chip>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
};
export default CuredBy;

CuredBy.propTypes = {
  office: PropTypes.shape({
    '@id': PropTypes.string,
    '@type': PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    review_state: PropTypes.string,
  }),
  people: PropTypes.arrayOf(
    PropTypes.shape({
      '@id': PropTypes.string,
      '@type': PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      review_state: PropTypes.string,
    }),
  ),
};
