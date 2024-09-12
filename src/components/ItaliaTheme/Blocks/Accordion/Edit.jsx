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
import Sidebar from './Sidebar.jsx';

import { defineMessages } from 'react-intl';

import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  addItem: {
    id: 'Add accordion item',
    defaultMessage: 'Aggiungi elemento',
  },
  title: {
    id: 'Title',
    defaultMessage: 'Titolo...',
  },
  description: {
    id: 'Description placeholder',
    defaultMessage: 'Descrizione...',
  },
});
/**
 * Edit Accordion block class.
 * @class Edit
 * @extends Component
 */
class Edit extends SubblocksEdit {
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
      <div className="public-ui">
        <div className="full-width section section-muted section-inset-shadow py-5 is-edit-mode">
          <Container className="px-md-4">
            <Card className="card-bg rounded" noWrapper={false} space tag="div">
              <CardBody tag="div">
                <TextEditorWidget
                  data={this.props.data}
                  fieldName="title"
                  selected={this.state.selectedField === 'title'}
                  block={this.props.block}
                  onChangeBlock={(data) => {
                    this.props.onChangeBlock(this.props.block, {
                      ...data,
                    });
                  }}
                  placeholder={this.props.intl.formatMessage(messages.title)}
                  showToolbar={false}
                  onSelectBlock={() => {}}
                  onAddBlock={() => {
                    this.setState({ selectedField: 'description' });
                  }}
                />
                <TextEditorWidget
                  data={this.props.data}
                  fieldName="description"
                  selected={this.state.selectedField === 'description'}
                  block={this.props.block}
                  onChangeBlock={(data) =>
                    this.props.onChangeBlock(this.props.block, {
                      ...data,
                    })
                  }
                  placeholder={this.props.intl.formatMessage(
                    messages.description,
                  )}
                  showToolbar={true}
                  onSelectBlock={() => {}}
                  onAddBlock={() => {}}
                />
                <SubblocksWrapper node={this.node}>
                  {this.state.subblocks.map((subblock, subindex) => (
                    <div className="accordion-item" key={subblock.id}>
                      <EditBlock
                        data={subblock}
                        index={subindex}
                        selected={
                          this.props.selected &&
                          this.isSubblockSelected(subindex)
                        }
                        {...this.subblockProps}
                        openObjectBrowser={this.props.openObjectBrowser}
                        onFocusPreviousBlock={this.props.onFocusPreviousBlock}
                        onFocusNextBlock={this.props.onFocusNextBlock}
                        onSubblockChangeFocus={this.onSubblockChangeFocus}
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
