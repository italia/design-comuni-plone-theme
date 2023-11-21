/**
 * Edit Accordion block.
 * @module components/ItaliaTheme/Blocks/Accordion/Block/EditBlock
 */

import React from 'react';
import { compose } from 'redux';
import { injectIntl, defineMessages } from 'react-intl';

import { injectDNDSubblocks, SubblockEdit, Subblock } from 'volto-subblocks';

import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  numberPlaceholder: {
    id: 'Number placeholder',
    defaultMessage: 'Numero',
  },
  descriptionPlaceholder: {
    id: 'Description placeholder',
    defaultMessage: 'Descrizione...',
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
   * @constructs Numbers Block edit
   */
  constructor(props) {
    super(props);
    this.state = {
      focusOn: 'title',
    };
    this.subblock_ref = React.createRef();
  }

  componentDidMount() {
    // eslint-disable-next-line no-unused-expressions
    // this.subblock_ref?.current?.addEventListener('keydown', (e) => {
    //   if (e.keyCode === 13) {
    //     if (!(this.state.focusOn === 'text')) {
    //       this.setState({ focusOn: 'text' });
    //     }
    //   }
    // });
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
        <div className="block-number">
          <div className="subblock-title">
            {/* eslint-disable */}
            <div
              onClick={() => {
                this.setState({ focusOn: 'title' });
              }}
            >
              <TextEditorWidget
                {...this.props}
                showToolbar={false}
                data={this.props.data}
                fieldName="title"
                selected={this.props.selected && this.state.focusOn === 'title'}
                setSelected={(f) => {
                  this.setState({ focusOn: f });
                  if (!f) {
                    this.props.onSubblockChangeFocus(-1);
                  }
                }}
                block={this.props.block}
                index={this.props.blockIndex}
                onChangeBlock={(block, _data) => {
                  this.props.onChangeBlock(this.props.index, _data);
                }}
                placeholder={this.props.intl.formatMessage(
                  messages.numberPlaceholder,
                )}
                focusPrevField={
                  this.props.isFirst
                    ? this.props.onFocusPreviousBlock
                    : () => {
                        this.props.onSubblockChangeFocus(this.props.index - 1);
                      }
                }
                focusNextField={() => {
                  this.setState({ focusOn: 'text' });
                }}
                key="title"
              />
            </div>
          </div>
          <div
            className="subblock-text"
            onClick={() => {
              this.setState({ focusOn: 'text' });
            }}
          >
            <TextEditorWidget
              {...this.props}
              showToolbar={false}
              data={this.props.data}
              key="text"
              fieldName="text"
              selected={this.props.selected && this.state.focusOn === 'text'}
              setSelected={(f) => {
                this.setState({ focusOn: f });
                if (!f) {
                  this.props.onSubblockChangeFocus(-1);
                }
              }}
              block={this.props.block}
              index={this.props.blockIndex}
              onChangeBlock={(block, _data) => {
                this.props.onChangeBlock(this.props.index, _data);
              }}
              placeholder={this.props.intl.formatMessage(
                messages.descriptionPlaceholder,
              )}
              focusNextField={
                !this.props.isLast
                  ? () => {
                      this.setState({ focusOn: null });
                      this.props.onSubblockChangeFocus(this.props.index + 1);
                    }
                  : null //default go to next block
              }
              focusPrevField={() => {
                this.setState({ focusOn: 'title' });
              }}
            />
          </div>
        </div>

        {/* eslint-enable */}
      </Subblock>
    );
  }
}

export default compose(injectIntl, injectDNDSubblocks)(EditBlock);
