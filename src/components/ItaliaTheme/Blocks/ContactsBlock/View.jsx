/**
 * View Accordion block.
 * @module components/ItaliaTheme/Blocks/Accordion/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import ViewBlock from './Block/ViewBlock';
import { Container, Row, Col } from 'design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
/**
 * View Accordion block class.
 * @class View
 * @extends Component
 */
const AccordionView = ({ data, block, id }) => {
  const now = new Date().getTime();
  return (
    <div className="block contacts" id={id}>
      <div className="public-ui">
        <div
          className={`full-width section bg-${data.bg_color ?? 'primary'} py-5`}
        >
          <Container className="px-md-4">
            {(data.title || data.description) && (
              <div className="block-header">
                {data.title && <div className="title">{data.title}</div>}
                {data.description && (
                  <div className="description">
                    <TextBlockView id={id} data={{ value: data.description }} />
                  </div>
                )}
              </div>
            )}
            <Row
              className={
                data.subblocks.length > 3
                  ? 'justify-content-start'
                  : 'justify-content-center'
              }
            >
              {data.subblocks.map((subblock, index) => (
                <Col lg="4" key={subblock.id} className="pb-3">
                  <ViewBlock
                    data={subblock}
                    key={index}
                    id={now}
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
