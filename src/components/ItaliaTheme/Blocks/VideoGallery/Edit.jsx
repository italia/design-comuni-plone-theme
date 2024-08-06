/**
 * Edit icons block.
 * @module components/manage/Blocks/Title/Edit
 */

import React from 'react';
import { defineMessages } from 'react-intl';
import { SidebarPortal } from '@plone/volto/components';
import {
  withDNDContext,
  SubblocksEdit,
  SubblocksWrapper,
} from 'volto-subblocks';
import { Sidebar } from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/VideoGallery';
import Body from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/VideoGallery/Body';
import EditBlock from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/VideoGallery/Block/EditBlock';
import { SingleSlideWrapper } from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  addItem: {
    id: 'Add accordion item',
    defaultMessage: 'Aggiungi elemento',
  },
  titlePlaceholder: {
    id: 'Title',
    defaultMessage: 'Titolo',
  },
  noVideos: {
    id: 'noVideos',
    defaultMessage:
      'Nessun video selezionato. Aggiungi un elemento per mostrare un video',
  },
});
/**
 * Edit icons block class.
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
        <SubblocksWrapper node={this.node}>
          <Body {...this.props} nItems={this.state.subblocks?.length}>
            {this.state.subblocks.map((subblock, subindex) => (
              <SingleSlideWrapper key={subblock.id} index={subindex}>
                <EditBlock
                  data={subblock}
                  index={subindex}
                  selected={this.isSubblockSelected(subindex)}
                  {...this.subblockProps}
                />
              </SingleSlideWrapper>
            ))}
            {this.state.subblocks.length === 0 && (
              <div>{this.props.intl.formatMessage(messages.noVideos)}</div>
            )}
          </Body>
        </SubblocksWrapper>
        {this.props.selected && (
          <div className="add-block-wrapper">
            {this.renderAddBlockButton(
              this.props.intl.formatMessage(messages.addItem),
            )}
          </div>
        )}
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
      </div>
    );
  }
}

export default React.memo(withDNDContext(Edit));
