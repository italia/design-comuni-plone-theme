//config.settings.slate.contextToolbarButtons
import RichTextWidget from '@plone/volto-slate/widgets/RichTextWidget';
import HtmlSlateWidget from '@plone/volto-slate/widgets/HtmlSlateWidget';
import installAlignment from 'design-comuni-plone-theme/config/Slate/Alignment';
import installHeadings from 'design-comuni-plone-theme/config/Slate/Headings';
import installUnderline from 'design-comuni-plone-theme/config/Slate/Underline';
import installBlockquote from 'design-comuni-plone-theme/config/Slate/Blockquote';
import installLinkButton from 'design-comuni-plone-theme/config/Slate/LinkButton';
import installTextLarger from 'design-comuni-plone-theme/config/Slate/TextLarger';
import installLink from 'design-comuni-plone-theme/config/Slate/Link';

import installHandlers from 'design-comuni-plone-theme/config/Slate/handlers';

export default function applyItaliaSlateConfig(config) {
  installAlignment(config);
  installHeadings(config);
  installUnderline(config);
  installTextLarger(config);
  installLink(config);
  installBlockquote(config);
  installLinkButton(config);

  installHandlers(config);

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
  config.widgets.widget.slate = (props) => (
    <div className="public-ui">
      <RichTextWidget {...props} />
    </div>
  );
  config.widgets.widget.slate_richtext = (props) => (
    <div className="public-ui">
      <RichTextWidget {...props} />
    </div>
  );
  config.widgets.widget.slate_html = (props) => (
    <div className="public-ui">
      <HtmlSlateWidget {...props} />
    </div>
  );
  config.widgets.widget.richtext = (props) => (
    <div className="public-ui">
      <HtmlSlateWidget {...props} />
    </div>
  );
  return config;
}
