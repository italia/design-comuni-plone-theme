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

// eslint-disable-next-line import/no-unresolved
import logo from '../Logo/logo.png';
import { SiteProperty } from 'volto-site-settings';

const LogoFooter = () => {
  return (
    <SiteProperty
      property="site_logo_footer"
      defaultValue={{ url: logo, width: 82, height: 82 }}
      className="icon"
      alt="Logo"
    />
  );
};

export default LogoFooter;
