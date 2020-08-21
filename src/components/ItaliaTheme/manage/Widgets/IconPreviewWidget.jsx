import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  previewIconSelected: {
    id: 'previewIconSelected',
    defaultMessage: "Anteprima dell'icona scelta"
  }
});

const IconPreviewWidget = ({
  icon,
  onEdit,
  title,
  description,
  children
}) => {
  const intl = useIntl();

  return (
    <div className="inline field text">
      <div className="ui grid">
        <div className="stretched row">
          <div className="four wide column">
            <div className="wrapper">
              <label for="field-selectIcon">{title}</label>
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
              {description}
              {children}
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
  title: PropTypes.string,
  description: PropTypes.string,
};

export default IconPreviewWidget;
