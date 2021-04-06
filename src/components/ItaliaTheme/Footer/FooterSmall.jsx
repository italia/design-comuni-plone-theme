/**
 * FooterSmall component.
 * @module components/theme/Footer/FooterSmall
 */

import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';
import { Container } from 'design-react-kit/dist/design-react-kit';
import { settings } from '~/config';

const messages = defineMessages({
  goToPage: {
    id: 'Vai alla pagina',
    defaultMessage: 'Vai alla pagina',
  },
  usefulLinks: {
    id: 'Sezione Link Utili',
    defaultMessage: 'Sezione Link Utili',
  },

  siteMap: {
    id: 'Mappa del sito',
    defaultMessage: 'Mappa del sito',
  },

  footer_media_policy_title: {
    id: 'footer_media_policy_title',
    defaultMessage: 'Media policy',
  },
  footer_media_policy_url: {
    id: 'footer_media_policy_url',
    defaultMessage: '/media-policy',
  },

  footer_legal_notes_title: {
    id: 'footer_legal_notes_title',
    defaultMessage: 'Note legali',
  },
  footer_legal_notes_url: {
    id: 'footer_legal_notes_url',
    defaultMessage: '/note-legali',
  },

  footer_privacy_policy_title: {
    id: 'footer_privacy_policy_title',
    defaultMessage: 'Privacy policy',
  },
  footer_privacy_policy_url: {
    id: 'footer_privacy_policy_url',
    defaultMessage: '/privacy-policy',
  },
  footer_sitemap_title: {
    id: 'footer_sitemap_title',
    defaultMessage: 'Mappa del sito',
  },
  footer_sitemap_url: {
    id: 'footer_sitemap_url',
    defaultMessage: '/sitemap',
  },
});

/**
 * FooterSmall component class.
 * @class FooterSmall
 * @extends Component
 */
const FooterSmall = () => {
  const intl = useIntl();
  const langPath = settings.isMultilingual ? '/' + intl.locale : '';
  return (
    <div className="it-footer-small-prints clearfix">
      <Container tag="div">
        <h3 className="sr-only">{intl.formatMessage(messages.goToPage)}</h3>
        <ul className="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
          <li className="list-inline-item">
            <UniversalLink
              href={
                langPath + intl.formatMessage(messages.footer_media_policy_url)
              }
              title={intl.formatMessage(messages.footer_media_policy_title)}
            >
              {intl.formatMessage(messages.footer_media_policy_title)}
            </UniversalLink>
          </li>
          <li className="list-inline-item">
            <UniversalLink
              href={
                langPath + intl.formatMessage(messages.footer_legal_notes_url)
              }
              title={intl.formatMessage(messages.footer_legal_notes_title)}
            >
              {intl.formatMessage(messages.footer_legal_notes_title)}
            </UniversalLink>
          </li>
          <li className="list-inline-item">
            <UniversalLink
              href={
                langPath +
                intl.formatMessage(messages.footer_privacy_policy_url)
              }
              title={intl.formatMessage(messages.footer_privacy_policy_title)}
            >
              {intl.formatMessage(messages.footer_privacy_policy_title)}
            </UniversalLink>
          </li>
          <li className="list-inline-item">
            <UniversalLink
              href={langPath + intl.formatMessage(messages.footer_sitemap_url)}
              title={intl.formatMessage(messages.footer_sitemap_title)}
            >
              {intl.formatMessage(messages.footer_sitemap_title)}
            </UniversalLink>
          </li>
          <li className="list-inline-item">
            <UniversalLink href="https://www.redturtle.it/" title="Credits">
              Credits
            </UniversalLink>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default FooterSmall;
