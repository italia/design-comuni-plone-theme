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

const Footer = () => {
  useGoogleAnalytics();
  const currentContent = useSelector((state) => state.content?.data);
  const contentType = currentContent ? currentContent['@type'] : null;
  const noFeedbackFormFor =
    config.settings.siteProperties.noFeedbackFormFor || [];
  const showFeedbackForm = config.settings.siteProperties
    .enableNoFeedbackFormFor
    ? contentType &&
      !noFeedbackFormFor.includes(contentType) &&
      config.settings.siteProperties.enableFeedbackForm
    : true;

  return (
    <>
      {showFeedbackForm && (
        <div className="public-ui" id="customer-satisfaction-form">
          <FeedbackForm />
        </div>
      )}

      <SubsiteFooter />
      <footer className="it-footer" id="footer">
        <FooterMain />
        <FooterSmall />
      </footer>
    </>
  );
};

export default Footer;
