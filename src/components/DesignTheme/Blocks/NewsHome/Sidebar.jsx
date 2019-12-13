import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { Grid, Segment } from 'semantic-ui-react';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import { TextWidget } from '@plone/volto/components';

import clearSVG from '@plone/volto/icons/clear.svg';
import navTreeSVG from '@plone/volto/icons/nav.svg';

const messages = defineMessages({
  News: {
    id: 'News',
    defaultMessage: 'News',
  },
});

class Sidebar extends Component {
  static propTypes = {
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    block: PropTypes.string.isRequired,
    onChangeBlock: PropTypes.func.isRequired,
    openObjectBrowser: PropTypes.func.isRequired,
    loadNews: PropTypes.func.isRequired,
  };
  render() {
    return (
      <Segment.Group raised>
        <header className="header pulled">
          <h2>
            <FormattedMessage id="NewsHome" defaultMessage="News Home" />
          </h2>
        </header>

        <Segment className="form">
          <Form.Field inline required={this.props.required}>
            <Grid>
              <Grid.Row>
                <Grid.Column width="12" verticalAlign="middle">
                  <TextWidget
                    id="news"
                    title={this.props.intl.formatMessage(messages.News)}
                    required={false}
                    value={this.props.data.href}
                    icon={this.props.data.href ? clearSVG : navTreeSVG}
                    iconAction={
                      this.props.data.href
                        ? () => {
                            this.props.onChangeBlock(this.props.block, {
                              ...this.props.data,
                              href: '',
                            });
                          }
                        : () => this.props.openObjectBrowser({ mode: 'link' })
                    }
                    onChange={(name, value) => {
                      this.props.onChangeBlock(this.props.block, {
                        ...this.props.data,
                        href: value,
                      });
                      this.props.loadNews();
                    }}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form.Field>
        </Segment>
      </Segment.Group>
    );
  }
}

export default injectIntl(Sidebar);
