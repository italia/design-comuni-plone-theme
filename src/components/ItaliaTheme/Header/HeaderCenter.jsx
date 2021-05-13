/**
 * HeaderCenter component.
 * @module components/Header/HeaderCenter
 */

import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import {
  Header,
  HeaderContent,
  HeaderRightZone,
} from 'design-react-kit/dist/design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import {
  Logo,
  SocialHeader,
  HeaderSearch,
} from '@italia/components/ItaliaTheme';
import { getSiteProperty } from '@italia/helpers';

const HeaderCenter = () => {
  const intl = useIntl();

  const subsite = useSelector((state) => state.subsite?.data);

  return (
    <Header small={false} theme="" type="center">
      <HeaderContent>
        <div className="it-brand-wrapper">
          <UniversalLink
            href={subsite?.['@id'] ? flattenToAppURL(subsite['@id']) : '/'}
          >
            <Logo />
            <div className="it-brand-text">
              <h2 className="no_toc">
                {subsite?.title || getSiteProperty('siteTitle', intl.locale)}
              </h2>
              <h3 className="no_toc d-none d-md-block">
                {subsite?.description ||
                  getSiteProperty('siteSubtitle', intl.locale)}
              </h3>
            </div>
          </UniversalLink>
        </div>
        <HeaderRightZone>
          <SocialHeader />
          <HeaderSearch />
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

export default HeaderCenter;
