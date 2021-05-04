/**
 * SocialHeader component.
 * @module components/ItaliaTheme/Header/SocialHeader
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import { HeaderSocialsZone } from 'design-react-kit/dist/design-react-kit';
import { Icon } from '@italia/components/ItaliaTheme';
import { getSocialSettings } from '@italia/addons/volto-social-settings';

const messages = defineMessages({
  followUs: {
    id: 'Seguici su',
    defaultMessage: 'Seguici su',
  },
});

const SocialHeader = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const socialSettings = useSelector((state) => state?.socialSettings?.results); //useSelector((state) => state?.socialSettings?.results);
  const subsite = useSelector((state) => state.subsite?.data);

  useEffect(() => {
    dispatch(getSocialSettings());
  }, [dispatch]);

  const socials =
    subsite?.subsite_social_links?.length > 0
      ? JSON.parse(subsite.subsite_social_links)
      : socialSettings;

  return (
    socials?.length > 0 && (
      <HeaderSocialsZone label={intl.formatMessage(messages.followUs)}>
        <ul>
          {socials?.map((social, idx) => (
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
    )
  );
};

export default SocialHeader;
