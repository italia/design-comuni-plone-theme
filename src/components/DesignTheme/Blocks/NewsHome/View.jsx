/**
 * View image block.
 * @module components/manage/Blocks/Hero/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from 'design-react-kit/dist/design-react-kit';
import { Link } from 'react-router-dom';
import { isCmsUi } from '@plone/volto/helpers';
import {
  BITIcon,
  it_calendar,
  it_arrow_right,
} from '@design/components/DesignTheme/Icons';
/**
 * View image block class.
 * @class View
 * @extends Component
 */
const View = ({ data, pathname }) => {
  const isCmsUI = pathname ? isCmsUi(pathname) : false;

  return (
    <section
      id="news-home"
      className={cx('row row-full-width', { 'public-ui': isCmsUI })}
    >
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 1, order: 2 }}>
            <img
              src="https://picsum.photos/800/600"
              title="img title"
              alt="imagealt"
              className="img-fluid"
            />
          </Col>
          <Col lg={{ span: 5, order: 1 }}>
            <Card>
              <CardBody className="pb-5">
                <div className="category-top">
                  <BITIcon name={it_calendar} />
                  <Link to="#" className="category">
                    Notizie
                  </Link>
                  <span className="data">18 mag 2018</span>
                </div>
                <CardTitle as="h1" className="h4">
                  Parte l'estate con oltre 300 eventi in centro e nei quartieri,
                  tutti gli eventi previsti
                </CardTitle>
                <CardText>
                  Inaugurazione lunedì 2 luglio con il concerto gratuito in
                  piazza XX Settembre degli Sweet Soul Revue. Sul palco 20
                  musicisti da tutto il mondo.
                </CardText>
                <div className="chip chip-simple chip-primary">
                  <Link to="#" className="chip-label">
                    Estate in città
                  </Link>
                </div>
                <Link className="read-more pb-3" to="#">
                  <span className="text">Tutte le novità</span>
                  <BITIcon name={it_arrow_right} />
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default View;
