import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import { ColorListWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { CheckboxWidget } from '@plone/volto/components';

const messages = defineMessages({
  border_color: {
    id: 'border_color',
    defaultMessage: 'Colore',
  },
  color_warning: {
    id: 'color_warning',
    defaultMessage: 'Giallo',
  },
  color_orange: {
    id: 'color_orange',
    defaultMessage: 'Arancione',
  },
  color_danger: {
    id: 'color_danger',
    defaultMessage: 'Rosso',
  },
  bg_color: {
    id: 'bg_color',
    defaultMessage: 'Colore di sfondo',
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
    const bg_colors = [
      {
        name: 'warning',
        label: this.props.intl.formatMessage(messages.color_warning),
      },
      {
        name: 'warning-orange',
        label: this.props.intl.formatMessage(messages.color_orange),
      },
      {
        name: 'danger',
        label: this.props.intl.formatMessage(messages.color_danger),
      },
    ];
    return (
      <Segment.Group raised>
        <header className="header pulled">
          <h2>
            <FormattedMessage
              id="blocco_info"
              defaultMessage="Blocco informazioni"
            />
          </h2>
        </header>

        <Segment className="form">
          <ColorListWidget
            id="color"
            title={this.props.intl.formatMessage(messages.border_color)}
            value={this.props.data.border_color}
            onChange={(id, value) => {
              this.props.onChangeBlock(this.props.block, {
                ...this.props.data,
                [id]: value,
              });
            }}
            colors={bg_colors}
          />
          <CheckboxWidget
            id="bg_color"
            title={this.props.intl.formatMessage(messages.bg_color)}
            value={this.props.data.bg_color ? this.props.data.bg_color : false}
            onChange={(name, checked) => {
              this.props.onChangeBlock(this.props.block, {
                ...this.props.data,
                [name]: checked,
              });
            }}
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default injectIntl(Sidebar);
