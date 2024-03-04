import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useIntl, defineMessages } from 'react-intl';
import { isCmsUi } from '@plone/volto/helpers';
import {
  Container,
  Row,
  Col,
  Spinner,
  Card,
  CardHeader,
  CardBody,
} from 'design-react-kit';
import {
  getNumberOfSteps,
  getTranslatedQuestion,
  HoneypotWidget,
  GoogleReCaptchaWidget,
  submitFeedback,
  resetSubmitFeedback,
  getFeedbackThreshold,
} from 'volto-feedback';
import cx from 'classnames';
import AnswersStep from './Steps/AnswersStep';
import CommentsStep from './Steps/CommentsStep';
import RTRating from './Steps/Commons/Rating';
import { PropTypes } from 'prop-types';

const messages = defineMessages({
  title: {
    id: 'feedback_form_title',
    defaultMessage: 'How clear is the information on this page?',
  },
  service_title: {
    id: 'feedback_form_title_service',
    defaultMessage: 'How easy was it to use this service?',
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
  unclear_instructions: {
    id: 'feedback_unclear_instructions',
    defaultMessage: 'Some instructions were not clear and confusin',
  },
  incomplete_instructions: {
    id: 'feedback_incomplete_instructions',
    defaultMessage: 'Some instructions were incomplete',
  },
  unclear_proceeding: {
    id: 'feedback_unclear_proceeding',
    defaultMessage:
      "Sometimes I couldn't understand if I was proceeding correctly",
  },
  technical_problems: {
    id: 'feedback_technical_problems',
    defaultMessage: 'I ran into technical problems',
  },
  other_negative: {
    id: 'feedback_other_negative',
    defaultMessage: 'Other',
  },
  clear_instructions: {
    id: 'feedback_clear_instructions',
    defaultMessage: 'The instructions were clear',
  },
  complete_instructions: {
    id: 'feedback_complete_instructions',
    defaultMessage: 'The instructions were complete',
  },
  clear_proceeding: {
    id: 'feedback_clear_proceeding',
    defaultMessage: 'I always understood that I was proceeding correctly',
  },
  no_technical_problems: {
    id: 'feedback_no_technical_problems',
    defaultMessage: 'I had no technical problems',
  },
  other_positive: {
    id: 'feedback_other_positive',
    defaultMessage: 'Other',
  },
  feedback: {
    id: 'feedback_stars',
    defaultMessage: 'Valuta da 1 a 5 stelle',
  },
  error: {
    id: 'feedback_error',
    defaultMessage: 'Error',
  },
});

const FeedbackForm = ({ contentType, pathname }) => {
  const intl = useIntl();
  const location = useLocation();
  const path = pathname ?? location.pathname ?? '/';
  const dispatch = useDispatch();
  const [satisfaction, setSatisfaction] = useState(null);
  const [step, setStep] = useState(0);
  const [invalidForm, setInvalidForm] = useState(true);
  const [formData, setFormData] = useState({});
  const captcha = !!process.env.RAZZLE_RECAPTCHA_KEY ? 'GoogleReCaptcha' : null;
  const submitResults = useSelector((state) => state.submitFeedback);
  const [validToken, setValidToken] = useState(null);
  const threshold = getFeedbackThreshold();
  const fieldHoney = __CLIENT__
    ? window.env.RAZZLE_HONEYPOT_FIELD
    : process.env.RAZZLE_HONEYPOT_FIELD;

  const numberOfSteps = getNumberOfSteps();

  const changeSatisfaction = (e) => {
    setSatisfaction(e);
  };
  const updateFormData = (field, value) => {
    if (field === 'comment') {
      if (value?.length > 200) setInvalidForm(true);
      else setInvalidForm(false);
    }
    if (field === 'answer') {
      if (!value) setInvalidForm(true);
      else setInvalidForm(false);
    }
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  const getFormFieldValue = (field) => formData?.[field] ?? undefined;

  const nextStep = () => {
    if (!invalidForm) setStep(step + 1);
  };

  const prevStep = () => {
    if (!invalidForm && step !== 0) {
      setStep(step - 1);
    }
  };

  useEffect(() => {
    setValidToken(null);
    setSatisfaction(null);
    return () => {
      dispatch(resetSubmitFeedback());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  useEffect(() => {
    const currentVote = getFormFieldValue('vote');
    if (
      (currentVote > threshold && satisfaction < threshold) ||
      (currentVote < threshold && satisfaction > threshold)
    )
      updateFormData('answer', null);
    updateFormData('vote', satisfaction ?? null);
    setStep(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [satisfaction]);

  // initialized honeypot field
  useEffect(() => {
    updateFormData(fieldHoney, '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldHoney]);

  // Motivazioni del focus programmatico
  //  - su alcuni browser viene dichiarato "object replacement character" ai rerender di react
  //    che sono inevitabili mentre il focus rimane sul bottone ma non viene detto
  //  - replichiamo 1:1 il comportamento del secondo step, quando vai avanti hai autofocus sulla
  //    textarea per i commenti
  //  - essendo annunciato ora il titolo dello step, l'utente sr sa comunque benissimo dove si trova,
  //    anzi, il flow di compilazione del form kb+sr e' molto piu' agevole
  useEffect(() => {
    if (step === 0 && getFormFieldValue('answer')) {
      const selectedAnswer = document.getElementById(
        `${
          satisfaction > threshold ? 'positive' : 'negative'
        }-${getFormFieldValue('answer')}`,
      );
      selectedAnswer.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

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
    if (invalidForm) return;
    setStep(2);
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

  return (
    <section className="bg-primary customer-satisfaction">
      <Container>
        <Row className="d-flex justify-content-center bg-primary">
          <Col className="col-12 col-lg-6">
            <div className="feedback-form" role="form">
              <Card
                className="shadow card-wrapper py-4 px-4"
                data-element="feedback"
              >
                {!submitResults?.loading &&
                  !submitResults.loaded &&
                  step !== 2 && (
                    <>
                      <h2
                        id="vf-radiogroup-label"
                        className="title-medium-2-semi-bold mb-0"
                        data-element="feedback-title"
                      >
                        {/* Il validatore a quanto pare fa il check per titolo.
                            Il titolo da specifiche deve essere diverso per Servizi, ma loro non lo sanno
                            https://github.com/italia/pa-website-validator/blob/main/src/storage/municipality/feedbackComponentStructure.ts#L8
                        */}
                        {/* {contentType === 'Servizio'
                          ? intl.formatMessage(messages.service_title)
                          : intl.formatMessage(messages.title)} */}

                        {/* Aggiunto titolo per compatibilità modello AGID di io-cittadino */}
                        {contentType === 'ModelloPratica'
                          ? intl.formatMessage(messages.service_title)
                          : intl.formatMessage(messages.title)}
                      </h2>
                      <div className="rating-container mb-0">
                        <RTRating
                          name="satisfaction"
                          value={satisfaction}
                          // Qui l'implementazione di design react kit sta su con gli stecchini, rifatta
                          inputs={[
                            {
                              name: 'star1b',
                              value: 1,
                            },
                            {
                              name: 'star2b',
                              value: 2,
                            },
                            {
                              name: 'star3b',
                              value: 3,
                            },
                            {
                              name: 'star4b',
                              value: 4,
                            },
                            {
                              name: 'star5b',
                              value: 5,
                            },
                          ]}
                          aria-controls={
                            satisfaction > threshold
                              ? 'vf-more-positive'
                              : 'vf-more-negative'
                          }
                          className="volto-feedback-rating mb-0"
                          onChangeRating={changeSatisfaction}
                          legend={intl.formatMessage(messages.feedback)}
                          wrapperClassName={'rating'}
                        />
                      </div>
                      <AnswersStep
                        updateFormData={updateFormData}
                        userFeedback={satisfaction}
                        intl={intl}
                        step={step}
                        totalSteps={numberOfSteps}
                        getFormFieldValue={getFormFieldValue}
                      />
                      <CommentsStep
                        updateFormData={updateFormData}
                        userFeedback={satisfaction}
                        intl={intl}
                        step={step}
                        totalSteps={numberOfSteps}
                        getFormFieldValue={getFormFieldValue}
                      />
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
                          'form-step-actions flex-nowrap w100 justify-content-center button-shadow',
                          {
                            'pt-4 d-flex': satisfaction,
                            'd-none': !satisfaction,
                          },
                        )}
                        aria-hidden={!satisfaction}
                      >
                        {/* Bug bottoni del kit. Disabled e' settato anche se compare la prop aria-disabled,
                        quando lo scopo sarebbe continuare a poter usufruire dei focus anche in screen reader.
                        Per i vedenti, la classe dimmed fa il suo lavoro e disabilita i click/input utente */}
                        <button
                          type="button"
                          onClick={prevStep}
                          disabled={false}
                          className={cx(
                            'me-4 fw-bold btn btn-outline-primary',
                            {
                              disabled: step === 0,
                            },
                          )}
                          aria-disabled={!(!invalidForm && step !== 0)}
                        >
                          {intl.formatMessage(messages.prev)}
                        </button>

                        {step !== numberOfSteps - 1 && (
                          <button
                            type="button"
                            onClick={nextStep}
                            disabled={false}
                            aria-disabled={invalidForm}
                            className={cx('fw-bold btn btn-primary', {
                              disabled: invalidForm,
                            })}
                          >
                            {intl.formatMessage(messages.next)}
                          </button>
                        )}
                        {step === numberOfSteps - 1 && (
                          <button
                            className={cx('fw-bold btn btn-primary', {
                              disabled: invalidForm,
                            })}
                            type="submit"
                            disabled={false}
                            aria-disabled={invalidForm}
                            onClick={sendFormData}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && !invalidForm)
                                sendFormData();
                            }}
                          >
                            {intl.formatMessage(messages.next)}
                          </button>
                        )}
                      </div>
                    </>
                  )}
                {submitResults?.loading && (
                  <div className="d-flex justify-content-center align-items-center">
                    <Spinner double active />
                  </div>
                )}
                {submitResults?.loaded && step === 2 && (
                  <CardHeader className="border-0 mb-0 px-0">
                    <h4
                      id="rating-feedback"
                      className="title-medium-2-semi-bold mb-0"
                    >
                      {intl.formatMessage(messages.thank_you)}
                    </h4>
                  </CardHeader>
                )}
                {step === 2 &&
                  !submitResults?.loaded &&
                  !submitResults.loading &&
                  submitResults.error?.response?.body?.message && (
                    <>
                      <CardHeader className="border-0 mb-0 px-0">
                        <h4
                          id="rating-feedback"
                          className="title-medium-2-semi-bold mb-0"
                        >
                          {intl.formatMessage(messages.error)}{' '}
                          {submitResults.error?.response.status}:{' '}
                          {submitResults.error?.response.statusText}
                        </h4>
                      </CardHeader>
                      <CardBody>
                        {submitResults.error?.response?.body?.message}
                      </CardBody>
                    </>
                  )}
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

FeedbackForm.propTypes = {
  contentType: PropTypes.string,
  pathname: PropTypes.string,
};

export default FeedbackForm;
