import React from 'react';
import PropTypes from 'prop-types';
import { checkRichTextHasContent } from 'design-comuni-plone-theme/helpers';
import { Container, Row, Col } from 'design-react-kit';
import { addAppURL, flattenToAppURL } from '@plone/volto/helpers';
import cx from 'classnames';
import CountDown from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/CountDown/CountDown';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';

const View = ({ data, id }) => {
  return (
    <div className="block count_down">
      <div className="public-ui">
        <div
          className={cx('block-content', { 'full-width': data.showFullWidth })}
        >
          {data.background?.[0] ? (
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
              {checkRichTextHasContent(data.text) && (
                <Col
                  xs={{
                    size: 12,
                    order: data.countDownPosition === 'left' ? 'last' : 'first',
                  }}
                  lg={{
                    size: data.countDownPosition !== 'center' ? 4 : 12,
                  }}
                  className="text"
                >
                  <TextBlockView data={{ value: data.text }} />
                </Col>
              )}
              <Col
                xs={{
                  size: 12,
                  order: data.countDownPosition === 'left' ? 'first' : 'last',
                }}
                lg={{
                  size: data.countDownPosition !== 'center' ? 8 : 12,
                }}
                className="countdown"
              >
                <CountDown
                  end={data.endDate}
                  showHours={data.showHours}
                  showMinutes={data.showMinutes}
                  showSeconds={data.showSeconds}
                />
                {checkRichTextHasContent(data.countdown_text) && (
                  <div className="countdown_text">
                    <TextBlockView data={{ value: data.countdown_text }} />
                  </div>
                )}
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
