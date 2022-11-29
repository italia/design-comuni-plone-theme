/**
 * View Accordion block.
 * @module components/ItaliaTheme/Blocks/Accordion/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import redraft from 'redraft';
import ViewBlock from './Block/ViewBlock';
import { Container, Row, Col } from 'design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import config from '@plone/volto/registry';

/**
 * View Accordion block class.
 * @class View
 * @extends Component
 */
const AccordionView = ({ data, block }) => {
  const id = new Date().getTime();
  return (
    <div className="block contacts">
      <div className="public-ui">
        <div
          className={`full-width section bg-${data.bg_color ?? 'primary'} py-5`}
        >
          <Container className="px-md-4">
            <div className="block-header">
              <div className="title">
                {redraft(
                  data.title,
                  config.settings.richtextViewSettings.ToHTMLRenderers,
                  config.settings.richtextViewSettings.ToHTMLOptions,
                )}
              </div>
              <div className="description">
                {redraft(
                  data.description,
                  config.settings.richtextViewSettings.ToHTMLRenderers,
                  config.settings.richtextViewSettings.ToHTMLOptions,
                )}
              </div>
            </div>
            <Row>
              {data.subblocks.map((subblock, index) => (
                <Col lg="4" key={subblock.id}>
                  <ViewBlock
                    data={subblock}
                    key={index}
                    id={id}
                    index={index}
                  />
                </Col>
              ))}
            </Row>

            {data.href && data.linkMoreTitle && (
              <div className="link-button text-center my-4">
                <UniversalLink
                  href={flattenToAppURL(data.href)}
                  className="btn btn-tertiary"
                >
                  {data.linkMoreTitle}
                </UniversalLink>
              </div>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
AccordionView.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AccordionView;
