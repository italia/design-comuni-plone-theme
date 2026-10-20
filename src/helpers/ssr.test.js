import { getPublicRuntimeConfig, serializeState } from './ssr';

const INTERNAL = 'http://backend:8080/Plone';
const PUBLIC = 'https://www.comune.example.it';

// come fa il browser con window.__data
const parse = (serialized) =>
  // eslint-disable-next-line no-new-func
  new Function(`return ${serialized};`)();

describe('getPublicRuntimeConfig', () => {
  it('removes the env vars read only by the server', () => {
    expect(
      getPublicRuntimeConfig({
        RAZZLE_API_PATH: PUBLIC,
        RAZZLE_INTERNAL_API_PATH: INTERNAL,
        RAZZLE_PROXY_REWRITE_TARGET: '/VirtualHostBase/http/backend:8080/Plone',
        RAZZLE_BIND_ADDRESS: '10.0.0.1',
        RAZZLE_MATOMO_SITE_ID: '1',
      }),
    ).toEqual({ RAZZLE_API_PATH: PUBLIC, RAZZLE_MATOMO_SITE_ID: '1' });
  });
});

describe('serializeState', () => {
  const state = {
    content: {
      data: {
        '@id': `${INTERNAL}/news`,
        text: { data: `<p><a href="${INTERNAL}/news/item">link</a></p>` },
        items: [{ '@id': `${INTERNAL}/news/item` }],
      },
    },
  };

  it('replaces the internal api path with the public one', () => {
    const serialized = serializeState(state, {
      internalApiPath: INTERNAL,
      apiPath: PUBLIC,
    });
    expect(serialized).not.toContain('backend:8080');
    expect(parse(serialized)).toEqual({
      content: {
        data: {
          '@id': `${PUBLIC}/news`,
          text: { data: `<p><a href="${PUBLIC}/news/item">link</a></p>` },
          items: [{ '@id': `${PUBLIC}/news/item` }],
        },
      },
    });
  });

  it('keeps html escaped against xss', () => {
    const serialized = serializeState(
      { title: '</script><script>alert(1)</script>' },
      { internalApiPath: INTERNAL, apiPath: PUBLIC },
    );
    expect(serialized).not.toContain('</script>');
  });

  it('leaves the state untouched without an internal api path', () => {
    const serialized = serializeState(state, { apiPath: PUBLIC });
    expect(parse(serialized)).toEqual(state);
  });
});
