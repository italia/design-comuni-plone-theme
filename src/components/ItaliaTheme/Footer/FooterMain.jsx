/**
 * FooterMain component.
 * @module components/Footer/FooterMain
 */

import React from 'react';
import { Container, Row, Col } from 'design-react-kit/dist/design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import {
  FooterNavigation,
  FooterInfos,
  LogoFooter,
} from '@italia/components/ItaliaTheme/';
import config from '@plone/volto/registry';

/**
 * FooterMain component class.
 * @class FooterMain
 * @extends Component
 */
const FooterMain = () => {
  return (
    <div className="it-footer-main">
      <Container tag="div">
        <section>
          <Row className="clearfix" tag="div">
            <Col sm={12} tag="div" widths={['xs', 'sm', 'md', 'lg', 'xl']}>
              <div className="it-brand-wrapper">
                <UniversalLink href="/">
                  <LogoFooter />
                  <div className="it-brand-text">
                    <h2 className="no_toc">
                      {config.siteConfig.properties.siteTitle}
                    </h2>
                    <h3 className="no_toc d-none d-md-block">
                      {config.siteConfig.properties.siteSubtitle}
                    </h3>
                  </div>
                </UniversalLink>
              </div>
            </Col>
          </Row>
        </section>
        <section>
          <FooterNavigation />
        </section>
        <section className="py-4 border-white border-top">
          <FooterInfos />
        </section>
      </Container>
    </div>
  );
};

export default FooterMain;
