import React, { useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Button, Modal, List } from 'semantic-ui-react';

import { FormFieldWrapper } from '@plone/volto/components';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { SocialLinksWidget } from 'volto-social-settings';

const messages = defineMessages({
  edit_social_links: {
    id: 'edit_social_links',
    defaultMessage: 'Modifica i social',
  },
  done: {
    id: 'done_edit_social_links',
    defaultMessage: 'Fatto',
  },
});
const SubsiteSocialLinksWidget = (props) => {
  const intl = useIntl();
  const [open, setOpen] = useState(false);

  const value = props.value?.length > 0 ? JSON.parse(props.value) : [];
  return (
    <FormFieldWrapper {...props} className="subsite-social-links-widget">
      {props.value?.length > 0 && (
        <List horizontal className="social-list">
          {value?.map((social, idx) =>
            social.url ? (
              <List.Item key={idx}>
                <a
                  title={social.title}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon={social.icon} padding={false} size="sm" />
                </a>
              </List.Item>
            ) : null,
          )}
        </List>
      )}

      <Button
        size="tiny"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        {intl.formatMessage(messages.edit_social_links)}
      </Button>
      <Modal onClose={() => setOpen(false)} open={open} closeIcon>
        <Modal.Header>
          {intl.formatMessage(messages.edit_social_links)}
        </Modal.Header>
        <Modal.Content scrolling>
          <SocialLinksWidget {...props} description={null} />
        </Modal.Content>
        <Modal.Actions>
          <Button icon onClick={() => setOpen(false)} primary>
            {intl.formatMessage(messages.done)}
          </Button>
        </Modal.Actions>
      </Modal>
    </FormFieldWrapper>
  );
};

export default SubsiteSocialLinksWidget;
