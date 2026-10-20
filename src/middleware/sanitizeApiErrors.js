/*
 * Durante l'SSR Volto salva nello store l'errore di superagent così com'è e
 * lo store viene poi serializzato nella pagina (window.__data).
 * In questo modo finivano nell'html gli header della richiesta verso il
 * backend (x-forwarded-for con gli ip interni), l'url interno del backend e
 * gli header di risposta di Plone.
 * Questo middleware sostituisce l'errore con una copia che contiene solo i
 * campi letti dall'interfaccia.
 */

const toPath = (url) => {
  if (!url) {
    return url;
  }
  try {
    const { pathname, search } = new URL(url);
    return `${pathname}${search}`;
  } catch {
    //è già un path
    return url;
  }
};

export const sanitizeApiError = (error) => {
  const response = error?.response;
  if (!response) {
    return error;
  }
  return {
    status: error.status,
    code: error.code,
    message: error.message,
    response: {
      status: response.status,
      statusCode: response.statusCode,
      body: response.body,
      text: response.text,
      //req.url può servire ai temi derivati (es. tracciamento dei 404).
      //Lato server response.req è la ClientRequest di node (senza url), la
      //richiesta superagent è in response.request
      req: {
        method: response.request?.method ?? response.req?.method,
        url: toPath(response.request?.url ?? response.req?.url),
      },
      error: response.error && {
        status: response.error.status,
        method: response.error.method,
        path: toPath(response.error.path),
        message: response.error.message,
      },
    },
  };
};

const sanitizeApiErrors = () => (next) => (action) => {
  if (!__SERVER__ || !action?.error?.response) {
    return next(action);
  }
  const { error, statusCode } = action;
  return next({
    ...action,
    error: sanitizeApiError(error),
    //sul 401 Volto mette in statusCode (SET_APIERROR) l'intera response
    ...(statusCode?.status ? { statusCode: statusCode.status } : {}),
  });
};

export default sanitizeApiErrors;
