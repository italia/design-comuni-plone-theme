import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useIntl, defineMessages } from 'react-intl';

import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { ListingLinkMore } from '@italia/components/ItaliaTheme';

const messages = defineMessages({
  nominativo: {
    id: 'nominativo',
    defaultMessage: 'nominativo',
  },
  incarico: {
    id: 'incarico',
    defaultMessage: 'incarico',
  },
  area: {
    id: 'area',
    defaultMessage: 'area',
  },
});

const GridGalleryTemplate = ({
  items,
  isEditMode,
  title,
  linkTitle,
  linkHref,
  show_block_bg,
  moment: Moment,
  designReactKit,
}) => {
  const intl = useIntl();
  const moment = Moment.default;
  moment.locale(intl.locale);

  const { Container, Row, Col } = designReactKit;

  return (
    <div className="persone-amministrazione-trasparente">
      <Container className="px-4">
        {title && (
          <Row>
            <Col>
              <h2 className={cx('mb-4', { 'mt-5': !show_block_bg })}>
                {title}
              </h2>
            </Col>
          </Row>
        )}
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="text-uppercase">
                {intl.formatMessage(messages.nominativo)}
              </th>
              <th scope="col" className="text-uppercase">
                {intl.formatMessage(messages.incarico)}
              </th>
              <th scope="col" className="text-uppercase">
                {intl.formatMessage(messages.area)}
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr>
                <td>
                  <UniversalLink
                    item={item}
                    className="text-decoration-none font-weight-bold"
                  >
                    {item.title}
                  </UniversalLink>
                </td>
                <td>{item.ruolo?.title}</td>
                <td>
                  {item.organizzazione_riferimento &&
                  item.organizzazione_riferimento.length > 0 ? (
                    <UniversalLink
                      href={flattenToAppURL(
                        item.organizzazione_riferimento[0]['@id'],
                      )}
                      className="text-decoration-none"
                    >
                      {item.organizzazione_riferimento[0]?.title}
                    </UniversalLink>
                  ) : (
                    <span>Nessuna</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ListingLinkMore title={linkTitle} href={linkHref} className="my-4" />
      </Container>
    </div>
  );
};

GridGalleryTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default injectLazyLibs(['moment', 'designReactKit'])(
  GridGalleryTemplate,
);
