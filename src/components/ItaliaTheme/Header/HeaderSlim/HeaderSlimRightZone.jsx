/**
 * HeaderSlim component.
 * @module components/ItaliaTheme/Header/HeaderSlim
 */

import React from 'react';

//import { Link } from 'react-router-dom';
//import { defineMessages, useIntl } from 'react-intl';

import {
  ParentSiteMenu,
  LanguageSelector,
} from '@italia/components/ItaliaTheme';

// const messages = defineMessages({
//   arLogin: {
//     id: "Accedi all'area personale",
//     defaultMessage: "Accedi all'area personale",
//   },
// });

const HeaderSlimRightZone = () => {
  return (
    <>
      <ParentSiteMenu />
      <LanguageSelector />

      {/*<Button
            className="btn-icon"
            color="primary"
            to="#"
            icon={false}
            size="full"
            tag={Link}
          >
            <span className="rounded-icon">
              <Icon color="primary" icon="it-user" padding={false} size="" />
            </span>
            <span className="d-none d-lg-block">
              {intl.formatMessage(messages.arLogin)}
            </span>
          </Button>*/}
    </>
  );
};

export default HeaderSlimRightZone;
