/**
 * FooterSmall component.
 * @module components/theme/Footer/FooterSmall
 */

import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';
import { Container } from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({
  goToPage: {
    id: 'Vai alla pagina',
    defaultMessage: 'Vai alla pagina',
  },
  usefulLinks: {
    id: 'Sezione Link Utili',
    defaultMessage: 'Sezione Link Utili',
  },
  legalNotes: {
    id: 'Note legali',
    defaultMessage: 'Note legali',
  },
  siteMap: {
    id: 'Mappa del sito',
    defaultMessage: 'Mappa del sito',
  },
});

/**
 * FooterSmall component class.
 * @class FooterSmall
 * @extends Component
 */
const FooterSmall = () => {
  const intl = useIntl();

  return (
    <div className="it-footer-small-prints clearfix">
      <Container tag="div">
        <h3 className="sr-only">{intl.formatMessage(messages.goToPage)}</h3>
        <ul className="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
          <li className="list-inline-item">
            <UniversalLink
              href="#"
              title={intl.formatMessage(messages.legalNotes)}
            >
              Media policy
            </UniversalLink>
          </li>
          <li className="list-inline-item">
            <UniversalLink
              href="#"
              title={intl.formatMessage(messages.legalNotes)}
            >
              {intl.formatMessage(messages.legalNotes)}
            </UniversalLink>
          </li>
          <li className="list-inline-item">
            <UniversalLink href="#" title="Privacy-Cookies">
              Privacy policy
            </UniversalLink>
          </li>
          <li className="list-inline-item">
            <UniversalLink
              href="#"
              title={intl.formatMessage(messages.siteMap)}
            >
              {intl.formatMessage(messages.siteMap)}
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
