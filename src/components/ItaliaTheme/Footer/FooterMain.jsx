/**
 * FooterMain component.
 * @module components/Footer/FooterMain
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'design-react-kit/dist/design-react-kit';

import {
  FooterNavigation,
  FooterInfos,
  LogoFooter,
} from '@italia/components/ItaliaTheme/';
import { siteConfig } from '~/config';

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
                <Link to="/">
                  <LogoFooter />
                  <div className="it-brand-text">
                    <h2 className="no_toc">
                      {siteConfig.properties.siteTitle}
                    </h2>
                    <h3 className="no_toc d-none d-md-block">
                      {siteConfig.properties.siteSubtitle}
                    </h3>
                  </div>
                </Link>
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
