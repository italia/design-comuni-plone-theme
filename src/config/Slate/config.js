//config.settings.slate.contextToolbarButtons
import RichTextWidget from 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/RichTextWidget';
import HtmlSlateWidget from 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/HtmlSlateWidget';
import installAlignment from 'design-comuni-plone-theme/config/Slate/Alignment';
import installHeadings from 'design-comuni-plone-theme/config/Slate/Headings';
import installUnderline from 'design-comuni-plone-theme/config/Slate/Underline';
import installBlockquote from 'design-comuni-plone-theme/config/Slate/Blockquote';
import installLinkButton from 'design-comuni-plone-theme/config/Slate/LinkButton';
import installTextLarger from 'design-comuni-plone-theme/config/Slate/TextLarger';
import installLink from 'design-comuni-plone-theme/config/Slate/Link';

import installHandlers from 'design-comuni-plone-theme/config/Slate/handlers';
import installDeserializers from 'design-comuni-plone-theme/config/Slate/deserializers';

export default function applyItaliaSlateConfig(config) {
  installAlignment(config);
  installHeadings(config);
  installUnderline(config);
  installTextLarger(config);
  installLink(config);
  installBlockquote(config);
  installLinkButton(config);

  installHandlers(config);
  installDeserializers(config);

  //remove callout because there's a Volto's block for it
  delete config.settings.slate.elements.callout;
  delete config.settings.slate.buttons.callout;
  config.settings.slate.toolbarButtons = config.settings.slate.toolbarButtons.filter(
    (b) => b !== 'callout',
  );
  config.settings.slate.expandedToolbarButtons = config.settings.slate.toolbarButtons.filter(
    (b) => b !== 'callout',
  );

  //add wrapper public-ui to widgets
  config.widgets.widget.slate = RichTextWidget;
  config.widgets.widget.slate_richtext = RichTextWidget;
  config.widgets.widget.slate_html = HtmlSlateWidget;
  config.widgets.widget.richtext = HtmlSlateWidget;
  return config;
}
