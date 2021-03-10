/**
 * emailNotification actions.
 * @module actions/emailNotification/emailNotification
 */

export const EMAIL_SEND_ACTION_FORM = 'EMAIL_SEND_ACTION_FORM';

/**
 * Email send function
 * @function sendActionForm
 * @param {string} pat
 * @param {string} block_id
 * @param {Object} data
 * @returns {Object} attachments
 */
export function sendActionForm(path = '', block_id, data, attachments) {
  return {
    type: EMAIL_SEND_ACTION_FORM,
    request: {
      op: 'post',
      path: path + '/@send-action-form',
      data: {
        block_id,
        data,
        attachments,
      },
    },
  };
}
