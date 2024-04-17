import config from '@plone/volto/registry';

export const getSiteProperty = (property, locale) => {
  let value = config.settings.siteProperties[property];

  if (value) {
    switch (typeof value) {
      case 'string':
        return value;
      case 'object':
        if (config.settings.isMultilingual) {
          return (
            value[locale] ??
            value[config.settings.defaultLanguage] ??
            value.default ??
            value
          );
        } else {
          return value.default ?? value[locale] ?? value;
        }
      default:
        break;
    }
  }
  return null;
};
