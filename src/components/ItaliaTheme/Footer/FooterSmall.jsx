/**
 * FooterSmall component.
 * @module components/theme/Footer/FooterSmall
 */

import React, { useState, useEffect } from 'react';
import { UniversalLink } from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';
import { Container } from 'design-react-kit/dist/design-react-kit';
import config from '@plone/volto/registry';

const messages = defineMessages({
  goToPage: {
    id: 'Vai alla pagina',
    defaultMessage: 'Vai alla pagina',
  },
});

/**
 * FooterSmall component class.
 * @class FooterSmall
 * @extends Component
 */
const FooterSmall = () => {
  const intl = useIntl();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const smallFooterLinks_config =
      config.settings.siteProperties?.smallFooterLinks;
    let _links = smallFooterLinks_config['default'] ?? [];
    if (
      config.settings.isMultilingual &&
      smallFooterLinks_config?.[intl.locale]
    ) {
      _links = smallFooterLinks_config?.[intl.locale];
    }

    setLinks(_links);
  }, [intl.locale]);

  return links.length > 0 ? (
    <div className="it-footer-small-prints clearfix">
      <Container tag="div">
        <h3 className="sr-only">{intl.formatMessage(messages.goToPage)}</h3>
        <ul className="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
          {links.map((link) => (
            <li className="list-inline-item" key={link.url}>
              <UniversalLink href={link.url} title={link.title}>
                {link.title}
              </UniversalLink>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  ) : null;
};

export default FooterSmall;
