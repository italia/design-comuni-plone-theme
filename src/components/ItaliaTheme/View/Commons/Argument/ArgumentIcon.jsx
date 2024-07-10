import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import PropTypes from 'prop-types';
import Icon from 'design-comuni-plone-theme/components/ItaliaTheme/Icons/Icon';

/**
 * Dates view component class.
 * @function ArgumentIcon
 * @params {object} Dates: object.
 * @returns {string} Markup of the component.
 */
const ArgumentIcon = ({ icon, title }) => {
  const intl = useIntl();

  return icon ? (
    <div className="icon-argument-container mb-2">
      <Icon
        icon={icon}
        title={intl.formatMessage(messages.iconTitle, {
          topic_title: title,
        })}
      />
    </div>
  ) : null;
};

export default ArgumentIcon;

ArgumentIcon.propTypes = {
  icon: PropTypes.string,
};

const messages = defineMessages({
  iconTitle: {
    id: 'icon_title',
    defaultMessage: "Icona per l'argomento {topic_title}",
  },
});
