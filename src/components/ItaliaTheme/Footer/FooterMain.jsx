/**
 * FooterMain component.
 * @module components/Footer/FooterMain
 */

import React from 'react';
import { Container, Row, Col } from 'design-react-kit';

import { UniversalLink } from '@plone/volto/components';
import {
  FooterNavigation,
  FooterInfos,
  LogoFooter,
  BrandTextFooter,
  FooterPNRRLogo,
} from 'design-comuni-plone-theme/components/ItaliaTheme/';

import { FooterTop } from 'volto-editablefooter';

/**
 * FooterMain component class.
 * @class FooterMain
 * @extends Component
 */
const FooterMain = () => {
  const footerTopContent = FooterTop();

  return (
    <div className="it-footer-main">
      <Container tag="div">
        <section>
          <Row className="clearfix" tag="div">
            <Col sm={12} tag="div" widths={['xs', 'sm', 'md', 'lg', 'xl']}>
              <div className="it-brand-wrapper">
                {footerTopContent ?? (
                  <>
                    <FooterPNRRLogo />
                    <UniversalLink href="/">
                      <LogoFooter />
                      <BrandTextFooter />
                    </UniversalLink>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </section>
        <section>
          <FooterNavigation />
        </section>
        <section className="py-4">
          <FooterInfos />
        </section>
      </Container>
    </div>
  );
};

export default FooterMain;
