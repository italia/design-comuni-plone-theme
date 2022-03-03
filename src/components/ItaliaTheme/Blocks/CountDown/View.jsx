import React from 'react';
import PropTypes from 'prop-types';
import redraft from 'redraft';
import { Container, Row, Col } from 'design-react-kit/dist/design-react-kit';
import { addAppURL, flattenToAppURL } from '@plone/volto/helpers';

import CountDown from '@italia/components/ItaliaTheme/Blocks/CountDown/CountDown';
import config from '@plone/volto/registry';

const View = ({ data, id }) => {
  return (
    <div className="block count_down">
      <div className="public-ui">
        <div className="full-width section py-5">
          {data.background?.[0] ? (
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
              <Col
                xs={{
                  size: 12,
                  order: data.countDownPosition === 'left' ? 'last' : 'first',
                }}
                lg={{
                  size: 4,
                }}
                className="text"
              >
                {redraft(
                  data.text,
                  config.settings.ToHTMLRenderers,
                  config.settings.ToHTMLOptions,
                )}
              </Col>
              <Col
                xs={{
                  size: 12,
                  order: data.countDownPosition === 'left' ? 'first' : 'last',
                }}
                lg={{
                  size: 8,
                }}
                className="countdown"
              >
                <CountDown
                  end={data.endDate}
                  showHours={data.showHours}
                  showMinutes={data.showMinutes}
                  showSeconds={data.showSeconds}
                />
                <div className="countdown_text">
                  {redraft(
                    data.countdown_text,
                    config.settings.ToHTMLRenderers,
                    config.settings.ToHTMLOptions,
                  )}
                </div>
              </Col>
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
View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
};

export default View;
