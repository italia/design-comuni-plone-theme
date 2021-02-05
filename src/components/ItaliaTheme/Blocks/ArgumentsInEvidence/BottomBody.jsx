import React from 'react';
import { defineMessages } from 'react-intl';
import { UniversalLink } from '@plone/volto/components';
import {
  Chip,
  ChipLabel,
  Button,
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
    <>
      <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-3 pt-5">
        <div className="row d-lg-inline-flex w-100">
          <div className="col-lg-3">
            <h6 className="text-uppercase text-center mt-1">
              {intl?.formatMessage(messages.otherArguments)}
            </h6>
          </div>
          <div className="col-lg-9">
            {data?.arguments?.map((argument, index) => (
              <UniversalLink
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
              </UniversalLink>
            ))}
          </div>
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
    </>
  ) : null;
};
export default BottomBody;
