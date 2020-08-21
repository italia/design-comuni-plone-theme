import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  description: {
    id: 'iconDescription',
    defaultMessage: 'Puoi selezionare un’icona fra quelle proposte nel menu a tendina oppure puoi scrivere/incollare nel campo di testo il nome di un’icona di fontawsome 5',
  },
  previewIconSelected: {
    id: 'previewIconSelected',
    defaultMessage: "Anteprima dell'icona scelta"
  }
});

const IconPreviewWidget = ({
  icon,
  description
}) => {
  const intl = useIntl();

  return (
    <div className="inline field text">
      <div className="ui grid">
        <div className="stretched row">
          <div className="four wide column">
            <div className="wrapper">
              <label for="field-selectIcon">{description}</label>
            </div>
          </div>
          <div className="eight wide column">
            <div className="ui input flex-center">
              {icon ? 
                <FontAwesomeIcon icon={icon} className="show-icon"/>
                : 
                <span className="text-icon">{intl.formatMessage(messages.previewIconSelected)}</span>
              }
            </div>
          </div>
        </div>
        <div className="stretched row">
          <div className="stretched twelve wide column">
            <p className="help">
              {intl.formatMessage(messages.description)}
              <span className="ml-4">
                <a target="_blank" href='https://fontawesome.com/icons?d=gallery'>
                  <FontAwesomeIcon icon={'arrow-right'}/>
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
IconPreviewWidget.propTypes = {
  icon: PropTypes.string,
  description: PropTypes.string,
};

export default IconPreviewWidget;
