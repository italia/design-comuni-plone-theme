import React from 'react';
import { defineMessages } from 'react-intl';
import { UniversalLink, ConditionalLink } from '@plone/volto/components';
import {
  Chip,
  ChipLabel,
  Button,
  Container,
} from 'design-react-kit/dist/design-react-kit';

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
      <div className="row d-lg-inline-flex pt-5">
        <div className="col-lg-3">
          <h6 className="text-uppercase text-center mt-1">
            {intl?.formatMessage(messages.otherArguments)}
          </h6>
        </div>
        <div className="col-lg-9 text-left">
          {data?.arguments?.map((argument, index) => (
            <ConditionalLink
              condition={!!argument['@id']}
              item={argument}
              key={index}
              title={argument.title}
              className="text-decoration-none"
            >
              <Chip
                color="primary"
                disabled={false}
                large
                simple
                tag="div"
                className="mr-2"
              >
                <ChipLabel tag="span">{argument.title}</ChipLabel>
              </Chip>
            </ConditionalLink>
          ))}
        </div>
      </div>

      <div className="link-button mt-5">
        <UniversalLink href="/argomenti" className="text-decoration-none">
          <Button
            color="primary"
            className="view-all"
            icon={false}
            tag="button"
          >
            {intl?.formatMessage(messages.view_all)}
          </Button>
        </UniversalLink>
      </div>
    </Container>
  ) : null;
};
export default BottomBody;
