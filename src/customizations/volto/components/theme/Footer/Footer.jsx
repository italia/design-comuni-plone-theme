/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { useGoogleAnalytics } from 'volto-google-analytics';

import {
  FooterMain,
  FooterSmall,
  SubsiteFooter,
} from 'design-comuni-plone-theme/components/ItaliaTheme/';

import { FeedbackForm } from 'design-comuni-plone-theme/components/ItaliaTheme';
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
  // const NoFeedbackFormFor = ['Plone Site', 'LRF', 'Subsite'];
  const NoFeedbackFormFor = [];

  let content = (
    <>
      {contentType != null &&
        NoFeedbackFormFor.indexOf(contentType) < 0 &&
        config.settings.siteProperties.enableFeedbackForm && <FeedbackForm />}

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
