/**
 * FooterMain component.
 * @module components/Footer/FooterMain
 */

import React from 'react';

import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { UniversalLink } from '@plone/volto/components';
import {
  FooterNavigation,
  FooterInfos,
  LogoFooter,
  BrandTextFooter,
} from '@italia/components/ItaliaTheme/';

/**
 * FooterMain component class.
 * @class FooterMain
 * @extends Component
 */
const FooterMain = ({ designReactKit }) => {
  const { Container, Row, Col } = designReactKit;
  return (
    <div className="it-footer-main">
      <Container tag="div">
        <section>
          <Row className="clearfix" tag="div">
            <Col sm={12} tag="div" widths={['xs', 'sm', 'md', 'lg', 'xl']}>
              <div className="it-brand-wrapper">
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
        <section className="py-4 border-white border-top">
          <FooterInfos />
        </section>
      </Container>
    </div>
  );
};

export default injectLazyLibs(['designReactKit'])(FooterMain);
