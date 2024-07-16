import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';

import config from '@plone/volto/registry';

export const useHomePath = () => {
  const [path, setPath] = useState('/');

  const { locale } = useIntl();

  useEffect(() => {
    setPath(config.settings.isMultilingual ? '/' + locale : '/');
  }, [locale]);
  return path;
};
