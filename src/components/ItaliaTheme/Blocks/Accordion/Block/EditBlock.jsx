/**
 * Edit Accordion block.
 * @module components/ItaliaTheme/Blocks/Accordion/Block/EditBlock
 */

import React from 'react';
import { compose } from 'redux';
import { injectIntl, defineMessages } from 'react-intl';

import { injectDNDSubblocks, SubblockEdit, Subblock } from 'volto-subblocks';

import { Button } from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  titlePlaceholder: {
    id: 'Title placeholder',
    defaultMessage: 'Title...',
  },
  textPlaceholder: {
    id: 'Text placeholder',
    defaultMessage: 'Text...',
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
    this.accordion_item_ref = React.createRef();
  }

  componentDidMount() {
    // eslint-disable-next-line no-unused-expressions
    this.accordion_item_ref?.current?.addEventListener('keydown', (e) => {
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
        <div ref={this.accordion_item_ref} key={this.props.data.index}>
          <h3 className="accordion-header">
            <Button
              color="link"
              tag="button"
              onClick={(e) => {
                if (this.props.selected) {
                  e.stopPropagation();
                  e.preventDefault();
                  this.props.onSubblockChangeFocus(-1);
                }
              }}
            >
              <Icon
                color="primary"
                icon={this.props.selected ? 'it-minus' : 'it-plus'}
                padding={false}
              />
            </Button>

            {/* eslint-disable */}
            <div
              onClick={() => {
                this.setState({ focusOn: 'title' });
              }}
            >
              <TextEditorWidget
                data={this.props.data}
                fieldName="title"
                selected={this.props.selected && this.state.focusOn === 'title'}
                block={this.props.block}
                onChangeBlock={this.onChange}
                placeholder={this.props.intl.formatMessage(
                  messages.titlePlaceholder,
                )}
                nextFocus="text"
                prevFocus="text"
                disableMoveToNearest={true}
                setFocus={(f) => {
                  this.setState({ focusOn: f });
                }}
                showToolbar={false}
                key="title"
              />
            </div>
          </h3>
          {this.props.selected && (
            <div
              className="accordion-content open"
              onClick={() => {
                this.setState({ focusOn: 'text' });
              }}
            >
              <div className="accordion-inner">
                <TextEditorWidget
                  data={this.props.data}
                  fieldName="text"
                  selected={
                    this.props.selected && this.state.focusOn === 'text'
                  }
                  block={this.props.block}
                  onChangeBlock={this.onChange}
                  placeholder={this.props.intl.formatMessage(
                    messages.textPlaceholder,
                  )}
                  disableMoveToNearest={true}
                  prevFocus="title"
                  nextFocus="title"
                  setFocus={(f) => {
                    this.setState({ focusOn: f });
                  }}
                  key="text"
                />
              </div>
              {this.props.data.href && (
                <div className="link-more">
                  <a href={this.props.data.href}>
                    {this.props.data.linkMoreTitle ||
                      this.props.intl.formatMessage(messages.vedi)}
                    <Icon icon="it-arrow-right" />
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
        {/* eslint-enable */}
      </Subblock>
    );
  }
}

export default compose(injectIntl, injectDNDSubblocks)(EditBlock);
