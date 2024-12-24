import { getFileViewFormat, FILE_EXTENSIONS, FILE_FORMATS } from './files';

describe('getFileViewFormat', () => {
  test('should correctly extract the extension and match the icon for a valid PDF URL with multiple segments after the extension', () => {
    const file = {
      filename:
        'https://example.com/amministrazione/documenti-e-dati/modulistica/area-servizi-educativi-e-scolastici/intestazione-ripartizione-rette/modulo_intestazione_ripartizione_rette_nona_784_9690.pdf/@@download/file_principale',
      'content-type': 'application/pdf',
    };

    const result = getFileViewFormat(file);

    expect(result.icon).toEqual(FILE_EXTENSIONS.pdf.icon); // Verifica che l'icona sia corretta
    expect(result.label).toEqual(FILE_EXTENSIONS.pdf.format_name); // Verifica che il formato sia corretto
  });

  test('should correctly handle a PDF URL without multiple segments after the extension', () => {
    const file = {
      filename:
        'https://example.com/amministrazione/documenti-e-dati/modulistica/area-servizi-educativi-e-scolastici/intestazione-ripartizione-rette/modulo_intestazione_ripartizione_rette_nona_784_9690.pdf/@@download/filehttps://example.com/amministrazione/documenti-e-dati/modulistica/area-servizi-educativi-e-scolastici/intestazione-ripartizione-rette/modulo_intestazione_ripartizione_rette_nona_784_9690.pdf',
      'content-type': 'application/pdf',
    };

    const result = getFileViewFormat(file);

    expect(result.icon).toEqual(FILE_EXTENSIONS.pdf.icon);
    expect(result.label).toEqual(FILE_EXTENSIONS.pdf.format_name);
  });

  test('should return correct format for a non-PDF file extension', () => {
    const file = {
      filename: 'https://example.com/file/example.xsd',
      'content-type': 'application/xml',
    };

    const result = getFileViewFormat(file);

    expect(result.icon).toEqual(FILE_EXTENSIONS.xsd.icon);
    expect(result.label).toEqual(FILE_EXTENSIONS.xsd.format_name);
  });

  test('should return correct format for a non-PDF content-type', () => {
    const file = {
      filename: 'https://example.com/file/example.xml',
      'content-type': 'application/xml',
    };

    const result = getFileViewFormat(file);

    expect(result.icon).toEqual(FILE_FORMATS['application/xml'].icon);
    expect(result.label).toEqual(FILE_FORMATS['application/xml'].format_name);
  });

  test('should return null format when extension or content-type is not found', () => {
    const file = {
      filename: 'https://example.com/file/unknown.xyz',
      'content-type': 'application/unknown',
    };

    const result = getFileViewFormat(file);

    expect(result.icon).toBeNull();
    expect(result.label).toBeNull();
  });

  test('should handle file URLs without an extension', () => {
    const file = {
      filename: 'https://example.com/file/no-extension/',
      'content-type': 'text/plain',
    };

    const result = getFileViewFormat(file);

    expect(result.icon).toEqual(FILE_FORMATS['text/plain'].icon);
    expect(result.label).toEqual(FILE_FORMATS['text/plain'].format_name);
  });

  test('should handle case where URL is .pdf but content-type is text/plain', () => {
    const file = {
      filename: 'https://example.com/file/example.pdf',
      'content-type': 'text/plain',
    };

    const result = getFileViewFormat(file);

    // La funzione dovrebbe comunque dare priorità all'estensione ".pdf" rispetto al content-type "text/plain"
    expect(result.icon).toEqual(FILE_EXTENSIONS.pdf.icon); // Verifica che l'icona PDF venga restituita
    expect(result.label).toEqual(FILE_EXTENSIONS.pdf.format_name); // Verifica che il formato PDF venga restituito
  });
});
