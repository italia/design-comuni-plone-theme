/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { useGoogleAnalytics } from '@italia/addons/volto-google-analytics';
import { Container } from 'design-react-kit/dist/design-react-kit';
import {
  FooterMain,
  FooterSmall,
  SubsiteFooter,
} from '@italia/components/ItaliaTheme/';
import { CookieBanner } from '@italia/addons/volto-cookie-banner';
import { CustomerSatisfaction } from '@italia/addons/volto-customer-satisfaction';

/**
 * Footer component class.
 * @class Footer
 * @extends Component
 */

const Footer = ({ intl }) => {
  useGoogleAnalytics();

  let content = (
    <>
      <Container>
        <CustomerSatisfaction />
      </Container>

      <SubsiteFooter />
      <footer className="it-footer" id="footer">
        <FooterMain />
        <FooterSmall />
      </footer>
      {__CLIENT__ && <CookieBanner />}
    </>
  );

  return content;
};

export default Footer;
