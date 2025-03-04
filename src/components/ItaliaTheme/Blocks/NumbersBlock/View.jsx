/**
 * View block.
 * @module components/ItaliaTheme/Blocks/Accordion/View
 */

import React from 'react';
import PropTypes from 'prop-types';

import ViewBlock from './Block/ViewBlock';
import { Container, Row, Col } from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { addAppURL, flattenToAppURL } from '@plone/volto/helpers';

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
                  data.background[0]?.image_field
                    ? flattenToAppURL(
                        data.background[0]['@id'] +
                          '/' +
                          data.background[0].image_scales?.[
                            data.background[0].image_field
                          ][0].download,
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
                      {data.icon1?.length > 0 && (
                        <Icon icon={data.icon1} title={data.icon1} />
                      )}
                      {data.icon2?.length > 0 && (
                        <Icon icon={data.icon2} title={data.icon2} />
                      )}
                      {data.icon3?.length > 0 && (
                        <Icon icon={data.icon3} title={data.icon3} />
                      )}
                    </div>
                  )}

                  {data.title && (
                    <div className="title">
                      <h2>{data.title}</h2>
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
