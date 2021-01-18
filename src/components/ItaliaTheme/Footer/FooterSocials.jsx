/**
 * FooterSocials component.
 * @module components/ItaliaTheme/Header/FooterSocials
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Icon } from '@italia/components/ItaliaTheme';
import { getSocialSettings } from '@italia/addons/volto-social-settings';

const FooterSocials = () => {
  const socialSettings = useSelector((state) => state.socialSettings?.results);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSocialSettings());
  }, [dispatch]);

  return (
    socialSettings?.length > 0 && (
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
    )
  );
};

export default FooterSocials;
