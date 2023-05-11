/**
 * View Alert block.
 * @module components/manage/Blocks/Hero/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import redraft from 'redraft';
import { Container, Row, Col } from 'design-react-kit/dist/design-react-kit';
import { Icon } from '@italia/components/ItaliaTheme';
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
    <section role="alert" className="block infoblock">
      <Row
        className={cx('py-3', {
          ['bg-alert-' + data.color]: data.color,
          ['bg-color-' + data.bg_color]: data.bg_color,
        })}
      >
        <Container>
          <Row className="align-items-start">
            <Col sm={1} className="pb-3 image-col">
              <Icon
                className="left-image"
                icon="it-info-circle"
                size="lg"
                loading="lazy"
              />
            </Col>

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
