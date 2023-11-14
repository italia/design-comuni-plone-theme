/**
 * Edit icons block.
 * @module components/ItaliaTheme/Blocks/Accordion/Edit
 */

import React from 'react';
import { defineMessages } from 'react-intl';
import { Container, Row, Col } from 'design-react-kit';

import { SidebarPortal } from '@plone/volto/components';
import { addAppURL, flattenToAppURL } from '@plone/volto/helpers';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

import {
  withDNDContext,
  SubblocksEdit,
  SubblocksWrapper,
} from 'volto-subblocks';
import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';

import EditBlock from './Block/EditBlock';
import Sidebar from './Sidebar.jsx';

const messages = defineMessages({
  addItem: {
    id: 'Add accordion item',
    defaultMessage: 'Aggiungi elemento',
  },
  title: {
    id: 'Block Title',
    defaultMessage: 'Titolo del blocco...',
  },
  description: {
    id: 'Description',
    defaultMessage: 'Descrizione...',
  },
  icons_placeholder: {
    id: 'Icons placeholder',
    defaultMessage: 'Seleziona le icone dalla barra a lato',
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

    return (
      <div className="public-ui">
        <div className="full-width section py-5">
          {this.props.data?.background?.[0] ? (
            <div
              className="background-image"
              style={{
                backgroundImage: `url(${
                  this.props.data.background[0]?.image
                    ? flattenToAppURL(
                        this.props.data.background[0]['@id'] +
                          '/@@images/image',
                      )
                    : addAppURL(this.props.data.background[0]?.['@id'])
                })`,
              }}
            ></div>
          ) : (
            <div className="background-image"></div>
          )}

          <Container className="px-md-4">
            <SubblocksWrapper node={this.node}>
              <Row>
                <Col lg="4">
                  <div className="block-header">
                    {this.props.data.icon1 ||
                    this.props.data.icon2 ||
                    this.props.data.icon3 ? (
                      <div className="icons">
                        {this.props.data.icon1?.length > 0 && (
                          <Icon icon={this.props.data.icon1} />
                        )}
                        {this.props.data.icon2?.length > 0 && (
                          <Icon icon={this.props.data.icon2} />
                        )}
                        {this.props.data.icon3?.length > 0 && (
                          <Icon icon={this.props.data.icon3} />
                        )}
                      </div>
                    ) : (
                      <div className="icons placeholder">
                        <Icon icon="square" />
                        <Icon icon="square" />
                        <Icon icon="square" />

                        <div className="placeholder-text">
                          {this.props.intl.formatMessage(
                            messages.icons_placeholder,
                          )}
                        </div>
                      </div>
                    )}

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
                        placeholder={this.props.intl.formatMessage(
                          messages.title,
                        )}
                        showToolbar={false}
                        onSelectBlock={() => {}}
                        onAddBlock={() => {
                          this.setState({ selectedField: 'description' });
                        }}
                      />
                    </div>
                  </div>
                </Col>

                {this.state.subblocks.map((subblock, subindex) => (
                  <Col sm="6" lg="4" key={subblock.id}>
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
