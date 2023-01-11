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
   * @constructs WysiwygEditor
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
                data={this.props.data}
                fieldName="title"
                selected={this.props.selected && this.state.focusOn === 'title'}
                block={this.props.block}
                onChangeBlock={this.onChange}
                placeholder={this.props.intl.formatMessage(
                  messages.numberPlaceholder,
                )}
                prevFocus="text"
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
            className="subblock-text"
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
                messages.descriptionPlaceholder,
              )}
              prevFocus="title"
              nextFocus="title"
              setFocus={(f) => {
                this.setState({ focusOn: f });
              }}
              showToolbar={false}
              key="text"
            />
          </div>
        </div>

        {/* eslint-enable */}
      </Subblock>
    );
  }
}

export default compose(injectIntl, injectDNDSubblocks)(EditBlock);
