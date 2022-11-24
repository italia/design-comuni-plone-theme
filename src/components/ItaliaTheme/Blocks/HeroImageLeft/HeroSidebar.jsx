import React from 'react';
import PropTypes from 'prop-types';

import { Segment, Accordion } from 'semantic-ui-react';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import { TextWidget, CheckboxWidget } from '@plone/volto/components';
import { LinkToWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';

import clearSVG from '@plone/volto/icons/clear.svg';

const messages = defineMessages({
  appStoreLink: {
    id: 'appStoreLink',
    defaultMessage: 'APPStore Link',
  },
  playStoreLink: {
    id: 'playStoreLink',
    defaultMessage: 'PlayStore Link',
  },
  show_block_bg: {
    id: 'Mostra lo sfondo del blocco',
    defaultMessage: 'Mostra lo sfondo del blocco',
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

const HeroSidebar = ({
  data,
  block,
  onChangeBlock,
  openObjectBrowser,
  required = false,
  intl,
}) => {
  if (data.show_block_bg === undefined) {
    onChangeBlock(block, {
      ...data,
      show_block_bg: true,
    });
  }

  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="Hero" defaultMessage="Hero" />
        </h2>
      </header>

      <Segment className="form">
        <CheckboxWidget
          id="show_block_bg"
          title={intl.formatMessage(messages.show_block_bg)}
          value={data.show_block_bg ? data.show_block_bg : false}
          onChange={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
        />
        <TextWidget
          id="appStoreLink"
          title={intl.formatMessage(messages.appStoreLink)}
          required={false}
          value={data.appStoreLink ?? ''}
          icon={data.appStoreLink ? clearSVG : null}
          iconAction={() =>
            onChangeBlock(block, {
              ...data,
              appStoreLink: null,
            })
          }
          onChange={(name, value) => {
            onChangeBlock(block, {
              ...data,
              appStoreLink: value,
            });
          }}
        />

        <TextWidget
          id="playStoreLink"
          title={intl.formatMessage(messages.playStoreLink)}
          required={false}
          value={data.playStoreLink ?? ''}
          icon={data.playStoreLink ? clearSVG : null}
          iconAction={() =>
            onChangeBlock(block, {
              ...data,
              playStoreLink: null,
            })
          }
          onChange={(name, value) => {
            onChangeBlock(block, {
              ...data,
              playStoreLink: value,
            });
          }}
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

HeroSidebar.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
  openObjectBrowser: PropTypes.func.isRequired,
  resetSubmitUrl: PropTypes.func.isRequired,
};

export default injectIntl(HeroSidebar);
