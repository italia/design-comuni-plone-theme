/**
 * FooterMain component.
 * @module components/Footer/FooterMain
 */

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Icon,
} from 'design-react-kit/dist/design-react-kit';

import { FooterNavigation, FooterInfos } from '@italia/components/ItaliaTheme/';

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
                  <Icon color="" icon="it-pa" padding={false} size="" />
                  <div className="it-brand-text">
                    <h2 className="no_toc">Nome del Comune</h2>
                    <h3 className="no_toc d-none d-md-block">
                      Uno dei tanti Comuni d'Italia
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
