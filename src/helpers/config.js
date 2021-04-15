import config from '@plone/volto/registry';

export const getSiteProperty = (property, locale) => {
  let value = config.settings.siteProperties[property];

  if (value) {
    switch (typeof value) {
      case 'string':
        return value;
      case 'object':
        return (
          value[locale] ??
          value.default ??
          value[config.settings.defaultLanguage] ??
          value
        );
      default:
        break;
    }
  }
  return null;
};
