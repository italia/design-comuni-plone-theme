import sanitizeApiErrors, { sanitizeApiError } from './sanitizeApiErrors';

const superagentError = () => {
  const error = new Error('Not Found');
  error.status = 404;
  error.response = {
    status: 404,
    statusCode: 404,
    body: { message: 'Resource not found', type: 'NotFound' },
    text: '{"message": "Resource not found", "type": "NotFound"}',
    header: { 'x-powered-by': 'Zope (www.zope.dev), Python (www.python.org)' },
    headers: { 'x-powered-by': 'Zope (www.zope.dev), Python (www.python.org)' },
    //lato server req è la ClientRequest di node, request la richiesta superagent
    req: {
      method: 'GET',
      path: '/++api++/foo?expand=breadcrumbs',
      host: 'site.localhost',
    },
    request: {
      method: 'GET',
      url: 'http://site.localhost:11100/++api++/foo?expand=breadcrumbs',
      _header: { 'x-forwarded-for': '1.2.3.4, 10.0.0.1' },
    },
    error: {
      status: 404,
      method: 'GET',
      path: '/++api++/foo',
      message: 'cannot GET /++api++/foo (404)',
    },
  };
  return error;
};

describe('sanitizeApiError', () => {
  it('keeps only the fields used by the ui', () => {
    expect(sanitizeApiError(superagentError())).toEqual({
      status: 404,
      code: undefined,
      message: 'Not Found',
      response: {
        status: 404,
        statusCode: 404,
        body: { message: 'Resource not found', type: 'NotFound' },
        text: '{"message": "Resource not found", "type": "NotFound"}',
        req: { method: 'GET', url: '/++api++/foo?expand=breadcrumbs' },
        error: {
          status: 404,
          method: 'GET',
          path: '/++api++/foo',
          message: 'cannot GET /++api++/foo (404)',
        },
      },
    });
  });

  it('does not leak request or backend headers once serialized', () => {
    const serialized = JSON.stringify(sanitizeApiError(superagentError()));
    expect(serialized).not.toContain('x-forwarded-for');
    expect(serialized).not.toContain('10.0.0.1');
    expect(serialized).not.toContain('localhost:11100');
    expect(serialized).not.toContain('x-powered-by');
  });

  it('leaves errors without a response untouched', () => {
    const error = { code: 301, url: '/new-url' };
    expect(sanitizeApiError(error)).toBe(error);
  });
});

describe('sanitizeApiErrors middleware', () => {
  afterEach(() => {
    global.__SERVER__ = undefined;
  });

  it('sanitizes the error on the server', () => {
    global.__SERVER__ = true;
    const next = jest.fn();
    sanitizeApiErrors()(next)({
      type: 'GET_CONTENT_FAIL',
      error: superagentError(),
    });
    expect(next.mock.calls[0][0].error.response.req).toEqual({
      method: 'GET',
      url: '/++api++/foo?expand=breadcrumbs',
    });
  });

  it('replaces the response stored in statusCode on 401', () => {
    global.__SERVER__ = true;
    const next = jest.fn();
    const error = superagentError();
    error.status = 401;
    error.response.status = 401;
    sanitizeApiErrors()(next)({
      type: 'SET_APIERROR',
      error,
      statusCode: error.response,
    });
    const action = next.mock.calls[0][0];
    expect(action.statusCode).toBe(401);
    expect(JSON.stringify(action)).not.toContain('x-forwarded-for');
  });

  it('passes the action through on the client', () => {
    global.__SERVER__ = false;
    const next = jest.fn();
    const action = { type: 'GET_CONTENT_FAIL', error: superagentError() };
    sanitizeApiErrors()(next)(action);
    expect(next).toHaveBeenCalledWith(action);
  });
});
