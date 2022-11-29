/**
 * Edit Accordion block.
 * @module components/ItaliaTheme/Blocks/Accordion/Block/EditBlock
 */

import React from 'react';
import { compose } from 'redux';
import { injectIntl, defineMessages } from 'react-intl';

import { injectDNDSubblocks, SubblockEdit, Subblock } from 'volto-subblocks';

import { Card, CardBody } from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  titlePlaceholder: {
    id: 'Title placeholder',
    defaultMessage: 'Titolo...',
  },
  textPlaceholder: {
    id: 'Text placeholder',
    defaultMessage: 'Testo...',
  },
  vedi: {
    id: 'Vedi',
    defaultMessage: 'Vedi',
  },
});
/**
 * Edit Accordion block class.
 * @class Edit
 * @extends Component
 */
class EditBlock extends SubblockEdit {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs WysiwygEditor
   */
  constructor(props) {
    super(props);
    this.state = {
      focusOn: 'title',
    };
    this.contact_item_ref = React.createRef();
  }

  componentDidMount() {
    // eslint-disable-next-line no-unused-expressions
    this.contact_item_ref?.current?.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        if (!(this.state.focusOn === 'text')) {
          this.setState({ focusOn: 'text' });
        }
      }
    });
  }
  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    if (__SERVER__) {
      return <div />;
    }

    return (
      <Subblock subblock={this} className="subblock-edit">
        <Card
          className="card-bg rounded"
          noWrapper={false}
          space
          tag="div"
          ref={this.contact_item_ref}
          key={this.props.data.index}
        >
          <CardBody tag="div">
            <div className="contact-title">
              {/* eslint-disable */}
              <div
                onClick={() => {
                  this.setState({ focusOn: 'title' });
                }}
              >
                <TextEditorWidget
                  data={this.props.data}
                  fieldName="title"
                  selected={
                    this.props.selected && this.state.focusOn === 'title'
                  }
                  block={this.props.block}
                  onChangeBlock={this.onChange}
                  placeholder={this.props.intl.formatMessage(
                    messages.titlePlaceholder,
                  )}
                  nextFocus="text"
                  setFocus={(f) => {
                    this.setState({ focusOn: f });
                  }}
                  showToolbar={false}
                  key="title"
                />
              </div>
            </div>

            <div
              className="contact-text"
              onClick={() => {
                this.setState({ focusOn: 'text' });
              }}
            >
              <TextEditorWidget
                data={this.props.data}
                fieldName="text"
                selected={this.props.selected && this.state.focusOn === 'text'}
                block={this.props.block}
                onChangeBlock={this.onChange}
                placeholder={this.props.intl.formatMessage(
                  messages.textPlaceholder,
                )}
                prevFocus="title"
                nextFocus="tel"
                setFocus={(f) => {
                  this.setState({ focusOn: f });
                }}
                key="text"
              />
            </div>

            <div
              className="contact-info"
              onClick={() => {
                this.setState({ focusOn: 'tel' });
              }}
            >
              <div className="icon-wrapper">
                <Icon icon="phone-alt" />
              </div>
              <TextEditorWidget
                data={this.props.data}
                fieldName="tel"
                selected={this.props.selected && this.state.focusOn === 'tel'}
                block={this.props.block}
                onChangeBlock={this.onChange}
                placeholder={this.props.intl.formatMessage(
                  messages.textPlaceholder,
                )}
                prevFocus="text"
                setFocus={(f) => {
                  this.setState({ focusOn: f });
                }}
                key="tel"
              />
            </div>
            <div
              className="contact-info"
              onClick={() => {
                this.setState({ focusOn: 'email' });
              }}
            >
              <div className="icon-wrapper">
                <Icon icon="envelope" />
              </div>
              <TextEditorWidget
                data={this.props.data}
                fieldName="email"
                selected={this.props.selected && this.state.focusOn === 'email'}
                block={this.props.block}
                onChangeBlock={this.onChange}
                placeholder={this.props.intl.formatMessage(
                  messages.textPlaceholder,
                )}
                prevFocus="email"
                setFocus={(f) => {
                  this.setState({ focusOn: f });
                }}
                key="email"
              />
            </div>
          </CardBody>
        </Card>

        {/* eslint-enable */}
      </Subblock>
    );
  }
}

export default compose(injectIntl, injectDNDSubblocks)(EditBlock);
