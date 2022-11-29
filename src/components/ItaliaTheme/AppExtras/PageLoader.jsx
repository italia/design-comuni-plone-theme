import React from 'react';
import { useSelector } from 'react-redux';
import { Progress } from 'design-react-kit';
import { useIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  loadingPage: {
    id: 'Loading page...',
    defaultMessage: 'Sto caricando la pagina richiesta...',
  },
});

const PageLoader = () => {
  const contentLoading = useSelector((state) => state.content.get.loading);
  const intl = useIntl();

  return contentLoading ? (
    <div className="dvt-page-loader">
      <Progress
        indeterminate
        label={intl.formatMessage(messages.loadingPage)}
      />
    </div>
  ) : (
    <></>
  );
};
export default PageLoader;
