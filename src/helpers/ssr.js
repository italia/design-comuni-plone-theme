/*
 * Helper per l'html generato lato server (customizations/volto/helpers/Html):
 * window.env e window.__data vengono scritti in chiaro nella pagina.
 */
import serialize from 'serialize-javascript';
import omit from 'lodash/omit';

// Al client non servono e rivelerebbero l'indirizzo interno del backend.
// RAZZLE_INTERNAL_API_PATH Volto la passa al client solo per ripulire gli url
// di window.__data, che qui vengono già ripuliti (vedi serializeState)
export const SERVER_ONLY_ENV = [
  'RAZZLE_INTERNAL_API_PATH',
  'RAZZLE_PROXY_REWRITE_TARGET',
  'RAZZLE_BIND_ADDRESS',
];

export const getPublicRuntimeConfig = (runtimeConfig) =>
  omit(runtimeConfig, SERVER_ONLY_ENV);

// la stringa come compare nell'output di serialize (con / < > ecc. in escape)
const asSerialized = (value) => serialize(value).slice(1, -1);

/*
 * Serializza lo store per window.__data.
 * Se Volto chiama il backend senza VHM, i dati contengono gli url interni
 * (RAZZLE_INTERNAL_API_PATH): Volto li fa ripulire al client passandogli
 * RAZZLE_INTERNAL_API_PATH in window.env. Qui li sostituiamo con l'url
 * pubblico, così la variabile può restare solo sul server.
 */
export const serializeState = (state, { internalApiPath, apiPath } = {}) => {
  const serialized = serialize(state);
  if (!internalApiPath || !apiPath || internalApiPath === apiPath) {
    return serialized;
  }
  return serialized
    .split(asSerialized(internalApiPath))
    .join(asSerialized(apiPath));
};
