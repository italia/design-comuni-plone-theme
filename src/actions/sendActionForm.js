/**
 * emailNotification actions.
 * @module actions/emailNotification/emailNotification
 */

export const EMAIL_SEND_ACTION_FORM = 'EMAIL_SEND_ACTION_FORM';

/**
 * Email send function
 * @function sendActionForm
 * @param {string} name New password.
 * @param {string} from Sender mail address.
 * @param {string} to Receiver mail address.
 * @param {string} subject Email subject.
 * @param {string} message Email message.
 * @returns {Object} Edit sendActionForm action.
 */
export function sendActionForm(path = '', block_id, from, subject, message) {
  return {
    type: EMAIL_SEND_ACTION_FORM,
    request: {
      op: 'post',
      path: path + '/@send-action-form',
      data: {
        block_id,
        from,
        subject,
        message,
      },
    },
  };
}
