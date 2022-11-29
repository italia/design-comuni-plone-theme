/**
 * SocialHeader component.
 * @module components/ItaliaTheme/Header/SocialHeader
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import { isEmpty } from 'lodash';

import { HeaderSocialsZone } from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { getSocialSettings } from 'volto-social-settings';

const messages = defineMessages({
  followUs: {
    id: 'Seguici su',
    defaultMessage: 'Seguici su',
  },
  socialOpen: {
    id: 'Nuova scheda',
    defaultMessage: '- apri in nuova scheda',
  },
});

const SocialHeader = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const socialSettings = useSelector((state) => state?.socialSettings); //useSelector((state) => state?.socialSettings?.results);
  const subsite = useSelector((state) => state.subsite?.data);

  const items = isEmpty(socialSettings.results) ? [] : socialSettings.results;

  useEffect(() => {
    if (!socialSettings?.loadingResults && items.length === 0) {
      dispatch(getSocialSettings());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const socials =
    subsite?.subsite_social_links?.length > 0
      ? JSON.parse(subsite.subsite_social_links)
      : items;

  return (
    socials?.length > 0 && (
      <HeaderSocialsZone label={intl.formatMessage(messages.followUs)}>
        <ul>
          {socials?.map((social, idx) => (
            <li key={idx}>
              <a
                title={
                  social.title + ' ' + intl.formatMessage(messages.socialOpen)
                }
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
