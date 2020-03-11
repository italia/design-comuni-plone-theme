import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { Grid, Segment } from 'semantic-ui-react';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';
import { TextWidget } from '@plone/volto/components';

import clearSVG from '@plone/volto/icons/clear.svg';
import navTreeSVG from '@plone/volto/icons/nav.svg';

const messages = defineMessages({
  News: {
    id: 'News',
    defaultMessage: 'News',
  },
});

const Sidebar = ({
  block,
  data,
  onChangeBlock,
  openObjectBrowser,
  required,
}) => {
  const intl = useIntl();

  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="NewsHome" defaultMessage="News Home" />
        </h2>
      </header>

      <Segment className="form">
        <Form.Field inline required={required}>
          <Grid>
            <Grid.Row>
              <Grid.Column width="12" verticalAlign="middle">
                <TextWidget
                  id="news"
                  title={intl.formatMessage(messages.News)}
                  required={false}
                  value={data.href}
                  icon={data.href ? clearSVG : navTreeSVG}
                  iconAction={
                    data.href
                      ? () => {
                          onChangeBlock(block, {
                            ...data,
                            href: '',
                          });
                        }
                      : () => openObjectBrowser({ mode: 'link' })
                  }
                  onChange={(name, value) => {
                    onChangeBlock(block, {
                      ...data,
                      href: value,
                    });
                  }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form.Field>
      </Segment>
    </Segment.Group>
  );
};

Sidebar.propTypes = {
  block: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  onChangeBlock: PropTypes.func.isRequired,
  openObjectBrowser: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default Sidebar;
