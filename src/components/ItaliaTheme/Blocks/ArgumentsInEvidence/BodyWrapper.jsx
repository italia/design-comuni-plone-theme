/**
 * Edit text block.
 * @module components/manage/Blocks/Title/Edit
 */

import React from 'react'
import { defineMessages } from 'react-intl'
import { withDNDContext, SubblocksEdit, SubblocksWrapper } from 'volto-subblocks'
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import Body from './Body'
import {
  Chip,
  ChipLabel,
  Button
} from 'design-react-kit/dist/design-react-kit';
import cx from 'classnames';
import { SidebarPortal } from '@plone/volto/components'
import Sidebar from './Sidebar.jsx'
import { Grid } from 'semantic-ui-react'

const messages = defineMessages({
  titlePlaceholder: {
    id: 'Title placeholder',
    defaultMessage: 'Title...',
  },
  descriptionPlaceholder: {
    id: 'Description placeholder',
    defaultMessage: 'Description...',
  },
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutti',
  },
})
/**
 * Edit text block class.
 * @class Edit
 * @extends Component
 */
class BodyWrapper extends SubblocksEdit {
  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  
  render() {
    const argument = this.props?.data?.argument ? this.props?.data?.argument[0] : null;
    return (
      <div
        className={cx('argumentInEvidence', {'public-ui': this.props.inEditMode})}
      >
        <SubblocksWrapper node={this.node}>
          <div className={cx('container pt-5', {'p-5': this.props.inEditMode})}>
            <h2 className="text-white">{this.props.data.text}</h2>
            <div className="grid mt-5">
              {this.state.subblocks.map((subblock, subindex) => (
                <Body
                  data={subblock}
                  index={subindex}
                  inEditMode={this.props.inEditMode}
                  draggable={this.props.draggable}
                  selected={this.isSubblockSelected(subindex)}
                  {...this.subblockProps}
                  key={subindex}
                />
              ))}
            {this.props.selected && <Grid.Column>{this.renderAddBlockButton()}</Grid.Column>}
            </div>
          </div>
        </SubblocksWrapper>

        <SidebarPortal selected={this.props.selected}>
          <Sidebar
            {...this.props}
            data={this.props.data}
            block={this.props.block}
            onChangeBlock={this.onChangeSubblocks}
            selected={this.state.subIndexSelected}
            setSelected={this.onSubblockChangeFocus}
          />
        </SidebarPortal>

        <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-3 pt-5">
          <div className="row d-lg-inline-flex w-100">
            <div className="col-lg-3">
              <h6 className="text-uppercase text-center mt-1">ALTRI ARGOMENTI</h6>
            </div>
            <div className="col-lg-9">
              {
                this.props.data?.arguments?.map((argument, index) => (
                  <Link
                    to={flattenToAppURL(argument['@id'])}
                    key={argument['@id']}
                    title={argument.title}
                    className="text-decoration-none"
                  >
                    <Chip
                      color="primary"
                      disabled={false}
                      large
                      simple
                      tag="div"
                      className="mr-2"
                    >
                      <ChipLabel tag="span">
                        {argument.title}
                      </ChipLabel>
                    </Chip>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
        <div className="link-button mt-5">
        <Link
          to={'/argomenti'}
          className="text-decoration-none">
            <Button
              color="primary"
              className="view-all"
              icon={false}
              tag="button"
            >
              {this.props.intl?.formatMessage(messages.view_all)}
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}
export default React.memo(withDNDContext(BodyWrapper));
