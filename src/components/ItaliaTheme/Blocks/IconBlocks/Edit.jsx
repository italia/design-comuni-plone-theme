/**
 * Edit icons block.
 * @module components/ItaliaTheme/Blocks/Accordion/Edit
 */

import React from 'react';
import { defineMessages } from 'react-intl';
import { Container, Row, Col } from 'design-react-kit/dist/design-react-kit';

import { SidebarPortal } from '@plone/volto/components';
import { flattenToAppURL, addAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';

import {
  withDNDContext,
  SubblocksEdit,
  SubblocksWrapper,
} from 'volto-subblocks';
import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';

import EditBlock from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/IconBlocks/Block/EditBlock';
import Sidebar from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/IconBlocks/Sidebar.jsx';
import cx from 'classnames';

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
  constructor(props) {
    super(props);
    this.state.selectedField = 'title';
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

    if (!this.props.data.bg_color) {
      this.props.data.bg_color = 'primary';
    }

    return (
      <div className="public-ui">
        <div className="full-width section py-5">
          {this.props.data.background?.[0] ? (
            <div
              className={cx('background-image', {
                [this.props.data.bg_color]: this.props.data.bg_color,
              })}
              style={{
                backgroundImage: `url(${
                  this.props.data.background[0]?.image?.scales?.huge
                    ?.download ??
                  addAppURL(this.props.data.background[0]?.['@id'])
                })`,
              }}
            ></div>
          ) : (
            <div
              className={cx('background-image', {
                [this.props.data.bg_color]: this.props.data.bg_color,
              })}
            ></div>
          )}

          <Container className={`px-md-4 ${this.props.data.bg_color}`}>
            <div className="block-header">
              <div className="title">
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
              </div>

              <div className="description">
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
              </div>
            </div>

            <SubblocksWrapper node={this.node}>
              <Row className={cx({ center: this.props.data.alignCards })}>
                {this.state.subblocks.map((subblock, subindex) => (
                  <Col lg="4" xl="3" key={subblock.id}>
                    <EditBlock
                      data={subblock}
                      index={subindex}
                      selected={this.isSubblockSelected(subindex)}
                      {...this.subblockProps}
                      openObjectBrowser={this.props.openObjectBrowser}
                    />
                  </Col>
                ))}

                {this.props.selected && (
                  <Col md={3}>
                    {this.renderAddBlockButton(
                      this.props.intl.formatMessage(messages.addItem),
                    )}
                  </Col>
                )}
              </Row>
            </SubblocksWrapper>

            {this.props.data.href && this.props.data.linkMoreTitle && (
              <div className="link-button text-center my-4">
                <UniversalLink
                  href={flattenToAppURL(this.props.data.href)}
                  className="btn btn-tertiary"
                >
                  {this.props.data.linkMoreTitle}
                </UniversalLink>
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
          </Container>
        </div>
      </div>
    );
  }
}

export default React.memo(withDNDContext(Edit));
