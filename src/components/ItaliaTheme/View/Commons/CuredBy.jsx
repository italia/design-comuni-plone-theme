/*
 * CuredBy component class, used in `NewsItemACuraDi` component.
 */

import { defineMessages, useIntl } from 'react-intl';
import React from 'react';
import PropTypes from 'prop-types';
import { Chip, ChipLabel } from 'design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import {
  OfficeCard,
  RichTextSection,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

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

const CuredBy = ({ office, people }) => {
  const intl = useIntl();
  return (
    <RichTextSection
      tag_id="a-cura-di"
      title={intl.formatMessage(messages.cured_by)}
      className="it-page-section anchor-offset mt-5"
    >
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
              <UniversalLink
                href={flattenToAppURL(item['@id'])}
                key={item['@id']}
                className="text-decoration-none me-2"
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
              </UniversalLink>
            ))}
          </div>
        ) : null}
      </div>
    </RichTextSection>
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
