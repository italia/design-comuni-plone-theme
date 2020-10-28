/**
 * SocialHeader component.
 * @module components/ItaliaTheme/Header/SocialHeader
 */

import React from 'react';
import { siteConfig } from '~/config';
import {
  Icon,
  HeaderSocialsZone,
} from 'design-react-kit/dist/design-react-kit';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  followUs: {
    id: 'Seguici su',
    defaultMessage: 'Seguici su',
  },
});

const SocialHeader = () => {
  const intl = useIntl();

  return (
    <HeaderSocialsZone label={intl.formatMessage(messages.followUs)}>
      <ul>
        {siteConfig.socialSettings?.map((social, idx) => (
          <li key={idx}>
            <a
              title={social.title}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon color="" icon={social.icon} padding={false} size="" />
            </a>
          </li>
        ))}
      </ul>
    </HeaderSocialsZone>
  );
};

export default SocialHeader;
