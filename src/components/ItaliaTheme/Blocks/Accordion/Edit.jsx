/**
 * Edit icons block.
 * @module components/ItaliaTheme/Blocks/Accordion/Edit
 */

import React from 'react';
import EditBlock from './Block/EditBlock';

import { Container, Card, CardBody } from 'design-react-kit';
import {
  withDNDContext,
  SubblocksEdit,
  SubblocksWrapper,
} from 'volto-subblocks';

import { SidebarPortal } from '@plone/volto/components';
import { handleKeyDownOwnFocusManagement } from 'design-comuni-plone-theme/helpers/blocks';
import Sidebar from './Sidebar.jsx';

import { defineMessages } from 'react-intl';

const messages = defineMessages({
  addItem: {
    id: 'Add accordion item',
    defaultMessage: 'Aggiungi elemento',
  },
});
/**
 * Edit Accordion block class.
 * @class Edit
 * @extends Component
 */
class Edit extends SubblocksEdit {
  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.selected) {
      if (this.state.subIndexSelected < 0) {
        this.onSubblockChangeFocus(0);
      }
    } else {
      this.onSubblockChangeFocus(-1);
    }
  }

  handleEnter = (e) => {
    if (this.props.selected && this.state.subIndexSelected < 0) {
      handleKeyDownOwnFocusManagement(e, this.props);
    }
  };

  componentDidMount() {
    const blockNode = this.props.blockNode;

    if (this.props.selected && this.node) {
      this.node.focus();
    }
    if (this.state.subblocks.length === 0) {
      this.addSubblock();
    }

    if (blockNode && blockNode.current) {
      blockNode.current.addEventListener('keydown', this.handleEnter, false);
    }
  }

  /**
   * Component will receive props
   * @method componentWillUnmount
   * @returns {undefined}
   */
  componentWillUnmount() {
    if (this.props.selected && this.node) {
      this.node.focus();
    }
    const blockNode = this.props.blockNode;
    if (blockNode && blockNode.current) {
      blockNode.current.removeEventListener('keydown', this.handleEnter, false);
    }
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
      <div className="public-ui" tabIndex="-1">
        <div className="full-width section section-muted section-inset-shadow py-5 is-edit-mode">
          <Container className="px-md-4">
            <Card className="card-bg rounded" noWrapper={false} space tag="div">
              <CardBody tag="div">
                <SubblocksWrapper node={this.node}>
                  {this.state.subblocks.map((subblock, subindex) => (
                    <div className="accordion-item" key={subblock.id}>
                      <EditBlock
                        {...this.props}
                        {...this.subblockProps}
                        onChangeFocus={this.onSubblockChangeFocus}
                        data={subblock}
                        index={subindex}
                        selected={
                          this.props.selected &&
                          this.isSubblockSelected(subindex)
                        }
                        isLast={this.state.subblocks.length - 1 === subindex}
                        isFirst={subindex === 0}
                      />
                    </div>
                  ))}

                  {this.props.selected && (
                    <div className="accordion-item">
                      {this.renderAddBlockButton(
                        this.props.intl.formatMessage(messages.addItem),
                      )}
                    </div>
                  )}
                </SubblocksWrapper>

                <SidebarPortal selected={this.props.selected || false}>
                  <Sidebar
                    {...this.props}
                    data={this.props.data}
                    block={this.props.block}
                    onChangeBlock={this.props.onChangeBlock}
                    onChangeSubBlock={this.onChangeSubblocks}
                    selected={this.state.subIndexSelected}
                    setSelected={this.onSubblockChangeFocus}
                    openObjectBrowser={this.props.openObjectBrowser}
                  />
                </SidebarPortal>
              </CardBody>
            </Card>
          </Container>
        </div>
      </div>
    );
  }
}

export default React.memo(withDNDContext(Edit));
