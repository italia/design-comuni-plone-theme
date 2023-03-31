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
// import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
// const Logo = () => <Icon color="" icon="it-pa" padding={false} size="" />;

/* PNG example using https://www.npmjs.com/package/webpack-image-resize-loader *
 * works, but some issues with prettier and jest
 */
// eslint-disable-next-line import/no-unresolved
//import logo from './logo.png?width=164';
import logo from './logo.png';

const Logo = () => (
  <img className="icon" src={logo} width="82" height="82" alt="Logo" />
);

export default Logo;
