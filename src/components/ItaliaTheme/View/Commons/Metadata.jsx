import { defineMessages, useIntl } from 'react-intl';
import React from 'react';
import moment from 'moment';
import { Chip, ChipLabel } from 'design-react-kit/dist/design-react-kit';
import PropTypes from 'prop-types';

const messages = defineMessages({
  other_info: {
    id: 'other_info',
    defaultMessage: 'Altre informazioni',
  },
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
const Metadata = ({ content, showTags = true }) => {
  const intl = useIntl();
  return (
    <article id="metadata" className="it-page-section anchor-offset mt-5">
      <h4 id="header-metadata" className="mb-3">
        {intl.formatMessage(messages.other_info)}
      </h4>
      <p className="text-serif">{intl.formatMessage(messages.modified)}</p>
      <h6 className="no-toc">
        <strong>{moment(content.modified).format('DD-MM-Y HH:MM')}</strong>
      </h6>
      {content.rights && (
        <>
          <p className="text-serif">{intl.formatMessage(messages.rights)}</p>
          <h6 className="no-toc">
            <strong>{content.rights}</strong>
          </h6>
        </>
      )}
      {showTags && content.subjects?.length > 0 && (
        <>
          <p className="text-serif mt-4">
            {intl.formatMessage(messages.subjects)}
          </p>
          {content.subjects?.map((item, i) => (
            <Chip
              color=""
              disabled={false}
              large={false}
              simple
              tag="div"
              key={item}
            >
              <ChipLabel tag="span">{item}</ChipLabel>
            </Chip>
          ))}
        </>
      )}
    </article>
  );
};
export default Metadata;

Metadata.propTypes = {
  content: PropTypes.object,
};
