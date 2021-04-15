/**
 * FooterMain component.
 * @module components/Footer/FooterMain
 */

import React from 'react';
import { Container, Row, Col } from 'design-react-kit/dist/design-react-kit';
import { useIntl } from 'react-intl';

import { UniversalLink } from '@plone/volto/components';
import {
  FooterNavigation,
  FooterInfos,
  LogoFooter,
} from '@italia/components/ItaliaTheme/';
import { getSiteProperty } from '@italia/helpers';

/**
 * FooterMain component class.
 * @class FooterMain
 * @extends Component
 */
const FooterMain = () => {
  const intl = useIntl();
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
                      {getSiteProperty('siteTitle', intl.locale)}
                    </h2>
                    <h3 className="no_toc d-none d-md-block">
                      {getSiteProperty('siteSubtitle', intl.locale)}
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
