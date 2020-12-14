/**
 * View  block.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Form from './Form';

/**
 * View blocks class.
 * @class View
 * @extends Component
 */
const View = (props) => {
  const intl = useIntl();

  return process.env.RAZZLE_RECAPTCHA_KEY ? (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.RAZZLE_RECAPTCHA_KEY}
      language={intl.locale ?? 'it'}
    >
      <Form {...props} />
    </GoogleReCaptchaProvider>
  ) : (
    <Form {...props} />
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default View;
