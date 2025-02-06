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
   * @constructs Contacts Blocks edit
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
        if (!(this.state.focusOn === 'title')) {
          this.setState({ focusOn: 'title' });
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
      <Subblock subblock={this} className="subblock-edit" tabIndex="-1">
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
              <TextEditorWidget
                {...this.props}
                index={this.props.blockIndex}
                key="title"
                showToolbar={false}
                data={this.props.data}
                fieldName="title"
                onChangeBlock={(block, _data) => {
                  this.props.onChangeBlock(this.props.index, _data);
                }}
                placeholder={this.props.intl.formatMessage(
                  messages.titlePlaceholder,
                )}
                selected={this.props.selected && this.state.focusOn === 'title'}
                setSelected={(f) => {
                  this.setState({ focusOn: f });
                }}
                focusNextField={() => {
                  this.setState({ focusOn: 'text' });
                }}
                focusPrevField={
                  this.props.isFirst
                    ? this.props.onFocusPreviousBlock
                    : () => {
                        this.props.onSubblockChangeFocus(this.props.index - 1);
                      }
                }
              />
            </div>

            <div className="contact-text">
              <TextEditorWidget
                {...this.props}
                index={this.props.blockIndex}
                key="text"
                data={this.props.data}
                fieldName="text"
                placeholder={this.props.intl.formatMessage(
                  messages.textPlaceholder,
                )}
                onChangeBlock={(block, _data) => {
                  this.props.onChangeBlock(this.props.index, _data);
                }}
                selected={this.props.selected && this.state.focusOn === 'text'}
                setSelected={(f) => {
                  this.setState({ focusOn: f });
                }}
                focusPrevField={() => {
                  this.setState({ focusOn: 'title' });
                }}
                focusNextField={() => {
                  this.setState({ focusOn: 'tel' });
                }}
              />
            </div>

            <div className="contact-info">
              <div className="icon-wrapper">
                <Icon icon="phone-alt" />
              </div>
              <TextEditorWidget
                {...this.props}
                index={this.props.blockIndex}
                key="tel"
                data={this.props.data}
                fieldName="tel"
                wrapClass="tel"
                selected={this.props.selected && this.state.focusOn === 'tel'}
                onChangeBlock={(block, _data) => {
                  this.props.onChangeBlock(this.props.index, _data);
                }}
                placeholder={this.props.intl.formatMessage(
                  messages.textPlaceholder,
                )}
                setSelected={(f) => this.setState({ focusOn: f })}
                focusPrevField={() => {
                  this.setState({ focusOn: 'text' });
                }}
                focusNextField={() => {
                  this.setState({ focusOn: 'email' });
                }}
              />
            </div>
            <div className="contact-info">
              <div className="icon-wrapper">
                <Icon icon="envelope" />
              </div>
              <TextEditorWidget
                {...this.props}
                index={this.props.blockIndex}
                key="email"
                wrapClass="email"
                data={this.props.data}
                fieldName="email"
                selected={this.props.selected && this.state.focusOn === 'email'}
                onChangeBlock={(block, _data) => {
                  this.props.onChangeBlock(this.props.index, _data);
                }}
                placeholder={this.props.intl.formatMessage(
                  messages.textPlaceholder,
                )}
                setSelected={(f) => {
                  if (!this.props.selected) {
                    //a11y - per il focus del blocco da tastiera con navigazione inversa
                    this.props.onSubblockChangeFocus(this.props.index);
                    this.props.onSelectBlock(this.props.block);
                  }
                  this.setState({ focusOn: f });
                }}
                focusPrevField={() => {
                  this.setState({ focusOn: 'tel' });
                }}
                focusNextField={
                  !this.props.isLast
                    ? () => {
                        this.setState({ focusOn: null });
                        this.props.onSubblockChangeFocus(this.props.index + 1);
                      }
                    : null //default go to next block
                }
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
