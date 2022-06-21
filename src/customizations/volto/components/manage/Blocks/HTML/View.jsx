/**
 * View html block.
 * @module components/manage/Blocks/HTML/View
 *
 * Customizations:
 * - added ConditionalEmbed wrapper component
 * - added bgColor
 * - added showFullWidths
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ConditionalEmbed } from 'volto-gdpr-privacy';

/**
 * View html block class.
 * @class View
 * @extends Component
 */
const View = ({ data }) => (
  <ConditionalEmbed code={data.html}>
    <div
      className={cx('block html py-5', {
        'full-width': data.showFullWidth,
        'bg-light': data.bgColor,
      })}
    >
      <div
        className="container px-4"
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
    </div>
  </ConditionalEmbed>
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default View;
