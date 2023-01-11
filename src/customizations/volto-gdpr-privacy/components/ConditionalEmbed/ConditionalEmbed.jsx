/*
CUSTOMIZATIONS
  - permit render if server, cannot use in history diff otherwise
*/

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useIntl, defineMessages } from 'react-intl';
import { useLocation } from 'react-router-dom';
import {
  displayBanner,
  updateGdprPrivacyConsent,
} from 'volto-gdpr-privacy/actions';

import {
  usePanelConfigAndPreferences,
  GDPRCookies,
  getLocaleConf,
} from 'volto-gdpr-privacy/helpers';

import 'volto-gdpr-privacy/components/ConditionalEmbed/conditional-embed.css';

const messages = defineMessages({
  conditionalEmbedAcceptCookiesDefaultDescription: {
    id: 'volto-gdpr-privacy-conditional-embed-default-description',
    defaultMessage:
      'Please, accept {cookie_type} cookies to view this content.',
  },
  conditionalEmbedAcceptCookiesAcceptMessage: {
    id: 'volto-gdpr-privacy-conditional-embed-accept-message',
    defaultMessage: '{enable_cookie_button}, or {manage_preferences_button}',
  },
  specificCookieLink: {
    id: 'volto-gdpr-privacy-conditional-embed-specific-cookie-link',
    defaultMessage: 'Enable {cookie_type} cookies',
  },
  genericCookieLink: {
    id: 'volto-gdpr-privacy-conditional-embed-generic-cookie-link',
    defaultMessage: 'manage your cookie preferences',
  },
});
const ConditionalEmbed = ({ code, url, children }) => {
  const intl = useIntl();
  const cookies = new GDPRCookies();
  const embed = code ?? url ?? '';
  const dispatch = useDispatch();
  const location = useLocation();

  const { defaultPreferences } = usePanelConfigAndPreferences(cookies);
  const profilingConfig = useSelector((state) =>
    state.gdprPrivacyConfig?.config?.profiling?.choices?.filter(
      (c) => c?.referenceUrls?.length > 0,
    ),
  );
  const gdprPreferences = useSelector(
    (state) => state.gdprPrivacyConsent.preferences ?? defaultPreferences,
  );
  const [urlReferenceConfig, setUrlReferenceConfig] = useState(null);

  useEffect(() => {
    if (profilingConfig && !urlReferenceConfig) {
      let conditionalConfig = profilingConfig.filter(
        (c) =>
          c.referenceUrls.filter((r) => embed?.indexOf(r) >= 0)?.length > 0,
      );

      setUrlReferenceConfig(conditionalConfig?.[0] ?? null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profilingConfig, setUrlReferenceConfig, urlReferenceConfig, embed]);

  //return value
  let ret = <></>;
  let embedDisabled = true;

  embedDisabled =
    urlReferenceConfig != null &&
    !gdprPreferences[urlReferenceConfig.config_key];
  const isDiffView = location.pathname?.includes('/diff');
  if (__CLIENT__ && !gdprPreferences && !isDiffView) {
    return <></>;
  } else if (embedDisabled && !isDiffView) {
    //embed disabled
    const text = getLocaleConf(urlReferenceConfig.text, intl.locale);
    const key = urlReferenceConfig.config_key;
    ret = (
      <div className="volto-gdpr-embed-disabled">
        {text.conditional_embed_text ??
          intl.formatMessage(
            messages.conditionalEmbedAcceptCookiesDefaultDescription,
            { cookie_type: key },
          )}{' '}
        {intl.formatMessage(
          messages.conditionalEmbedAcceptCookiesAcceptMessage,
          {
            enable_cookie_button: (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  cookies.set(key, true);
                  dispatch(
                    updateGdprPrivacyConsent({
                      ...gdprPreferences,
                      [key]: true,
                    }),
                  );
                }}
              >
                {intl.formatMessage(messages.specificCookieLink, {
                  cookie_type: key,
                })}
              </button>
            ),
            manage_preferences_button: (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(displayBanner(true, true));
                }}
              >
                {intl.formatMessage(messages.genericCookieLink)}
              </button>
            ),
          },
        )}
      </div>
    );
  } else {
    ret = <>{children}</>;
  }

  return ret;
};

export default ConditionalEmbed;
