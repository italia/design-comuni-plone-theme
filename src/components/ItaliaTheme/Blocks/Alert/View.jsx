/**
 * View Alert block.
 * @module components/manage/Blocks/Hero/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Container, Row, Col } from 'design-react-kit';
//import { isCmsUi } from '@plone/volto/helpers';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';

/**
 * View Alert block class.
 * @class View
 * @extends Component
 */
const View = ({ data, id }) => {
  const background_color = data.bg_color ?? data.color; // backwards compatibility with previous background-color variable name 'color'

  return (
    <section role="alert" className="block alertblock">
      <div className={cx('full-width', 'bg-alert-' + background_color)}>
        <Container className="p-4 pt-5 pb-5">
          <Row className="align-items-start">
            {data.image?.data && (
              <Col sm={2} className="pb-3 image-col">
                <img
                  src={`data:${data.image['content-type']};${data.image.encoding},${data.image.data}`}
                  alt=""
                  aria-hidden="true"
                  className={cx('left-image', [
                    data.sizeImage ? 'size-' + data.sizeImage : 'size-l',
                  ])}
                  loading="lazy"
                />
              </Col>
            )}
            <Col>
              <TextBlockView id={id} data={{ value: data.text }} />
            </Col>
          </Row>
        </Container>
      </div>
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
