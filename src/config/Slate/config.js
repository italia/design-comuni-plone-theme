//config.settings.slate.contextToolbarButtons
import installAlignment from 'design-comuni-plone-theme/config/Slate/Alignment';
import installHeadings from 'design-comuni-plone-theme/config/Slate/Headings';
import installUnderline from 'design-comuni-plone-theme/config/Slate/Underline';
import installBlockquote from 'design-comuni-plone-theme/config/Slate/Blockquote';
import installLinkButton from 'design-comuni-plone-theme/config/Slate/LinkButton';
import installTextLarger from 'design-comuni-plone-theme/config/Slate/TextLarger';
import installLink from 'design-comuni-plone-theme/config/Slate/Link';


export default function applyItaliaSlateConfig(config) {
  installAlignment(config);
  installHeadings(config);
  installUnderline(config);
  installTextLarger(config);
  installLink(config);

  installBlockquote(config);
  installLinkButton(config);


  //remove callout because there's a Volto's block for it
  delete config.settings.slate.elements.callout;
  delete config.settings.slate.buttons.callout;
  config.settings.slate.toolbarButtons = config.settings.slate.toolbarButtons.filter(
    (b) => b !== 'callout',
  );
  config.settings.slate.expandedToolbarButtons = config.settings.slate.toolbarButtons.filter(
    (b) => b !== 'callout',
  );
}
