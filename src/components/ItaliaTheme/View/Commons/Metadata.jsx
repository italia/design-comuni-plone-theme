import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import cx from 'classnames';
import { Chip, ChipLabel } from 'design-react-kit';
import PropTypes from 'prop-types';

import { viewDate } from 'design-comuni-plone-theme/helpers';

const messages = defineMessages({
  modified: {
    id: 'modified',
    defaultMessage: 'Ultimo aggiornamento',
  },
  rights: {
    id: 'rights',
    defaultMessage: 'Diritti',
  },
  subjects: {
    id: 'subjects',
    defaultMessage: 'Tags',
  },
});

/**
 * Metadata view component class.
 * @function Metadata
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const Metadata = ({
  content,
  showTags = false,
  noMargin = false,
  showSectionTitle = true,
  title,
  children,
}) => {
  const intl = useIntl();

  return (
    <section
      id="metadata"
      className={cx('it-page-section', { 'mb-5': !noMargin })}
    >
      {showSectionTitle && title && (
        <h2 id="header-metadata" className="mb-3">
          {title}
        </h2>
      )}
      {children}
      <p className="font-serif mb-0 mt-4 last-modified">
        <strong>{intl.formatMessage(messages.modified)}:</strong>{' '}
        {viewDate(intl.locale, content.modified, 'DD-MM-Y, HH:mm')}
      </p>
      {content.rights && (
        <>
          <p className="font-serif mb-0 mt-4 metadata">
            {intl.formatMessage(messages.rights)}
          </p>
          <strong>{content.rights}</strong>
        </>
      )}
      {showTags && content.subjects?.length > 0 && (
        <>
          <p className="font-serif mt-4">
            {intl.formatMessage(messages.subjects)}
          </p>
          {content.subjects?.map((item, i) => (
            <Chip
              color=""
              disabled={true}
              large={false}
              simple
              tag="div"
              key={item + i}
              className="me-2"
            >
              <ChipLabel tag="span">{item}</ChipLabel>
            </Chip>
          ))}
        </>
      )}
    </section>
  );
};

export default Metadata;

Metadata.propTypes = {
  content: PropTypes.object,
  showTags: PropTypes.bool,
  showSectionTitle: PropTypes.bool,
  noMargin: PropTypes.bool,
  title: PropTypes.string,
};
