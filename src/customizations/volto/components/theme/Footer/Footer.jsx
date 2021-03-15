/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { useGoogleAnalytics } from '@italia/addons/volto-google-analytics';

// import { isCmsUi } from '@plone/volto/helpers';
import {
  FooterMain,
  FooterSmall,
  SubsiteFooter,
} from '@italia/components/ItaliaTheme/';
import { CookieBanner } from '@italia/addons/volto-cookie-banner';

/**
 * Footer component class.
 * @class Footer
 * @extends Component
 */

const Footer = ({ intl }) => {
  useGoogleAnalytics();
  const isCmsUI = false; //isCmsUi(this.props.pathname);

  let content = (
    <>
      <SubsiteFooter />
      <footer className="it-footer" id="footer">
        <FooterMain />
        <FooterSmall />
      </footer>
      {__CLIENT__ && <CookieBanner />}
    </>
  );

  return isCmsUI ? <div className="public-ui">{content}</div> : content;
};

export default Footer;
