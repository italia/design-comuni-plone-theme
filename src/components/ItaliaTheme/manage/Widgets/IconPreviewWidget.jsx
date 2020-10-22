import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { defineMessages, useIntl } from 'react-intl';
import { Form, Grid, Label } from 'semantic-ui-react';

const messages = defineMessages({
  previewIconSelected: {
    id: 'previewIconSelected',
    defaultMessage: "Anteprima dell'icona scelta",
  },
});

const IconPreviewWidget = ({ icon, onEdit, title, description, children }) => {
  const intl = useIntl();

  return (
    <Form.Field inline className="help" id="icon-preview-widget-id">
      <Grid>
        <Grid.Row stretched>
          <Grid.Column width="4">
            <div className="wrapper">
              <label htmlFor="icon-preview-widget-id">{title}</label>
            </div>
          </Grid.Column>
          <Grid.Column width={8}>
            <div className="ui input flex-center">
              <p className="help">
                {icon ? (
                  <FontAwesomeIcon icon={icon} className="show-icon" />
                ) : (
                  <span>
                    {intl.formatMessage(messages.previewIconSelected)}
                  </span>
                )}
              </p>
            </div>
          </Grid.Column>
        </Grid.Row>
        {(description || children) && (
          <Grid.Row stretched>
            <Grid.Column stretched width="12">
              <p className="help">
                {description}
                {children}
              </p>
            </Grid.Column>
          </Grid.Row>
        )}
      </Grid>
    </Form.Field>
  );
};

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
