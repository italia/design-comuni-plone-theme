import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { Button, Grid, Segment } from 'semantic-ui-react';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import { FileWidget } from '@plone/volto/components';
import { ColorListWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';

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
          <ColorListWidget
            id="color"
            className="alert-colors-widget"
            title={this.props.intl.formatMessage(messages.Color)}
            value={this.props.data.color}
            onChange={(id, value) => {
              this.props.onChangeBlock(this.props.block, {
                ...this.props.data,
                [id]: value,
              });
            }}
            colors={[
              { name: 'warning', label: 'Giallo' },
              { name: 'warning-orange', label: 'Arancione' },
              { name: 'danger', label: 'Rosso' },
            ]}
          />

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
