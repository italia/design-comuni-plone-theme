import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useIntl, defineMessages } from 'react-intl';
import { isCmsUi } from '@plone/volto/helpers';
import {
  Container,
  Rating,
  Row,
  Col,
  Spinner,
  Card,
  Button,
  CardHeader,
} from 'design-react-kit';
import {
  getFeedbackFormByStep,
  getNumberOfSteps,
  getTranslatedQuestion,
  HoneypotWidget,
  GoogleReCaptchaWidget,
  submitFeedback,
  resetSubmitFeedback,
} from 'volto-feedback';
import cx from 'classnames';

const messages = defineMessages({
  title: {
    id: 'feedback_form_title',
    defaultMessage: 'How clear is the information on this page?',
  },
  yes: {
    id: 'feedback_form_yes',
    defaultMessage: 'Yes',
  },
  no: {
    id: 'feedback_form_no',
    defaultMessage: 'No',
  },
  suggestions_placeholder: {
    id: 'feedback_form_suggestions_placeholder',
    defaultMessage:
      'Explain us why, and help us improve the quality of the site',
  },
  submit: {
    id: 'feedback_form_submit',
    defaultMessage: 'Submit your comment',
  },
  thank_you: {
    id: 'feedback_form_thank_you',
    defaultMessage: 'Thank you for your feedback!',
  },
  next: {
    id: 'feedback_form_button_next',
    defaultMessage: 'Next',
  },
  prev: {
    id: 'feedback_form_button_prev',
    defaultMessage: 'Previous',
  },
  feedback_sent: {
    id: 'feedback_sent',
    defaultMessage: 'Your feedback was sent!',
  },
});

const FeedbackForm = () => {
  const intl = useIntl();
  const location = useLocation();
  const path = location.pathname ?? '/';
  const dispatch = useDispatch();
  const [satisfaction, setSatisfaction] = useState(null);
  const [step, setStep] = useState(0);
  const [invalidForm, setInvalidForm] = useState(false);
  const [formData, setFormData] = useState({});
  const captcha = !!process.env.RAZZLE_RECAPTCHA_KEY ? 'GoogleReCaptcha' : null;
  const submitResults = useSelector((state) => state.submitFeedback);
  const [validToken, setValidToken] = useState(null);
  let fieldHoney = process.env.RAZZLE_HONEYPOT_FIELD;

  if (__CLIENT__) {
    fieldHoney = window.env.RAZZLE_HONEYPOT_FIELD;
  }

  const numberOfSteps = useMemo(() => getNumberOfSteps(), []);

  const changeSatisfaction = (e) => {
    setSatisfaction(e);
  };

  const updateFormData = (field, value) => {
    if (field === 'comment') {
      if (value?.length > 200) setInvalidForm(true);
      else setInvalidForm(false);
    }
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const getFormFieldValue = (field) => formData?.[field] ?? undefined;

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

  useEffect(() => {
    setValidToken(null);
    setSatisfaction(null);
    return () => {
      dispatch(resetSubmitFeedback());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  useEffect(() => {
    updateFormData('vote', satisfaction ?? null);
    setStep(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [satisfaction]);

  // initialized honeypot field
  useEffect(() => {
    updateFormData(fieldHoney, '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldHoney]);

  const onVerifyCaptcha = useCallback(
    (token) => {
      if (satisfaction !== null && !validToken) {
        setValidToken(token);
      }
    },
    [satisfaction, setValidToken, validToken],
  );

  const resetFormData = () => {
    setFormData({
      [fieldHoney]: '',
    });
  };

  const sendFormData = () => {
    const data = {
      ...formData,
      ...(captcha && { 'g-recaptcha-response': validToken }),
      answer: getTranslatedQuestion(intl, formData.answer),
    };
    dispatch(submitFeedback(path, data));
    resetFormData();
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

  const renderFormStep = () => {
    if (step === undefined) return null;
    const StepToRender = getFeedbackFormByStep(step);
    return (
      <StepToRender
        updateFormData={updateFormData}
        userFeedback={satisfaction}
        intl={intl}
        step={step}
        totalSteps={numberOfSteps}
        getFormFieldValue={getFormFieldValue}
      />
    );
  };
  return (
    <div className="bg-primary">
      <Container>
        <Row className="d-flex justify-content-center bg-primary">
          <Col className="col-12 col-lg-6">
            <div className="feedback-form">
              <Card
                className="shadow card-wrapper py-4 px-4"
                data-element="feedback"
              >
                {!submitResults?.loading && !submitResults.loaded && (
                  <>
                    <h4
                      id="vf-radiogroup-label"
                      className="title-medium-2-semi-bold mb-0"
                    >
                      {intl.formatMessage(messages.title)}
                    </h4>
                    <div className="rating-container mb-0">
                      <Rating
                        name="satisfaction"
                        value={satisfaction}
                        inputs={[
                          'star1b',
                          'star2b',
                          'star3b',
                          'star4b',
                          'star5b',
                        ]}
                        aria-controls="vf-more"
                        className="volto-feedback-rating mb-0"
                        onChangeRating={changeSatisfaction}
                        legend=" "
                      />
                    </div>
                    {renderFormStep()}
                    <HoneypotWidget
                      updateFormData={updateFormData}
                      field={fieldHoney}
                    />
                    <GoogleReCaptchaWidget
                      key={action}
                      onVerify={onVerifyCaptcha}
                      action={action}
                    />
                    <div
                      className={cx(
                        'form-step-actions d-flex flex-nowrap w100 justify-content-center button-shadow',
                        {
                          'pt-4': satisfaction !== null,
                        },
                      )}
                      aria-hidden={satisfaction === null}
                    >
                      <Button
                        className="prev-action"
                        disabled={!!(step - 1)}
                        onClick={prevStep}
                        type="button"
                        outline
                        color="primary"
                      >
                        {intl.formatMessage(messages.prev)}
                      </Button>
                      {step !== numberOfSteps - 1 && (
                        <Button
                          color="primary"
                          onClick={nextStep}
                          className="next-action fw-bold"
                          type="button"
                        >
                          {intl.formatMessage(messages.next)}
                        </Button>
                      )}
                      {step === numberOfSteps - 1 && (
                        <Button
                          className="next-action fw-bold"
                          color="primary"
                          disabled={invalidForm}
                          type={'button'}
                          onClick={sendFormData}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') sendFormData();
                          }}
                        >
                          {intl.formatMessage(messages.next)}
                        </Button>
                      )}
                    </div>
                  </>
                )}
                {submitResults?.loading && (
                  <div className="d-flex justify-content-center align-items-center">
                    <Spinner double active />
                  </div>
                )}
                {submitResults?.loaded && (
                  <CardHeader className="border-0 mb-0 px-0">
                    <h4
                      id="rating-feedback"
                      className="title-medium-2-semi-bold mb-0"
                    >
                      {intl.formatMessage(messages.thank_you)}
                    </h4>
                  </CardHeader>
                )}
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeedbackForm;
