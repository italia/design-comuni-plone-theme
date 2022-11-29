/**
 * ViewBlock.
 * @module components/ItaliaTheme/Blocks/Accordion/Block/ViewBlock
 */

import React from 'react';
import PropTypes from 'prop-types';
import redraft from 'redraft';

import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { Card, CardBody } from 'design-react-kit';
import config from '@plone/volto/registry';
import { checkRedraftHasContent } from 'design-comuni-plone-theme/helpers';

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
        {checkRedraftHasContent(data.title) && (
          <div className="contact-title">
            {redraft(
              data.title,
              config.settings.richtextViewSettings.ToHTMLRenderers,
              config.settings.richtextViewSettings.ToHTMLOptions,
            )}
          </div>
        )}
        {checkRedraftHasContent(data.text) && (
          <div className="contact-text">
            {redraft(
              data.text,
              config.settings.richtextViewSettings.ToHTMLRenderers,
              config.settings.richtextViewSettings.ToHTMLOptions,
            )}
          </div>
        )}

        {checkRedraftHasContent(data.tel) && (
          <div className="contact-info">
            <div className="icon-wrapper">
              <Icon icon="phone-alt" />
            </div>
            <div className="tel">
              {redraft(
                data.tel,
                config.settings.richtextViewSettings.ToHTMLRenderers,
                config.settings.richtextViewSettings.ToHTMLOptions,
              )}
            </div>
          </div>
        )}

        {checkRedraftHasContent(data.email) && (
          <div className="contact-info">
            <div className="icon-wrapper">
              <Icon icon="envelope" />
            </div>
            <div className="email">
              {redraft(
                data.email,
                config.settings.richtextViewSettings.ToHTMLRenderers,
                config.settings.richtextViewSettings.ToHTMLOptions,
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
