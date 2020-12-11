/**
 * Edit text block.
 * @module components/manage/Blocks/Title/Edit
 */

import React from 'react';
import { compose } from 'redux';
import { injectIntl, defineMessages } from 'react-intl';

import {
  DNDSubblocks,
  SubblockEdit,
  Subblock,
} from '@italia/addons/volto-subblocks';
import ViewBlock from './ViewBlock';

const messages = defineMessages({
  noVideoUrl: {
    id: 'noVideoUrl',
    defaultMessage:
      "Inserisci l'URL di un video YouTube o Vimeo nella barra a lato.",
  },
});
/**
 * Edit text block class.
 * @class Edit
 * @extends Component
 */
class EditBlock extends SubblockEdit {
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
      <Subblock subblock={this} className="subblock-edit">
        <ViewBlock data={this.props.data} />
        {(!this.props.data?.url || this.props.data?.url.length === 0) && (
          <div>{this.props.intl.formatMessage(messages.noVideoUrl)}</div>
        )}
      </Subblock>
    );
  }
}

export default React.memo(compose(injectIntl, ...DNDSubblocks)(EditBlock));
