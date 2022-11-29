import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardReadMore,
} from 'design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { ArgumentIcon } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  explore: {
    id: 'explore',
    defaultMessage: 'Esplora',
  },
});

/**
 * ItemInEvidence view component class.
 * @function ItemInEvidence
 * @params {object} location: object.
 * @returns {string} Markup of the component.
 */
const ItemInEvidence = ({ content }) => {
  const intl = useIntl();
  const correlato_in_evidenza = content.correlato_in_evidenza[0];
  return (
    <div className="card-wrapper">
      <Card className="card-bg rounded " noWrapper={true} tag="div">
        <CardBody tag="div">
          <ArgumentIcon icon={correlato_in_evidenza.icona} />
          <CardTitle tag="h3">{correlato_in_evidenza.title}</CardTitle>
          <CardText tag="p">{correlato_in_evidenza.description}</CardText>
          <CardReadMore
            iconName="it-arrow-right"
            tag="a"
            text={intl.formatMessage(messages.explore)}
            href={flattenToAppURL(correlato_in_evidenza['@id'])}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default ItemInEvidence;

ItemInEvidence.propTypes = {
  content: PropTypes.shape({
    '@id': PropTypes.string,
    '@type': PropTypes.string,
    title: PropTypes.string,
    correlato_in_evidenza: PropTypes.array,
  }),
};
