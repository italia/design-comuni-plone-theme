/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React /*, { useEffect, useState } */ from 'react';

import PropTypes from 'prop-types';

import { isCmsUi } from '@plone/volto/helpers';

import {
  /* Anontools,
  Logo,*/
  Navigation,
  /* SearchWidget,*/
} from '@plone/volto/components';

import { HeaderSlim, HeaderCenter } from '@design/components/DesignTheme';
import { Headers } from 'design-react-kit/dist/design-react-kit';

const Header = ({ pathname }) => {
  // const [mini, setMini] = useState(false);

  // const handleScroll = () => {
  //   setMini(window.pageYOffset > 120);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const isCmsUI = isCmsUi(pathname);
  let content = (
    <>
      {/* <div
        className="sticky-placeholder"
        style={{ paddingTop: mini ? '50px' : '120px' }}
      /> */}
      {/* <Headers sticky={true} className={mini ? 'is-sticky' : undefined}> */}
      <Headers>
        <HeaderSlim />
        <div className="it-nav-wrapper">
          <HeaderCenter />
          <Navigation pathname={pathname} />
        </div>
      </Headers>
    </>
  );
  return isCmsUI ? <div className="public-ui">{content}</div> : content;
};

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Header;
