/* eslint-disable react-hooks/exhaustive-deps */
/**
 * DettagliProcedimentiView view component.
 * @module components/theme/View/DettagliProcedimentiView
 */

import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDettagliProcedimento } from 'design-comuni-plone-theme/actions';
import { useLocation } from 'react-router-dom';
import { flattenHTMLToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';

const messages = defineMessages({
  yes: {
    id: 'yes',
    defaultMessage: 'Si',
  },
  no: {
    id: 'no',
    defaultMessage: 'No',
  },
  dettaglio_tipologia_procedimento: {
    id: 'dettaglio_tipologia_procedimento',
    defaultMessage: 'Dettaglio tipologia procedimento',
  },
  iter_del_procedimento: {
    id: 'iter_del_procedimento',
    defaultMessage: 'Iter del procedimento',
  },
  modalita_di_avvio: {
    id: 'modalita_di_avvio',
    defaultMessage: 'Modalità di avvio',
  },
  descrizione: {
    id: 'descrizione',
    defaultMessage: 'Descrizione',
  },
  file_correlato: {
    id: 'file_correlato',
    defaultMessage: 'File correlato',
  },
  termini_del_procedimento: {
    id: 'termini_del_procedimento',
    defaultMessage: 'Termini del procedimento',
  },
  decorrenza_termine: {
    id: 'decorrenza_termine',
    defaultMessage: 'Decorrenza termine',
  },
  fine_termine: {
    id: 'fine_termine',
    defaultMessage: 'Fine termine',
  },
  tempo_medio: {
    id: 'tempo_medio',
    defaultMessage: 'Tempo medio',
  },
  silenzio_assenso: {
    id: 'silenzio_assenso',
    defaultMessage:
      "Silenzio assenso/Dichiarazione dell'interessato sostitutiva del provvedimento finale",
  },
  provvedimento_finale: {
    id: 'provvedimento_finale',
    defaultMessage: 'Provvedimento finale',
  },
  responsabile_del_procedimento_unità_organizzativa_competente: {
    id: 'responsabile_del_procedimento_unità_organizzativa_competente',
    defaultMessage:
      'Responsabile del procedimento e Unità Organizzativa competente',
  },
  unita_organizzativa_competente: {
    id: 'unita_organizzativa_competente',
    defaultMessage: 'Unità organizzativa competente del procedimento',
  },
  dirigente: {
    id: 'dirigente',
    defaultMessage: 'Dirigente',
  },
  responsabile_del_procedimento: {
    id: 'responsabile_del_procedimento',
    defaultMessage: 'Responsabile del procedimento',
  },
  organo_competente_provvedimento_finale: {
    id: 'organo_competente_provvedimento_finale',
    defaultMessage: 'Organo competente adozione provvedimento finale',
  },
  modalita_richiedere_informazioni_procedimentodali: {
    id: 'modalita_richiedere_informazioni_procedimentodali',
    defaultMessage: 'Modalità per richiedere informazioni sul procedimento',
  },
  strumenti_di_tutela: {
    id: 'strumenti_di_tutela',
    defaultMessage: 'Strumenti di tutela',
  },
  titolare_potere_sostitutivo: {
    id: 'titolare_potere_sostitutivo',
    defaultMessage: 'Titolare del potere sostitutivo',
  },
  ulteriori_informazioni: {
    id: 'ulteriori_informazioni',
    defaultMessage: 'Ulteriori informazioni',
  },
  risultati_indagini_customer_satisfaction: {
    id: 'risultati_indagini_customer_satisfaction',
    defaultMessage: 'Risultati indagini di customer satisfaction',
  },
  riferimenti_normativi: {
    id: 'riferimenti_normativi',
    defaultMessage: 'Riferimenti normativi',
  },
});

/**
 * DettagliProcedimentiView component class.
 * @function DettagliProcedimentiView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const DettagliProcedimentiView = ({ content }) => {
  const intl = useIntl();
  const location = useLocation();

  const dettagliProcedimento = useSelector(
    (state) => state.dettagliProcedimento.result,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const url = `${location.pathname}/@trasparenza${location.search}`;
    dispatch(getDettagliProcedimento(url));
  }, []);

  return (
    <>
      <div id="page-document" className="ui container">
        <h1 className="mb-4">
          {intl.formatMessage(messages.dettaglio_tipologia_procedimento)}
        </h1>
        <div
          className="mb-4"
          dangerouslySetInnerHTML={{
            __html: flattenHTMLToAppURL(
              dettagliProcedimento.descrizione?.data || '',
            ),
          }}
        ></div>
        <div>
          <h2 className="mb-4">
            {intl.formatMessage(messages.iter_del_procedimento)}
          </h2>

          {dettagliProcedimento.modalita_avvio && (
            <p className="d-flex">
              <span className="fw-semibold me-2">
                {intl.formatMessage(messages.modalita_di_avvio)}:
              </span>
              <span
                dangerouslySetInnerHTML={{
                  __html: flattenHTMLToAppURL(
                    dettagliProcedimento.modalita_avvio?.data || '',
                  ),
                }}
              ></span>
            </p>
          )}

          {dettagliProcedimento.descrizione && (
            <p className="d-flex">
              <span className="fw-semibold me-2">
                {intl.formatMessage(messages.descrizione)}:
              </span>
              <span
                dangerouslySetInnerHTML={{
                  __html: flattenHTMLToAppURL(
                    dettagliProcedimento.descrizione?.data || '',
                  ),
                }}
              ></span>
            </p>
          )}

          {dettagliProcedimento.file_correlato && (
            <p className="d-flex">
              <span className="fw-semibold me-2">
                {intl.formatMessage(messages.file_correlato)}:
              </span>
              <a
                href={flattenToAppURL(
                  dettagliProcedimento.file_correlato?.download || '',
                )}
                title={dettagliProcedimento.file_correlato?.filename}
              >
                {dettagliProcedimento.file_correlato?.filename}
              </a>
            </p>
          )}

          {(dettagliProcedimento.decorrenza_termine ||
            dettagliProcedimento.fine_termine ||
            dettagliProcedimento.tempo_medio ||
            dettagliProcedimento.silenzio_assenso) && (
            <>
              <p className="d-flex">
                <span className="fw-semibold me-2">
                  {intl.formatMessage(messages.termini_del_procedimento)}:
                </span>
              </p>
              <ul>
                {dettagliProcedimento.decorrenza_termine && (
                  <li>
                    <p className="d-flex">
                      <span className="fw-semibold me-2">
                        {intl.formatMessage(messages.decorrenza_termine)}:{' '}
                      </span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: flattenHTMLToAppURL(
                            dettagliProcedimento.decorrenza_termine?.data || '',
                          ),
                        }}
                      ></span>
                    </p>
                  </li>
                )}
                {dettagliProcedimento.fine_termine && (
                  <li>
                    <p className="d-flex">
                      <span className="fw-semibold me-2">
                        {intl.formatMessage(messages.fine_termine)}:{' '}
                      </span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: flattenHTMLToAppURL(
                            dettagliProcedimento.fine_termine?.data || '',
                          ),
                        }}
                      ></span>
                    </p>
                  </li>
                )}
                {dettagliProcedimento.tempo_medio && (
                  <li>
                    <p className="d-flex">
                      <span className="fw-semibold me-2">
                        {intl.formatMessage(messages.tempo_medio)}:{' '}
                      </span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: flattenHTMLToAppURL(
                            dettagliProcedimento.tempo_medio?.data || '',
                          ),
                        }}
                      ></span>
                    </p>
                  </li>
                )}
                {dettagliProcedimento.silenzio_assenso && (
                  <li>
                    <p className="d-flex">
                      <span className="fw-semibold me-2">
                        {intl.formatMessage(messages.silenzio_assenso)}:
                      </span>
                      <div>
                        {dettagliProcedimento.silenzio_assenso
                          ? intl.formatMessage(messages.yes)
                          : intl.formatMessage(messages.no)}
                      </div>
                    </p>
                  </li>
                )}
              </ul>
            </>
          )}
          {dettagliProcedimento.provvedimento_finale && (
            <p className="d-flex">
              <span className="fw-semibold me-2">
                {intl.formatMessage(messages.provvedimento_finale)}:
              </span>
              <span
                dangerouslySetInnerHTML={{
                  __html: flattenHTMLToAppURL(
                    dettagliProcedimento.provvedimento_finale?.data || '',
                  ),
                }}
              ></span>
            </p>
          )}
        </div>

        <h2 className="mb-4">
          {intl.formatMessage(
            messages.responsabile_del_procedimento_unità_organizzativa_competente,
          )}
        </h2>
        {dettagliProcedimento.ufficio_responsabile?.length > 0 && (
          <p className="d-flex">
            <span className="fw-semibold me-2">
              {intl.formatMessage(messages.unita_organizzativa_competente)}:
            </span>
            {dettagliProcedimento.ufficio_responsabile?.map((d, index) => (
              <UniversalLink href={d['@id']} className="me-2" key={index}>
                {d.title}
              </UniversalLink>
            ))}
          </p>
        )}
        {dettagliProcedimento.dirigente?.length > 0 && (
          <p className="d-flex">
            <span className="fw-semibold me-2">
              {intl.formatMessage(messages.dirigente)}:
            </span>
            <div>
              {dettagliProcedimento.dirigente?.map((d, index) => (
                <UniversalLink href={d['@id']} className="me-2" key={index}>
                  {d.title}
                </UniversalLink>
              ))}
            </div>
          </p>
        )}

        {dettagliProcedimento.responsabile_procedimento?.length > 0 && (
          <p className="d-flex">
            <span className="fw-semibold me-2">
              {intl.formatMessage(messages.responsabile_del_procedimento)}:
            </span>
            <div>
              {dettagliProcedimento.responsabile_procedimento?.map(
                (d, index) => (
                  <UniversalLink href={d['@id']} className="me-2" key={index}>
                    {d.title}
                  </UniversalLink>
                ),
              )}
            </div>
          </p>
        )}

        {dettagliProcedimento.organo_competente_provvedimento_finale && (
          <p className="d-flex">
            <span className="fw-semibold me-2">
              {intl.formatMessage(
                messages.organo_competente_provvedimento_finale,
              )}
              :
            </span>
            <span
              dangerouslySetInnerHTML={{
                __html: flattenHTMLToAppURL(
                  dettagliProcedimento.organo_competente_provvedimento_finale
                    ?.data || '',
                ),
              }}
            ></span>
          </p>
        )}

        {dettagliProcedimento.modalita_richiesta_informazioni && (
          <p className="d-flex">
            <span className="fw-semibold me-2">
              {intl.formatMessage(
                messages.modalita_richiedere_informazioni_procedimentodali,
              )}
              :
            </span>
            <span
              dangerouslySetInnerHTML={{
                __html: flattenHTMLToAppURL(
                  dettagliProcedimento.modalita_richiesta_informazioni?.data ||
                    '',
                ),
              }}
            ></span>
          </p>
        )}

        <h2 className="mb-4">
          {intl.formatMessage(messages.strumenti_di_tutela)}
        </h2>

        {dettagliProcedimento.strumenti_tutela && (
          <p className="d-flex">
            <span className="fw-semibold me-2">
              {intl.formatMessage(messages.strumenti_di_tutela)}:
            </span>
            <span
              dangerouslySetInnerHTML={{
                __html: flattenHTMLToAppURL(
                  dettagliProcedimento.strumenti_tutela?.data || '',
                ),
              }}
            ></span>
          </p>
        )}

        {dettagliProcedimento.titolare_potere_sostitutivo && (
          <p className="d-flex">
            <span className="fw-semibold me-2">
              {intl.formatMessage(messages.titolare_potere_sostitutivo)}:
            </span>
            <span
              dangerouslySetInnerHTML={{
                __html: flattenHTMLToAppURL(
                  dettagliProcedimento.titolare_potere_sostitutivo?.data || '',
                ),
              }}
            ></span>
          </p>
        )}

        <h2 className="mb-4">
          {intl.formatMessage(messages.ulteriori_informazioni)}
        </h2>

        {dettagliProcedimento.customer_satisfaction && (
          <p className="d-flex">
            <span className="fw-semibold me-2">
              {intl.formatMessage(
                messages.risultati_indagini_customer_satisfaction,
              )}
              :
            </span>
            <span
              dangerouslySetInnerHTML={{
                __html: flattenHTMLToAppURL(
                  dettagliProcedimento.customer_satisfaction?.data || '',
                ),
              }}
            ></span>
          </p>
        )}

        {dettagliProcedimento.riferimenti_normativi && (
          <p className="d-flex">
            <span className="fw-semibold me-2">
              {intl.formatMessage(messages.riferimenti_normativi)}:
            </span>
            <span
              dangerouslySetInnerHTML={{
                __html: flattenHTMLToAppURL(
                  dettagliProcedimento.riferimenti_normativi?.data || '',
                ),
              }}
            ></span>
          </p>
        )}
      </div>
    </>
  );
};

DettagliProcedimentiView.propTypes = {
  content: PropTypes.any,
};

export default DettagliProcedimentiView;
