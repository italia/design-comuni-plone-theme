import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'design-react-kit';
import { defineMessages, useIntl } from 'react-intl';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { UniversalLink } from '@plone/volto/components';
import { CardReadMore } from 'design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';

const messages = defineMessages({
  linkMore: {
    id: 'linkMore',
    defaultMessage: 'Link ad altro',
  },
});

const StoresButtons = ({ data }) => {
  const intl = useIntl();

  return (
    <div className="stores-buttons">
      <div className="buttons">
        {data.playStoreLink && (
          <Button tag={UniversalLink} href={data.playStoreLink} color="primary">
            <span>PLAY STORE</span>
            <Icon icon="fab google-play" title="Play store" />
          </Button>
        )}

        {data.appStoreLink && (
          <Button tag={UniversalLink} href={data.appStoreLink} color="primary">
            <span>APP STORE</span>
            <Icon icon="fab apple" title="App store" />
          </Button>
        )}
      </div>

      {data.moreHref && (
        <CardReadMore
          tag={UniversalLink}
          iconName="it-arrow-right"
          text={data.moreTitle || intl.formatMessage(messages.linkMore)}
          href={flattenToAppURL(data.moreHref)}
        />
      )}
    </div>
  );
};

StoresButtons.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default StoresButtons;
