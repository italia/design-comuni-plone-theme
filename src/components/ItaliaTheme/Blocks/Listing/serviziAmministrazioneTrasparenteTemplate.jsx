import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useIntl, defineMessages } from 'react-intl';
import moment from 'moment';
import { Container, Row, Col } from 'design-react-kit/dist/design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';

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
  linkMore,
  show_block_bg,
}) => {
  const intl = useIntl();
  moment.locale(intl.locale);
  return (
    <div
      className={cx('persone-amministrazione-trasparente', {
        'public-ui': isEditMode,
      })}
    >
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
                <td>{item.ruolo}</td>
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
      </Container>
    </div>
  );
};

GridGalleryTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default GridGalleryTemplate;
