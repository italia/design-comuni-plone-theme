/**
 * Edit icons block.
 * @module components/ItaliaTheme/Blocks/Accordion/Edit
 */

import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

import {
  withDNDContext,
  SubblocksEdit,
  SubblocksWrapper,
} from '@italia/addons/volto-subblocks';

import Sidebar from './Sidebar.jsx';
import EditBlock from './Block/EditBlock';
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
  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    if (__SERVER__) {
      return <div />;
    }
    const { Container, Card, CardBody } = this.props.designReactKit;

    return (
      <div className="public-ui">
        <div className="full-width section section-muted section-inset-shadow py-5 is-edit-mode">
          <Container className="px-md-4">
            <Card className="card-bg rounded" noWrapper={false} space tag="div">
              <CardBody tag="div">
                <SubblocksWrapper node={this.node}>
                  {this.state.subblocks.map((subblock, subindex) => (
                    <div className="accordion-item" key={subblock.id}>
                      <EditBlock
                        data={subblock}
                        index={subindex}
                        selected={this.isSubblockSelected(subindex)}
                        {...this.subblockProps}
                        openObjectBrowser={this.props.openObjectBrowser}
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

export default React.memo(
  injectLazyLibs(['designReactKit'])(withDNDContext(Edit)),
);
