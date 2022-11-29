import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Chip, ChipLabel } from 'design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';

const messages = defineMessages({
  other_arguments: {
    id: 'other_arguments',
    defaultMessage: 'Altri argomenti',
  },
});

/**
 * Arguments view component class.
 * @function Arguments
 * @params {object} location: object.
 * @returns {string} Markup of the component.
 */
const Arguments = ({ content }) => {
  const intl = useIntl();

  return content?.tassonomia_argomenti?.length > 0 ? (
    <div className="other-arguments">
      <h5>
        <small>{intl.formatMessage(messages.other_arguments)}:</small>
      </h5>
      {content.tassonomia_argomenti.map((item, i) => (
        <a
          href={flattenToAppURL(item['@id'])}
          key={item['@id']}
          title={item.title}
          className="text-decoration-none me-2"
        >
          <Chip disabled={false} large={false} simple tag="div">
            <ChipLabel tag="span">{item.title}</ChipLabel>
          </Chip>
        </a>
      ))}
    </div>
  ) : null;
};

export default Arguments;

Arguments.propTypes = {
  content: PropTypes.shape({
    '@id': PropTypes.string,
    '@type': PropTypes.string,
    title: PropTypes.string,
    correlato_in_evidenza: PropTypes.arrayOf(PropTypes.object),
  }),
};
