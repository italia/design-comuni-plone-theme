import { insertToolbarButtons } from 'design-comuni-plone-theme/config/Slate/utils';

export default function install(config) {
  const { slate } = config.settings;

  //aggiungo il bottone di underline alla toolbar, dopo bold
  insertToolbarButtons(['underline'], 'italic', slate);

  return config;
}
