import React from 'react';
import { defineMessages } from 'react-intl';
import { UniversalLink, ConditionalLink } from '@plone/volto/components';
import { Chip, ChipLabel, Button, Container } from 'design-react-kit';

const messages = defineMessages({
  view_all: {
    id: 'view_all',
    defaultMessage: 'Vedi tutti',
  },
  otherArguments: {
    id: 'otherArguments',
    defaultMessage: 'ALTRI ARGOMENTI',
  },
});

const BottomBody = ({ data, intl }) => {
  return data?.arguments?.length > 0 ? (
    <Container className="text-center">
      <div className="row d-lg-inline-flex align-items-center pt-5">
        <div className="col-lg-auto">
          <h6 className="text-uppercase text-center mt-1">
            {intl?.formatMessage(messages.otherArguments)}
          </h6>
        </div>
        <div className="col-lg-auto">
          {data?.arguments?.map((argument, index) => (
            <Chip
              color="primary"
              disabled={false}
              large
              simple
              tag={ConditionalLink}
              condition={!!argument['@id']}
              item={argument}
              key={index}
              title={argument.title}
              className="me-2 text-decoration-none"
            >
              <ChipLabel tag="span">{argument.title}</ChipLabel>
            </Chip>
          ))}
        </div>
      </div>

      <div className="link-button mt-5">
        <Button
          color="primary"
          icon={false}
          tag={UniversalLink}
          href="/argomenti"
          className="view-all text-decoration-none"
        >
          {intl?.formatMessage(messages.view_all)}
        </Button>
      </div>
    </Container>
  ) : null;
};
export default BottomBody;
