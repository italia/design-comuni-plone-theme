/**
 * FooterSocials component.
 * @module components/ItaliaTheme/Header/FooterSocials
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

const FooterSocials = () => {
  const intl = useIntl();
  const socialSettings = useSelector((state) => state.socialSettings?.results);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSocialSettings());
  }, [dispatch]);

  return (
    socialSettings?.length > 0 && (
      <HeaderSocialsZone label={intl.formatMessage(messages.followUs)}>
        <ul className="list-inline text-left social">
          {socialSettings?.map((social, idx) => (
            <li className="list-inline-item" key={idx}>
              <a
                title={social.title}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white"
              >
                <Icon
                  icon={social.icon}
                  color="white"
                  className="align-top"
                  padding={false}
                  size="sm"
                />
                <span className="sr-only">{social.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </HeaderSocialsZone>
    )
  );
};

export default FooterSocials;
