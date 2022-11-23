import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { Button, Grid, Segment } from 'semantic-ui-react';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import { FileWidget } from '@plone/volto/components';

const messages = defineMessages({
  Color: {
    id: 'Color',
    defaultMessage: 'Colore',
  },
  Color_warning: {
    id: 'Color_warning',
    defaultMessage: 'Giallo',
  },
  Color_warning_orange: {
    id: 'Color_warning_orange',
    defaultMessage: 'Arancione',
  },
  Color_danger: {
    id: 'Color_danger',
    defaultMessage: 'Rosso',
  },
  Image: {
    id: 'Image',
    defaultMessage: 'Immagine',
  },
});

class Sidebar extends Component {
  static propTypes = {
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    block: PropTypes.string.isRequired,
    onChangeBlock: PropTypes.func.isRequired,
    openObjectBrowser: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Segment.Group raised>
        <header className="header pulled">
          <h2>
            <FormattedMessage id="Alert" defaultMessage="Alert" />
          </h2>
        </header>

        <Segment className="form">
          <Form.Field inline required={this.props.required}>
            <Grid>
              <Grid.Row>
                <Grid.Column width="4">
                  <div className="wrapper">
                    <label htmlFor="field-align">
                      {this.props.intl.formatMessage(messages.Color)}
                    </label>
                  </div>
                </Grid.Column>
                <Grid.Column
                  width="8"
                  verticalAlign="middle"
                  className="color-chooser"
                >
                  <Button.Group vertical compact>
                    <Button
                      icon
                      basic={this.props.data.color !== 'warning'}
                      color="yellow"
                      onClick={(name, value) => {
                        this.props.onChangeBlock(this.props.block, {
                          ...this.props.data,
                          color: 'warning',
                        });
                      }}
                      active={this.props.data.color === 'warning'}
                      content={this.props.intl.formatMessage(
                        messages.Color_warning,
                      )}
                    />

                    <Button
                      icon
                      basic={this.props.data.color !== 'warning-orange'}
                      color="orange"
                      onClick={(name, value) => {
                        this.props.onChangeBlock(this.props.block, {
                          ...this.props.data,
                          color: 'warning-orange',
                        });
                      }}
                      active={this.props.data.color === 'warning-orange'}
                      content={this.props.intl.formatMessage(
                        messages.Color_warning_orange,
                      )}
                    />

                    <Button
                      icon
                      basic={this.props.data.color !== 'danger'}
                      color="red"
                      onClick={(name, value) => {
                        this.props.onChangeBlock(this.props.block, {
                          ...this.props.data,
                          color: 'danger',
                        });
                      }}
                      active={this.props.data.color === 'danger'}
                      content={this.props.intl.formatMessage(
                        messages.Color_danger,
                      )}
                    />
                  </Button.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form.Field>
          <FileWidget
            id="image"
            title={this.props.intl.formatMessage(messages.Image)}
            value={this.props.data.image}
            onChange={(name, value) => {
              this.props.onChangeBlock(this.props.block, {
                ...this.props.data,
                image: value,
              });
            }}
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default injectIntl(Sidebar);
