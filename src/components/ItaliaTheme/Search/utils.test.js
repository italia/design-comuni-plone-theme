/**
 * Tests for the @search query built by the search page: content type filter
 * and site search settings (useSiteSearchSettings parameter).
 *
 * Author: Giulio Malaguti
 * Last modified: 2026-11-19
 */
import SearchUtils from './utils';

const { getSearchParamsURL, parseFetchedPortalTypes } = SearchUtils;

const searchQuery = (portalTypes = {}, useSiteSearchSettings) =>
  getSearchParamsURL(
    '',
    {},
    {},
    {},
    portalTypes,
    {},
    1,
    null,
    null,
    'it',
    true,
    useSiteSearchSettings,
  );

const types = {
  Document: { value: true, label: 'Pagina' },
  File: { value: false, label: 'File' },
};

describe('getSearchParamsURL', () => {
  it('applies the site search settings by default', () => {
    expect(searchQuery()).toHaveProperty('use_site_search_settings', true);
  });

  it('sends only the checked types', () => {
    expect(searchQuery(types).portal_type).toEqual(['Document']);
  });

  it('skips the site search settings when useSiteSearchSettings is false', () => {
    const query = searchQuery(types, false);
    expect(query).not.toHaveProperty('use_site_search_settings');
    expect(query.portal_type).toEqual(['Document']);
  });
});

describe('parseFetchedPortalTypes', () => {
  const fetched = [
    { id: 'Document', label: 'Pagina' },
    { id: 'Image', label: 'Immagine' },
  ];

  it('leaves the excluded types unchecked', () => {
    const parsed = parseFetchedPortalTypes(fetched, ['Image'], {});
    expect(parsed.Document.value).toBe(true);
    expect(parsed.Image.value).toBe(false);
  });

  it('checks every type when nothing is excluded', () => {
    const parsed = parseFetchedPortalTypes(fetched, [], {});
    expect(parsed.Image.value).toBe(true);
  });
});
