import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion } from 'semantic-ui-react';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';
import { TextWidget } from '@plone/volto/components';
import { LinkToWidget } from '@italia/components/ItaliaTheme';

const messages = defineMessages({
  News: {
    id: 'News',
    defaultMessage: 'News',
  },
  LinkToTitle: {
    id: 'Linkto title',
    defaultMessage: 'Testo per il link ad altro',
  },
  LinkMore: {
    id: 'LinkMore',
    defaultMessage: 'Link ad altro',
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
          <FormattedMessage
            id="NewsHome"
            defaultMessage="News con immagine in primo piano"
          />
        </h2>
      </header>

      <Segment className="form">
        <LinkToWidget
          data={data}
          openObjectBrowser={openObjectBrowser}
          title={intl.formatMessage(messages.News)}
          showTarget={false}
          onChange={(name, value) =>
            onChangeBlock(block, {
              ...data,
              [name]: value,
            })
          }
        />
      </Segment>
      <Accordion fluid styled className="form">
        <Accordion.Title active={true} index={0} onClick={() => {}}>
          {intl.formatMessage(messages.LinkMore)}
        </Accordion.Title>
        <Accordion.Content active={true}>
          <TextWidget
            id="moreTitle"
            title={intl.formatMessage(messages.LinkToTitle)}
            required={false}
            value={data.moreTitle}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                [name]: value,
              });
            }}
          />

          <LinkToWidget
            data={data}
            openObjectBrowser={openObjectBrowser}
            linkField="moreHref"
            showTarget={false}
            onChange={(name, value) =>
              onChangeBlock(block, {
                ...data,
                [name]: value,
              })
            }
          />
        </Accordion.Content>
      </Accordion>
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
