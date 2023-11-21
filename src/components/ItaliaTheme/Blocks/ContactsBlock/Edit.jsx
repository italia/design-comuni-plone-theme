/**
 * Edit icons block.
 * @module components/ItaliaTheme/Blocks/Accordion/Edit
 */

import React from 'react';
import { defineMessages } from 'react-intl';
import { Container, Row, Col } from 'design-react-kit';

import { SidebarPortal } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { handleKeyDownOwnFocusManagement } from 'design-comuni-plone-theme/helpers/blocks';
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
    id: 'Title',
    defaultMessage: 'Titolo...',
  },
  description: {
    id: 'Description',
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
    this.nodeF = React.createRef();
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.selected) {
      if (!this.props.selected) {
        this.setState({ selectedField: 'title' });
      }
    } else {
      this.setState({ selectedField: null });
    }
  }

  handleEnter = (e) => {
    if (
      this.props.selected &&
      this.state.subIndexSelected < 0 &&
      !this.state.selectedField
    ) {
      handleKeyDownOwnFocusManagement(e, this.props);
    }
  };

  handleClick = (e) => {
    const hasParent = (element, className) => {
      if (!element.parentNode) {
        return false;
      }

      if (element.classList.contains(className)) {
        return true;
      }

      return hasParent(element.parentNode, className);
    };
    const clickOutsideSubblocks =
      !e.target.classList.contains('volto-subblocks-wrapper') &&
      !hasParent(e.target, 'volto-subblocks-wrapper');

    if (clickOutsideSubblocks) {
      this.setState({ subIndexSelected: -1 });
    }
  };

  componentDidMount() {
    if (this.props.selected && this.node) {
      this.node.focus();
    }
    if (this.props.selected && this.nodeF.current) {
      this.nodeF.current.focus();
    }

    if (this.state.subblocks.length === 0) {
      this.addSubblock();
    }

    if (this.nodeF && this.nodeF.current) {
      this.nodeF.current.addEventListener('keydown', this.handleEnter, false);
      this.nodeF.current.addEventListener('click', this.handleClick, false);
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
      <div className="public-ui" tabIndex="-1" ref={this.nodeF}>
        <div
          className={`full-width section bg-${
            this.props.data.bg_color ?? 'primary'
          } py-5`}
        >
          <Container className="px-md-4">
            <div className="block-header">
              <div className="title">
                <TextEditorWidget
                  {...this.props}
                  key="title"
                  showToolbar={false}
                  data={this.props.data}
                  fieldName="title"
                  selected={this.state.selectedField === 'title'}
                  placeholder={this.props.intl.formatMessage(messages.title)}
                  onSelectBlock={() => {}}
                  setSelected={(f) => {
                    this.setState({ selectedField: f, subIndexSelected: -1 });
                  }}
                  focusNextField={() => {
                    this.setState({ selectedField: 'description' });
                  }}
                />
              </div>

              <div className="description">
                <TextEditorWidget
                  {...this.props}
                  key="description"
                  data={this.props.data}
                  fieldName="description"
                  selected={this.state.selectedField === 'description'}
                  placeholder={this.props.intl.formatMessage(
                    messages.description,
                  )}
                  onSelectBlock={() => {}}
                  setSelected={(f) => {
                    this.setState({ selectedField: f, subIndexSelected: -1 });
                  }}
                  focusPrevField={() => {
                    this.setState({ selectedField: 'title' });
                  }}
                  focusNextField={() => {
                    this.setState({ selectedField: null, subIndexSelected: 0 });
                  }}
                />
              </div>
            </div>

            <SubblocksWrapper node={this.node}>
              <Row
                className={
                  this.state.subblocks.length > 3
                    ? 'justify-content-start'
                    : 'justify-content-center'
                }
              >
                {this.state.subblocks.map((subblock, subindex) => (
                  <Col lg="4" key={subblock.id} className="pb-3">
                    <EditBlock
                      {...this.props}
                      data={subblock}
                      index={subindex}
                      selected={this.isSubblockSelected(subindex)}
                      {...this.subblockProps}
                      openObjectBrowser={this.props.openObjectBrowser}
                      onSubblockChangeFocus={this.onSubblockChangeFocus}
                      onChangeFocus={this.onSubblockChangeFocus}
                      isLast={this.state.subblocks.length - 1 === subindex}
                      isFirst={subindex === 0}
                      onFocusPreviousBlock={() => {
                        this.setState({
                          selectedField: 'description',
                          subIndexSelected: -1,
                        });
                      }}
                    />
                  </Col>
                ))}

                {this.props.selected && (
                  <Col lg={12} className="text-center pb-3">
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
