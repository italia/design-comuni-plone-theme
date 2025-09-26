import { useIntl, defineMessages } from 'react-intl';
import { Form as UIForm, Grid, Button } from 'semantic-ui-react';

import { TextWidget } from '@plone/volto/components';

const messages = defineMessages({
  icon: {
    id: 'contacts-config-icon',
    defaultMessage: 'Icon name',
  },
  title: {
    id: 'contacts-config-title',
    defaultMessage: 'Contact title',
  },
  contact: {
    id: 'contacts-config-contact',
    defaultMessage: 'Contact',
  },
  delete_contact: {
    id: 'contacts-config-delete-item',
    defaultMessage: 'Delete contact',
  },
});

const ContactsConfigForm = ({
  id,
  contactItem,
  onChange,
  deleteContactItem,
}) => {
  const intl = useIntl();
  const onChangeFormData = (id, value) => {
    onChange({ ...contactItem, [id]: value });
  };
  return (
    <div className="contact-config-form">
      <TextWidget
        id="icon"
        title={intl.formatMessage(messages.icon)}
        description=""
        value={contactItem.icon}
        onChange={(id, value) => {
          onChangeFormData('icon', value);
        }}
      />
      <TextWidget
        id="title"
        title={intl.formatMessage(messages.title)}
        description=""
        value={contactItem.title}
        onChange={(id, value) => {
          onChangeFormData('title', value);
        }}
      />
      <TextWidget
        id="contact"
        title={intl.formatMessage(messages.contact)}
        description=""
        value={contactItem.contact}
        onChange={(id, value) => {
          onChangeFormData('contact', value);
        }}
      />
      <UIForm.Field
        inline
        className="delete wide delete-field"
        id="menu-delete"
      >
        <Grid>
          <Grid.Row stretched>
            <Grid.Column width={4}>
              <div className="wrapper"></div>
            </Grid.Column>
            <Grid.Column width={8}>
              <Button
                icon="trash"
                onClick={deleteContactItem}
                id="delete-contact-item"
                negative
                content={intl.formatMessage(messages.delete_contact)}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </UIForm.Field>
    </div>
  );
};

export default ContactsConfigForm;
