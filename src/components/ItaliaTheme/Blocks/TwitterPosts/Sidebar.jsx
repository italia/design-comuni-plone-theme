import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Form } from 'semantic-ui-react';
import {
  defineMessages,
  useIntl,
  FormattedMessage,
  injectIntl,
} from 'react-intl';

import { TextWidget } from '@plone/volto/components';

const messages = defineMessages({
  title: {
    id: 'title',
    defaultMessage: 'Titolo',
  },

  twitterAccounts: {
    id: 'twitterAccounts',
    defaultMessage: 'Accounts',
  },
  twitterAccounts_description: {
    id: 'twitterAccounts_description',
    defaultMessage:
      'Inserisci i nomi degli account di cui vuoi visualizzare i post, separati da virgola. Ad esempio, se vuoi mostrare i tweet di Repubblica e del Corriere della Sera, inserisci “repubblica,Corriere".',
  },
  twitterAccountLink: {
    id: 'twitterAccountLink',
    defaultMessage: 'Link alla pagina del profilo',
  },
});

const Sidebar = ({
  data,
  block,
  onChangeBlock,
  onChangeSubBlock,
  selected = 0,
  setSelected,
  openObjectBrowser,
}) => {
  const intl = useIntl();

  return (
    <Form>
      <Segment.Group raised form>
        <header className="header pulled">
          <h2>
            <FormattedMessage
              id="Twitter Posts"
              defaultMessage="Twitter Posts"
            />
          </h2>
        </header>
        <Segment>
          <TextWidget
            id="title"
            title={intl.formatMessage(messages.title)}
            required={false}
            value={data.title}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                [name]: value,
              });
            }}
          />
          <TextWidget
            id="twitter_accounts"
            description={intl.formatMessage(
              messages.twitterAccounts_description,
            )}
            title={intl.formatMessage(messages.twitterAccounts)}
            required={false}
            value={data.twitter_accounts}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                [name]: value,
              });
            }}
          />
        </Segment>
      </Segment.Group>
    </Form>
  );
};

Sidebar.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  block: PropTypes.string,
  onChangeBlock: PropTypes.func,
  selected: PropTypes.any,
  setSelected: PropTypes.func,
};

export default injectIntl(Sidebar);
