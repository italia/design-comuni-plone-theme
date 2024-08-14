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

import config from '@plone/volto/registry';

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
    const Image = config.getComponent({ name: 'Image' }).component;

    return (
      <div className="public-ui" tabIndex="-1" ref={this.nodeF}>
        <div className="full-width section py-5">
          {this.props.data.background?.[0] ? (
            <div className="background-image">
              <Image
                item={this.props.data.background[0]}
                alt=""
                role={null}
                responsive={true}
                sizes="100vw"
              />
            </div>
          ) : (
            <div className="background-image no-image"></div>
          )}

          <Container className="px-md-4">
            <div className="block-header">
              <div className="title">
                <TextEditorWidget
                  {...this.props}
                  showToolbar={false}
                  data={this.props.data}
                  key={'title'}
                  fieldName="title"
                  selected={this.state.selectedField === 'title'}
                  setSelected={(f) => {
                    this.setState({
                      selectedField: f,
                      subIndexSelected: -1,
                    });
                  }}
                  placeholder={this.props.intl.formatMessage(messages.title)}
                  focusNextField={() => {
                    this.setState({ selectedField: 'description' });
                  }}
                />
              </div>

              <div className="description">
                <TextEditorWidget
                  {...this.props}
                  showToolbar={true}
                  data={this.props.data}
                  fieldName="description"
                  selected={this.state.selectedField === 'description'}
                  setSelected={(f) => {
                    this.setState({
                      selectedField: f,
                      subIndexSelected: -1,
                    });
                  }}
                  placeholder={this.props.intl.formatMessage(
                    messages.description,
                  )}
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
              <Row>
                {this.state.subblocks.map((subblock, subindex) => (
                  <Col lg="4" xl="3" key={subblock.id}>
                    <EditBlock
                      {...this.props}
                      data={subblock}
                      index={subindex}
                      blockIndex={this.props.index}
                      selected={this.isSubblockSelected(subindex)}
                      {...this.subblockProps}
                      onChangeFocus={this.onSubblockChangeFocus}
                      isFirst={subindex === 0}
                      isLast={subindex === this.state.subblocks?.length - 1}
                      openObjectBrowser={this.props.openObjectBrowser}
                      onFocusPreviousBlock={() => {
                        this.setState({ selectedField: 'description' });
                      }}
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
