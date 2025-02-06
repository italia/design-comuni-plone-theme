/**
 * Edit Accordion block.
 * @module components/ItaliaTheme/Blocks/Accordion/Block/EditBlock
 */

import React from 'react';
import { compose } from 'redux';
import { injectIntl, defineMessages } from 'react-intl';
import { UniversalLink } from '@plone/volto/components';
import { injectDNDSubblocks, SubblockEdit, Subblock } from 'volto-subblocks';

import { Card, CardBody, CardReadMore } from 'design-react-kit';
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
  select_an_icon: {
    id: "Seleziona un'icona",
    defaultMessage: "Seleziona un'icona nella barra a lato",
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
   * @constructs Icons Blocks edit
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
        <Card
          className="card-bg rounded"
          noWrapper={false}
          space
          tag="div"
          ref={this.subblock_ref}
          key={this.props.data.index}
        >
          <CardBody tag="div">
            <div className="iconblock-icon">
              {this.props.data.icon?.length > 0 ? (
                <Icon icon={this.props.data.icon} />
              ) : (
                <div className="icon-placeholder">
                  {this.props.intl.formatMessage(messages.select_an_icon)}
                </div>
              )}
            </div>

            <div className="iconblock-title">
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
                  selected={
                    this.props.selected && this.state.focusOn === 'title'
                  }
                  setSelected={(f) => {
                    this.setState({ focusOn: f });
                  }}
                  block={this.props.block}
                  index={this.props.blockIndex}
                  onChangeBlock={(block, _data) => {
                    this.props.onChangeBlock(this.props.index, _data);
                  }}
                  placeholder={this.props.intl.formatMessage(
                    messages.titlePlaceholder,
                  )}
                  focusPrevField={
                    this.props.isFirst
                      ? this.props.onFocusPreviousBlock
                      : () => {
                          this.props.onSubblockChangeFocus(
                            this.props.index - 1,
                          );
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
              className="iconblock-text"
              onClick={() => {
                this.setState({ focusOn: 'text' });
              }}
            >
              <TextEditorWidget
                {...this.props}
                data={this.props.data}
                key="text"
                fieldName="text"
                selected={this.props.selected && this.state.focusOn === 'text'}
                setSelected={(f) => {
                  if (!this.props.selected) {
                    //a11y - per il focus del blocco da tastiera con navigazione inversa
                    this.props.onSubblockChangeFocus(this.props.index);
                    this.props.onSelectBlock(this.props.block);
                  }
                  this.setState({ focusOn: f });
                }}
                onChangeBlock={(block, _data) => {
                  this.props.onChangeBlock(this.props.index, _data);
                }}
                block={this.props.block}
                index={this.props.blockIndex}
                placeholder={this.props.intl.formatMessage(
                  messages.textPlaceholder,
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

            {this.props.data.href && (
              <CardReadMore
                iconName="it-arrow-right"
                tag={UniversalLink}
                href={'#'}
                text={
                  this.props.data.linkMoreTitle ||
                  this.props.intl.formatMessage(messages.vedi)
                }
              />
            )}
          </CardBody>
        </Card>

        {/* eslint-enable */}
      </Subblock>
    );
  }
}

export default compose(injectIntl, injectDNDSubblocks)(EditBlock);
