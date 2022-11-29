/**
 * View block.
 * @module components/ItaliaTheme/Blocks/Accordion/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import redraft from 'redraft';
import ViewBlock from './Block/ViewBlock';
import { Container, Row, Col } from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { addAppURL, flattenToAppURL } from '@plone/volto/helpers';
import config from '@plone/volto/registry';

/**
 * View block class.
 * @class View
 * @extends Component
 */
const NumbersView = ({ data, block }) => {
  const id = new Date().getTime();

  return (
    <div className="block numbersBlock">
      <div className="public-ui">
        <div className="full-width section py-5">
          {data?.background?.[0] ? (
            <div
              className="background-image"
              style={{
                backgroundImage: `url(${
                  data.background[0]?.image
                    ? flattenToAppURL(
                        data.background[0]['@id'] + '/@@images/image',
                      )
                    : addAppURL(data.background[0]?.['@id'])
                })`,
              }}
            ></div>
          ) : (
            <div className="background-image"></div>
          )}
          <Container className="px-md-4">
            <Row>
              <Col lg="4">
                <div className="block-header">
                  {(data.icon1 || data.icon2 || data.icon3) && (
                    <div className="icons">
                      {data.icon1?.length > 0 && <Icon icon={data.icon1} />}
                      {data.icon2?.length > 0 && <Icon icon={data.icon2} />}
                      {data.icon3?.length > 0 && <Icon icon={data.icon3} />}
                    </div>
                  )}

                  {data.title && (
                    <div className="title">
                      {redraft(
                        data.title,
                        config.settings.richtextViewSettings.ToHTMLRenderers,
                        config.settings.richtextViewSettings.ToHTMLOptions,
                      )}
                    </div>
                  )}
                </div>
              </Col>

              {data.subblocks.map((subblock, index) => (
                <Col sm="6" lg="4" key={subblock.id}>
                  <ViewBlock
                    data={subblock}
                    key={index}
                    id={id}
                    index={index}
                  />
                </Col>
              ))}
            </Row>
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
NumbersView.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default NumbersView;
