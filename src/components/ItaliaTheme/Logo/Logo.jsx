import React from 'react';

/*
 * Customization with image
 *
 * If you have a jpg/png, do like this:
 *
 * <figure className="icon">
 *  <img src={logo} alt="" />
 * </figure>
 *
 * Note the icon class.
 */

/* SVG example */
import { Icon } from 'design-volto-theme/components/ItaliaTheme';
const Logo = () => <Icon color="" icon="it-pa" padding={false} size="" />;

/* PNG example using https://www.npmjs.com/package/webpack-image-resize-loader *
 * works, but some issues with prettier and jest
 *
// eslint-disable-next-line import/no-unresolved
import logo from './it-pa-white.png?width=82';

const Logo = () => (
  <figure className="icon">
    <img src={logo} width="82" height="82" alt="Logo" />
  </figure>
);
*/

export default Logo;
