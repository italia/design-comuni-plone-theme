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
                <FooterPNRRLogo />
                <UniversalLink href="/">
                  <LogoFooter />
                  <BrandTextFooter />
                </UniversalLink>
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
