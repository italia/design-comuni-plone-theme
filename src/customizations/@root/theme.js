/**
 * If you want to apply semantic ui only to the toolbar
 * and all administrative or editorial views,
 * uncomment the following line and comment the line:
 * `import 'semantic-ui-less/semantic.less';`
 *
 * Then, in your `theme.config` file, change the following variable:
 * `@container   : 'pastanaga-cms-ui'`
 */
import '@plone/volto/../theme/themes/pastanaga-cms-ui/extras/cms-ui.semantic.less';
// import 'semantic-ui-less/semantic.less';
import '@plone/volto/../theme/themes/pastanaga/extras/extras.less';
import 'typeface-titillium-web';
import 'typeface-roboto-mono';
import 'typeface-lora';
import 'design-comuni-plone-theme/theme/site.scss';
