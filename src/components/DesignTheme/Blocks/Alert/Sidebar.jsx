import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { Button, Grid, Segment } from 'semantic-ui-react';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';

const messages = defineMessages({
  Color: {
    id: 'Color',
    defaultMessage: 'Color',
  },
  Color_warning: {
    id: 'Color_warning',
    defaultMessage: 'Giallo',
  },
  Color_danger: {
    id: 'Color_danger',
    defaultMessage: 'Rosso',
  },
});

const Sidebar = ({
  data,
  block,
  onChangeBlock,
  openObjectBrowser,
  required = false,
  intl,
}) => {
  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="Alert" defaultMessage="Alert" />
        </h2>
      </header>

      <Segment className="form">
        <Form.Field inline required={required}>
          <Grid>
            <Grid.Row>
              <Grid.Column width="4">
                <div className="wrapper">
                  <label htmlFor="field-align">
                    {intl.formatMessage(messages.Color)}
                  </label>
                </div>
              </Grid.Column>
              <Grid.Column width="8" verticalAlign="middle">
                <Button.Group compact>
                  <Button
                    icon
                    basic={data.color !== 'warning'}
                    color="yellow"
                    onClick={(name, value) => {
                      onChangeBlock(block, {
                        ...data,
                        color: 'warning',
                      });
                    }}
                    active={data.color === 'warning'}
                    content={intl.formatMessage(messages.Color_warning)}
                  />

                  <Button
                    icon
                    basic={data.color !== 'danger'}
                    color="red"
                    onClick={(name, value) => {
                      onChangeBlock(block, {
                        ...data,
                        color: 'danger',
                      });
                    }}
                    active={data.color === 'danger'}
                    content={intl.formatMessage(messages.Color_danger)}
                  />
                </Button.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form.Field>
      </Segment>
    </Segment.Group>
  );
};

Sidebar.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
  openObjectBrowser: PropTypes.func.isRequired,
};

export default injectIntl(Sidebar);
