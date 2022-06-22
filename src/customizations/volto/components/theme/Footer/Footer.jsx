/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { useGoogleAnalytics } from '@italia/addons/volto-google-analytics';

import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

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

const Footer = ({ intl, designReactKit }) => {
  useGoogleAnalytics();
  const currentContent = useSelector((state) => state.content?.data);
  let contentType = null;
  if (currentContent != null) {
    contentType = currentContent?.['@type'];
  }
  const NoCustomerSatisfactionFor = ['Plone Site', 'LRF', 'Subsite'];

  const { Container } = designReactKit;
  let content = (
    <>
      {contentType != null &&
        NoCustomerSatisfactionFor.indexOf(contentType) < 0 &&
        config.settings.siteProperties.enableCustomerSatisfaction && (
          <div className="section section-inset-shadow py-3">
            <Container>
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

export default injectLazyLibs(['designReactKit'])(Footer);
