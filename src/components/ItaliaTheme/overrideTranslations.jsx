import { defineMessages } from 'react-intl';

export const messages = defineMessages({
  /******* CUSTOMIZZAZIONI DELLE LABEL PER IL RESET PASSOWRD. DA RIMUOVERE QUANDO MERGIANO https://github.com/plone/volto/pull/3299 */
  //theme/PasswordReset/RequestPassowrdReset.jsx
  emailTitle: {
    id: 'label_my_email_address_is',
    defaultMessage: 'My username is',
  },
  emailrequired: {
    id: 'Your username is required for reset your password.',
    defaultMessage: 'Your username is required for reset your password.',
  },

  //theme/PasswordReset/PassowrdReset.jsx
  emailTitlePR: {
    id: 'My username is',
    defaultMessage: 'My username is',
  },
  emailDescriptionPR: {
    id: 'Enter your username for verification.',
    defaultMessage: 'Enter your username for verification.',
  },
});
