import { useState, useEffect } from 'react';

import config from '@plone/volto/registry';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const useHomePath = () => {
  const [path, setPath] = useState('/');

  const locale = useSelector((state) => state.intl.locale);
  //const { pathname } = useLocation();

  useEffect(() => {
    setPath(config.settings.isMultilingual ? '/' + locale : '/');
  }, [locale]);
  return path;
};
