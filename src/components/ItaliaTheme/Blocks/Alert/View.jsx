/**
 * View Alert block.
 * @module components/manage/Blocks/Hero/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import redraft from 'redraft';
import { Container, Row, Col } from 'design-react-kit';
//import { isCmsUi } from '@plone/volto/helpers';
import config from '@plone/volto/registry';

/**
 * View Alert block class.
 * @class View
 * @extends Component
 */
const View = ({ data, pathname }) => {
  //const isCmsUI = pathname ? isCmsUi(pathname) : false

  const content = data.text
    ? redraft(
        data.text,
        config.settings.richtextViewSettings.ToHTMLRenderers,
        config.settings.richtextViewSettings.ToHTMLOptions,
      )
    : '';

  return (
    <section role="alert" className="block alertblock">
      <Row className={cx('row-full-width', 'bg-alert-' + data.color)}>
        <Container className="p-4 pt-5 pb-5">
          <Row className="align-items-start">
            {data.image?.data && (
              <Col sm={2} className="pb-3 image-col">
                <img
                  src={`data:${data.image['content-type']};${data.image.encoding},${data.image.data}`}
                  alt=""
                  aria-hidden="true"
                  className="left-image"
                  loading="lazy"
                />
              </Col>
            )}
            <Col>{content}</Col>
          </Row>
        </Container>
      </Row>
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

export default React.memo(View);
