/**
 * HeaderCenter component.
 * @module components/Header/HeaderCenter
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import {
  Header,
  HeaderContent,
  HeaderBrand,
  HeaderRightZone,
  HeaderSocialsZone,
  HeaderSearch,
  Icon,
} from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({
  followUs: {
    id: 'Seguici su',
    defaultMessage: 'Seguici su',
  },
  search: {
    id: 'Cerca',
    defaultMessage: 'Cerca',
  },
});

const HeaderCenter = () => {
  const intl = useIntl();

  return (
    <Header small={false} theme="" type="center">
      <HeaderContent>
        <HeaderBrand iconName="it-pa" href="/">
          <h2>Nome comune</h2>
          <h3>Uno dei tanti comuni d'Italia</h3>
        </HeaderBrand>
        <HeaderRightZone>
          <HeaderSocialsZone label={intl.formatMessage(messages.followUs)}>
            <ul>
              <li>
                <a aria-label="Facebook" href="#" target="_blank">
                  <Icon color="" icon="it-facebook" padding={false} size="" />
                </a>
              </li>
              <li>
                <a aria-label="Github" href="#" target="_blank">
                  <Icon color="" icon="it-github" padding={false} size="" />
                </a>
              </li>
              <li>
                <a aria-label="Twitter" href="#" target="_blank">
                  <Icon color="" icon="it-twitter" padding={false} size="" />
                </a>
              </li>
            </ul>
          </HeaderSocialsZone>
          <HeaderSearch
            iconName="it-search"
            label={intl.formatMessage(messages.search)}
          />
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

export default HeaderCenter;
