/**
 * ViewBlock.
 * @module components/ItaliaTheme/Blocks/Accordion/Block/ViewBlock
 */

import React from 'react';
import PropTypes from 'prop-types';
import redraft from 'redraft';

import { Icon } from '@italia/components/ItaliaTheme';
import { Card, CardBody } from 'design-react-kit/dist/design-react-kit';
import config from '@plone/volto/registry';

/**
 * ViewBlock class.
 * @class ViewBlock
 * @extends Component
 */
const ViewBlock = ({ data, isOpen, toggle, id, index }) => {
  return (
    <Card
      className="card-bg rounded subblock-view"
      noWrapper={false}
      space
      tag="div"
    >
      <CardBody tag="div">
        {data.title && (
          <div className="contact-title">
            {redraft(
              data.title,
              config.settings.ToHTMLRenderers,
              config.settings.ToHTMLOptions,
            )}
          </div>
        )}
        {data.text && (
          <div className="contact-text">
            {redraft(
              data.text,
              config.settings.ToHTMLRenderers,
              config.settings.ToHTMLOptions,
            )}
          </div>
        )}

        {data.tel && (
          <div className="contact-info">
            <div className="icon-wrapper">
              <Icon icon="phone-alt" />
            </div>
            <div className="tel">
              {redraft(
                data.tel,
                config.settings.ToHTMLRenderers,
                config.settings.ToHTMLOptions,
              )}
            </div>
          </div>
        )}

        {data.email && (
          <div className="contact-info">
            <div className="icon-wrapper">
              <Icon icon="envelope" />
            </div>
            <div className="email">
              {redraft(
                data.email,
                config.settings.ToHTMLRenderers,
                config.settings.ToHTMLOptions,
              )}
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ViewBlock.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ViewBlock;
