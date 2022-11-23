/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useIntl, defineMessages } from 'react-intl';
import {
  Button,
  Input,
  Progress,
  Alert,
} from 'design-react-kit/dist/design-react-kit';

import { FontAwesomeIcon } from 'design-volto-theme/components/ItaliaTheme';
import {
  submitCustomerSatisfaction,
  resetSubmitCustomerSatisfaction,
  GoogleReCaptchaWidget,
  HoneypotWidget,
} from 'volto-customer-satisfaction';
import { isCmsUi } from '@plone/volto/helpers';
import config from '@plone/volto/registry';

const messages = defineMessages({
  title: {
    id: 'customer_satisfaction_title',
    defaultMessage: 'Was this page useful to you?',
  },
  yes: {
    id: 'customer_satisfaction_yes',
    defaultMessage: 'Yes',
  },
  no: {
    id: 'customer_satisfaction_no',
    defaultMessage: 'No',
  },
  suggestions_placeholder: {
    id: 'customer_satisfaction_suggestions_placeholder',
    defaultMessage:
      'Explain us why, and help us improve the quality of the site. (Leave your email address for any communications on the outcome of the report)',
  },
  submit: {
    id: 'customer_satisfaction_submit',
    defaultMessage: 'Submit your comment',
  },
  thank_you: {
    id: 'customer_satisfaction_thank_you',
    defaultMessage: 'Thank you for your feedback!',
  },
});

const hashFnv32a = (str, seed) => {
  /*jshint bitwise:false */
  var i,
    l,
    hval = seed === undefined ? 0x811c9dc5 : seed;

  for (i = 0, l = str.length; i < l; i++) {
    hval ^= str.charCodeAt(i);
    hval +=
      (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  }

  // Convert to 8 digit hex string
  return ('0000000' + (hval >>> 0).toString(16)).substr(-8);
};

const CustomerSatisfaction = () => {
  const intl = useIntl();
  const location = useLocation();
  const path = location.pathname ?? '/';
  const dispatch = useDispatch();
  const [satisfaction, setSatisfaction] = useState(null);
  const [formData, setFormData] = useState({});

  const submitResults = useSelector(
    (state) => state.submitCustomerSatisfaction,
  );
  const [validToken, setValidToken] = useState(null);
  let fieldHoney = process.env.RAZZLE_HONEYPOT_FIELD;

  if (__CLIENT__) {
    fieldHoney = window.env.RAZZLE_HONEYPOT_FIELD;
  }

  const changeSatisfaction = (e, s) => {
    e.stopPropagation();
    e.preventDefault();

    if (s === satisfaction) {
      setSatisfaction(null);
    } else {
      setSatisfaction(s);
    }
  };
  const updateFormData = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  useEffect(() => {
    setSatisfaction(null);
    setValidToken(null);
    return () => {
      dispatch(resetSubmitCustomerSatisfaction());
    };
  }, [path]);

  useEffect(() => {
    updateFormData(
      'vote',
      satisfaction === true ? 'ok' : satisfaction === false ? 'nok' : null,
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [satisfaction]);

  // initialized honeypot field
  useEffect(() => {
    updateFormData(fieldHoney, '');
  }, [fieldHoney]);

  const onVerifyCaptcha = useCallback(
    (token) => {
      if (satisfaction != null && !validToken) {
        setValidToken(token);
      }
    },
    [satisfaction, setValidToken, validToken],
  );

  const sendFormData = () => {
    const data = { ...formData };
    if (config.settings.siteProperties.enableCustomerSatisfactionCaptcha) {
      data['g-recaptcha-response'] = validToken;
    }
    dispatch(submitCustomerSatisfaction(path, data));
  };

  let action = path?.length > 1 ? path.replace(/\//g, '') : path;
  if (action?.length > 0) {
    action = action?.replace(/-/g, '_');
  } else {
    action = 'homepage';
  }

  action = hashFnv32a(action); //serve per evitare action con caratteri > 100. GoogleRecaptchaWidget richiede al max  100 caratteri per la action

  if (isCmsUi(path)) {
    return null;
  }

  const alertTransition = {
    appear: true,
    baseClass: 'fade',
    baseClassActive: 'show',
    enter: true,
    exit: true,
    in: true,
    mountOnEnter: false,
    tag: 'div',
    timeout: 150,
    unmountOnExit: true,
  };

  return (
    <div className="customer-satisfaction">
      <h2 id="cs-radiogroup-label">{intl.formatMessage(messages.title)}</h2>
      {submitResults?.error && (
        <Alert
          color="danger"
          fade
          isOpen
          tag="div"
          transition={alertTransition}
          className="mt-4"
        >
          <h4>Error</h4>
          {submitResults.error.response.body.message}
        </Alert>
      )}
      {!submitResults.error &&
        !submitResults?.loading &&
        !submitResults.loaded && (
          <form
            onSubmit={() => {
              sendFormData();
            }}
          >
            <div className="buttons" aria-labelledby="cs-radiogroup-label">
              <Button
                color="success"
                icon
                outline={satisfaction !== true}
                onClick={(e) => {
                  changeSatisfaction(e, true);
                }}
                aria-controls="cs-more"
                active={satisfaction === true}
                title={intl.formatMessage(messages.yes)}
              >
                <FontAwesomeIcon icon={['far', 'thumbs-up']} />
              </Button>

              <Button
                color="danger"
                icon
                outline={satisfaction !== false}
                onClick={(e) => {
                  changeSatisfaction(e, false);
                }}
                aria-controls="cs-more"
                active={satisfaction === false}
                title={intl.formatMessage(messages.no)}
              >
                <FontAwesomeIcon icon={['far', 'thumbs-down']} />
              </Button>
            </div>

            <div
              id="cs-more"
              role="region"
              aria-expanded={satisfaction !== null}
              aria-hidden={satisfaction === null}
            >
              <div className="comment">
                <Input
                  id="cs-comment"
                  label={intl.formatMessage(messages.suggestions_placeholder)}
                  onChange={(e) => {
                    updateFormData('comment', e.target.value);
                  }}
                  rows="3"
                  type="textarea"
                />
              </div>
              <HoneypotWidget
                updateFormData={updateFormData}
                field={fieldHoney}
              />
              {config.settings.siteProperties
                .enableCustomerSatisfactionCaptcha && (
                <GoogleReCaptchaWidget
                  key={action}
                  onVerify={onVerifyCaptcha}
                  action={action}
                />
              )}

              <div className="submit-wrapper">
                <Button
                  type="submit"
                  color="primary"
                  disabled={
                    config.settings.siteProperties
                      .enableCustomerSatisfactionCaptcha && !validToken
                  }
                >
                  {intl.formatMessage(messages.submit)}
                </Button>
              </div>
            </div>
          </form>
        )}
      {submitResults?.loading && (
        <Progress
          indeterminate={true}
          role="progressbar"
          tag="div"
          className="mt-4"
        />
      )}
      {submitResults?.loaded && (
        <Alert
          color="success"
          fade
          isOpen
          tag="div"
          transition={alertTransition}
          className="mt-4"
        >
          <h4>{intl.formatMessage(messages.thank_you)}</h4>
        </Alert>
      )}
    </div>
  );
};

export default CustomerSatisfaction;
