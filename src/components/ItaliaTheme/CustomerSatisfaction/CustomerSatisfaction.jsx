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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  submitCustomerSatisfaction,
  resetSubmitCustomerSatisfaction,
  GoogleReCaptchaWidget,
} from 'volto-customer-satisfaction';
import { isCmsUi } from '@plone/volto/helpers';

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
      'Explain us why, and help us improve the quality of the site',
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

const CustomerSatisfaction = () => {
  const intl = useIntl();
  const location = useLocation();
  const path = location.pathname ?? '/';
  const dispatch = useDispatch();
  const [satisfaction, setSatisfaction] = useState(null);
  const [formData, setFormData] = useState({});
  const captcha = !!process.env.RAZZLE_RECAPTCHA_KEY ? 'GoogleReCaptcha' : null;
  const submitResults = useSelector(
    (state) => state.submitCustomerSatisfaction,
  );
  const [validToken, setValidToken] = useState(null);

  const changeSatisfaction = (e, s) => {
    e.stopPropagation();
    e.preventDefault();

    if (s === satisfaction) {
      setSatisfaction(null);
    } else {
      setSatisfaction(s);
    }
  };

  useEffect(() => {
    setSatisfaction(null);
    setValidToken(null);
    return () => {
      dispatch(resetSubmitCustomerSatisfaction());
    };
  }, [path]);

  useEffect(() => {
    setFormData({
      ...formData,
      vote:
        satisfaction === true ? 'ok' : satisfaction === false ? 'nok' : null,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [satisfaction]);

  const onVerifyCaptcha = useCallback(
    (token) => {
      if (satisfaction != null && !validToken) {
        setValidToken(token);
      }
    },
    [satisfaction, setValidToken, validToken],
  );

  const sendFormData = () => {
    dispatch(
      submitCustomerSatisfaction(path, {
        ...formData,
        'g-recaptcha-response': validToken,
      }),
    );
  };

  let action = path?.length > 1 ? path.replace(/\//g, '') : path;
  if (action?.length > 0) {
    action = action?.replace(/-/g, '_');
  } else {
    action = 'homepage';
  }

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
              aria-hidden={satisfaction != null}
            >
              <div className="comment">
                <Input
                  id="cs-comment"
                  label={intl.formatMessage(messages.suggestions_placeholder)}
                  onChange={(e) => {
                    setFormData({ ...formData, comment: e.target.value });
                  }}
                  rows="3"
                  type="textarea"
                />
              </div>

              <GoogleReCaptchaWidget
                key={action}
                onVerify={onVerifyCaptcha}
                action={action}
              />

              <div className="submit-wrapper">
                <Button
                  type="submit"
                  color="primary"
                  disabled={captcha && !validToken}
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
