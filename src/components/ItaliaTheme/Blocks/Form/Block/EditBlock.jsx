/**
 * Edit text block.
 * @module components/manage/Blocks/Title/Edit
 */

import React from 'react';
import { compose } from 'redux';
import { injectIntl, defineMessages } from 'react-intl';
import { TextWidget } from '@plone/volto/components';
import {
  DNDSubblocks,
  SubblockEdit,
  Subblock,
} from '@italia/addons/volto-subblocks';

import Field from '../Field';
import { getFieldName } from '../utils';
import { Button, Icon } from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({
  titlePlaceholder: {
    id: 'Title placeholder',
    defaultMessage: 'Title...',
  },
  textPlaceholder: {
    id: 'Text placeholder',
    defaultMessage: 'Text...',
  },
  vedi: {
    id: 'Vedi',
    defaultMessage: 'Vedi',
  },
});
/**
 * Edit text block class.
 * @class Edit
 * @extends Component
 */
class EditBlock extends SubblockEdit {
  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs WysiwygEditor
   */
  constructor(props) {
    super(props);
    //default subblock values
    if (!props.data.field_type) {
      this.onChange({
        field_type: 'text',
      });
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
    const id = new Date().getTime();
    return (
      <Subblock subblock={this} className="subblock-edit">
        <div key={this.props.data.index}>
          <Field
            {...this.props.data}
            name={getFieldName(this.props.data.label)}
            key={this.props.data.index}
            isOnEdit={true}
            id={id}
            index={this.props.data.index}
            onChange={() => {}}
          />
        </div>
      </Subblock>
    );
  }
}

export default React.memo(compose(injectIntl, ...DNDSubblocks)(EditBlock));
