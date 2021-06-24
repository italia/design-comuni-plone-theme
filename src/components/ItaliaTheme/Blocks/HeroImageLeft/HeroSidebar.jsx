import React from 'react';
import PropTypes from 'prop-types';

import { Segment } from 'semantic-ui-react';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import { TextWidget } from '@plone/volto/components';

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
});

const HeroSidebar = ({
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
          <FormattedMessage id="Hero" defaultMessage="Hero" />
        </h2>
      </header>

      <Segment className="form">
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
