import FormValidation from '@plone/volto/helpers/FormValidation/FormValidation';
import { messages } from '@plone/volto/helpers/MessageLabels/MessageLabels';

// copied over and tweaked from
// https://github.com/plone/volto/blob/17.x.x/src/helpers/FormValidation/FormValidation.test.js
const schema = {
  properties: {
    username: { title: 'Username', type: 'string', description: '' },
    email: { title: 'Email', type: 'string', widget: 'email', description: '' },
    url: { title: 'url', type: 'string', widget: 'url', description: '' },
  },
  fieldsets: [
    { id: 'default', title: 'FIXME: User Data', fields: ['username'] },
    { id: 'second', title: 'Second: User Data', fields: ['email'] },
  ],
  required: ['username'],
};
// const errors = { email: ['The specified email is not valid.'] };
const formData = { username: 'test username', email: 'test@example.com' };
const formatMessage = (messageObj) => {
  return messageObj?.defaultMessage;
};
const errorJSON =
  "[{'message': 'The specified email is not valid.', 'field': 'email', 'error': 'ValidationError'}]";
// end copied section

describe('FormValidation', () => {
  describe('validateFieldsPerFieldset', () => {
    // Tests copied over from Volto
    it('validates incorrect url', () => {
      formData.url = 'foo';
      expect(
        FormValidation.validateFieldsPerFieldset({
          schema,
          formData,
          formatMessage,
        }),
      ).toEqual({ url: [messages.isValidURL.defaultMessage] });
    });
    it('validates url', () => {
      formData.url = 'https://plone.org/';
      expect(
        FormValidation.validateFieldsPerFieldset({
          schema,
          formData,
          formatMessage,
        }),
      ).toEqual({});
    });
    it('validates url with ip', () => {
      formData.url = 'http://127.0.0.1:8080/Plone';
      expect(
        FormValidation.validateFieldsPerFieldset({
          schema,
          formData,
          formatMessage,
        }),
      ).toEqual({});
    });
    it('validates url with localhost', () => {
      formData.url = 'http://localhost:8080/Plone';
      expect(
        FormValidation.validateFieldsPerFieldset({
          schema,
          formData,
          formatMessage,
        }),
      ).toEqual({});
    });
    // Our additional tests
    it('validates url with path', () => {
      formData.url = 'https://plone.org/Plone';
      expect(
        FormValidation.validateFieldsPerFieldset({
          schema,
          formData,
          formatMessage,
        }),
      ).toEqual({});
    });
    it('validates url with port', () => {
      formData.url = 'https://plone.org:8080/Plone';
      expect(
        FormValidation.validateFieldsPerFieldset({
          schema,
          formData,
          formatMessage,
        }),
      ).toEqual({});
    });
    it('validates url with query', () => {
      formData.url = 'https://plone.org/Plone?query=1';
      expect(
        FormValidation.validateFieldsPerFieldset({
          schema,
          formData,
          formatMessage,
        }),
      ).toEqual({});
    });
    it('validates url with query with slashes', () => {
      formData.url = 'https://plone.org/Plone?query=1/2/3';
      expect(
        FormValidation.validateFieldsPerFieldset({
          schema,
          formData,
          formatMessage,
        }),
      ).toEqual({});
    });
    it('validates url with fragment', () => {
      formData.url = 'https://plone.org/Plone#fragment';
      expect(
        FormValidation.validateFieldsPerFieldset({
          schema,
          formData,
          formatMessage,
        }),
      ).toEqual({});
    });
    it('validates url with query and fragment', () => {
      formData.url = 'https://plone.org/Plone?query=1#fragment';
      expect(
        FormValidation.validateFieldsPerFieldset({
          schema,
          formData,
          formatMessage,
        }),
      ).toEqual({});
    });
  });
});
