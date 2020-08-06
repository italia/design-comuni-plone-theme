import React from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import { compose } from 'redux'
import { TextEditorWidget } from '@italia/components/ItaliaTheme';
import { DNDSubblocks, SubblockEdit, Subblock } from 'volto-subblocks'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardReadMore
} from 'design-react-kit/dist/design-react-kit';
import { settings } from '@italia/config';
import redraft from 'redraft';

const messages = defineMessages({
  titlePlaceholder: {
    id: 'Title placeholder',
    defaultMessage: 'Title...',
  },
  exploreArgument: {
    id: 'exploreArgument',
    defaultMessage: 'Esplora argomento',
  },
})

class Body extends SubblockEdit {
  constructor(props) {
    super(props)
    this.state = {
      focusOn: 'title',
    }
    if (!__SERVER__) {
    }
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const argument = this.props?.data?.argument ? this.props?.data?.argument[0] : null;
    return (
      <Subblock subblock={this} draggable={this.props.draggable}>
        <Card
          className="card-bg"
          noWrapper={true}
          tag="div"
        >
          <CardBody tag="div">
            <CardTitle tag="h3">
              {argument?.title}
            </CardTitle>
            <CardText tag="p">
              {argument?.description}
            </CardText>
            {this.props.inEditMode ?
              <TextEditorWidget
                data={this.props.data}
                fieldName="title"
                selected={this.props.selected || this.state.focusOn === 'title'}
                block={this.props.block}
                onChangeBlock={this.onChange}
                placeholder={this.props.intl.formatMessage(messages.titlePlaceholder)}
                focusOn={this.focusOn}
              />
              :
                <div>
                  {redraft(
                    this.props.data.title,
                    settings.ToHTMLRenderers,
                    settings.ToHTMLOptions,
                  )}
                </div>
            }
            <CardReadMore
              iconName="it-arrow-right"
              tag="a"
              text={this.props.intl.formatMessage(messages.exploreArgument)}
              href={argument?.id}
            />
          </CardBody>
        </Card>
      </Subblock>
    )
  }
}
export default React.memo(compose(injectIntl, ...DNDSubblocks)(Body))