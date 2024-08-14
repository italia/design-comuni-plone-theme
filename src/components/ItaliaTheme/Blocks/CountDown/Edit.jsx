import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Container, Row, Col } from 'design-react-kit';
import { SidebarPortal } from '@plone/volto/components';
import { addAppURL, flattenToAppURL } from '@plone/volto/helpers';
import cx from 'classnames';
import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';
import Sidebar from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/CountDown/Sidebar';
import CountDown from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/CountDown/CountDown';
import { useHandleDetachedBlockFocus } from 'design-comuni-plone-theme/helpers/blocks';

const messages = defineMessages({
  text: {
    id: 'Inserisci il testo…',
    defaultMessage: 'Inserisci il testo…',
  },
});

const Edit = (props) => {
  const { data, block, selected, ...otherProps } = props;
  const intl = useIntl();
  const { selectedField, setSelectedField } = useHandleDetachedBlockFocus(
    props,
    'text',
  );

  return (
    <>
      <div className="public-ui" tabIndex="-1">
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
              <Col
                xs={{
                  size: 12,
                  order: data.countDownPosition === 'left' ? 'last' : 'first',
                }}
                lg={{
                  size: data.countDownPosition !== 'center' ? 4 : 12,
                  order: data.countDownPosition === 'left' ? 'last' : 'first',
                }}
                className="text"
              >
                <TextEditorWidget
                  {...otherProps}
                  data={data}
                  fieldName="text"
                  selected={selected && selectedField === 'text'}
                  block={block}
                  placeholder={intl.formatMessage(messages.text)}
                  setSelected={setSelectedField}
                  focusNextField={() => {
                    setSelectedField('countdown_text');
                  }}
                />
              </Col>
              <Col
                xs={{
                  size: 12,
                  order: data.countDownPosition === 'left' ? 'first' : 'last',
                }}
                lg={{
                  size: data.countDownPosition !== 'center' ? 8 : 12,
                  order: data.countDownPosition === 'left' ? 'first' : 'last',
                }}
                className="countdown"
              >
                <CountDown
                  end={data.endDate}
                  showHours={data.showHours}
                  showMinutes={data.showMinutes}
                  showSeconds={data.showSeconds}
                />
                <TextEditorWidget
                  {...otherProps}
                  showToolbar={true}
                  data={data}
                  block={block}
                  fieldName="countdown_text"
                  selected={selected && selectedField === 'countdown_text'}
                  placeholder={intl.formatMessage(messages.text)}
                  setSelected={setSelectedField}
                  focusPrevField={() => {
                    setSelectedField('text');
                  }}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <SidebarPortal selected={selected}>
        <Sidebar {...props} />
      </SidebarPortal>
    </>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Edit.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  block: PropTypes.string.isRequired,
};

export default Edit;
