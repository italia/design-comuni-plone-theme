/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { useGoogleAnalytics } from '@italia/addons/volto-google-analytics';
import { Container } from 'design-react-kit/dist/design-react-kit';

import {
  FooterMain,
  FooterSmall,
  SubsiteFooter,
} from '@italia/components/ItaliaTheme/';

import { CustomerSatisfaction } from '@italia/components/ItaliaTheme';
import config from '@plone/volto/registry';
/**
 * Footer component class.
 * @class Footer
 * @extends Component
 */

const Footer = ({ intl }) => {
  useGoogleAnalytics();
  const currentContent = useSelector((state) => state.content?.data);
  let contentType = null;
  if (currentContent != null) {
    contentType = currentContent?.['@type'];
  }
  const NoCustomerSatisfactionFor = ['Plone Site', 'LRF', 'Subsite'];

  let content = (
    <>
      {contentType != null &&
        NoCustomerSatisfactionFor.indexOf(contentType) < 0 &&
        config.settings.siteProperties.enableCustomerSatisfaction && (
          <div className="section section-inset-shadow py-3 px-0">
            <Container className="px-4">
              <CustomerSatisfaction />
            </Container>
          </div>
        )}

      <SubsiteFooter />
      <footer className="it-footer" id="footer">
        <FooterMain />
        <FooterSmall />
      </footer>
    </>
  );

  return content;
};

export default Footer;
