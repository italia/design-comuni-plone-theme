import React from 'react';
import { defineMessages } from 'react-intl';
import { UniversalLink, ConditionalLink } from '@plone/volto/components';
import { Chip, ChipLabel, Button, Container } from 'design-react-kit';
import cx from 'classnames';

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

const BottomBody = ({ data, intl, hasArguments }) => {
  return data?.arguments?.length > 0 ? (
    <Container className="text-center argumentsChipsWrapper pb-3">
      <div
        className={cx('row d-lg-inline-flex align-items-center', {
          'pt-5': hasArguments,
        })}
      >
        <div
          className={data?.centerAlignment ? 'col-lg-12 mb-3' : 'col-lg-auto'}
        >
          <p className="h6 text-uppercase text-center mt-1">
            {intl?.formatMessage(messages.otherArguments)}
          </p>
        </div>
        <div className={data?.centerAlignment ? 'col-lg-12' : 'col-lg-auto'}>
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

      {!data?.hideButtonShowAll && (
        <div className="link-button mt-3">
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
      )}
    </Container>
  ) : null;
};
export default BottomBody;
