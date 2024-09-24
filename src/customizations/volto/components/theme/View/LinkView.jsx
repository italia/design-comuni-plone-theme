// CUSTOMIZATION:
// - Added condition to check if user is SPID user (16-18 and 21)

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { isInternalURL, flattenToAppURL } from '@plone/volto/helpers';
import { Container as SemanticContainer } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import { FormattedMessage } from 'react-intl';
import config from '@plone/volto/registry';

const LinkView = ({ token, content }) => {
  const history = useHistory();
  const userIsSpidUser = useSelector(
    (state) => state.users.user.roles.length === 0,
  );

  useEffect(() => {
    if (!token || userIsSpidUser) {
      const { remoteUrl } = content;
      if (isInternalURL(remoteUrl)) {
        history.replace(flattenToAppURL(remoteUrl));
      } else if (!__SERVER__) {
        window.location.href = flattenToAppURL(remoteUrl);
      }
    }
  }, [content, history, token, userIsSpidUser]);
  const { title, description, remoteUrl } = content;
  const { openExternalLinkInNewTab } = config.settings;
  const Container =
    config.getComponent({ name: 'Container' }).component || SemanticContainer;

  return (
    <Container id="page-document">
      <h1 className="documentFirstHeading">{title}</h1>
      {content.description && (
        <p className="documentDescription">{description}</p>
      )}
      {remoteUrl && (
        <p>
          <FormattedMessage
            id="The link address is:"
            defaultMessage="The link address is:"
          />{' '}
          <UniversalLink
            href={remoteUrl}
            openLinkInNewTab={
              openExternalLinkInNewTab && !isInternalURL(remoteUrl)
            }
          >
            {flattenToAppURL(remoteUrl)}
          </UniversalLink>
        </p>
      )}
    </Container>
  );
};

LinkView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    remoteUrl: PropTypes.string,
  }),
  token: PropTypes.string,
};

LinkView.defaultProps = {
  content: null,
  token: null,
};

export default LinkView;
