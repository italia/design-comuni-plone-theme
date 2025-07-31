/*
 * Template a tabella
 */
import React, { useEffect } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl, defineMessages } from 'react-intl';
import { getCTSchema } from 'design-comuni-plone-theme/actions';
import { Table, Container } from 'design-react-kit';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';

import { ListingLinkMore } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { getWidget } from '@plone/volto/helpers/Widget/utils';

import config from '@plone/volto/registry';

const messages = defineMessages({
  title: { id: 'tabletemplate_column_title', defaultMessage: 'Titolo' },
});

const TableTemplate = (props) => {
  const {
    columns,
    alternate_rows,
    items,
    isEditMode,
    linkAlign,
    linkTitle,
    linkHref,
    linkmore_id_lighthouse,
  } = props;

  const intl = useIntl();
  const { views } = config.widgets;

  // necessario per gli edditor nel momento in cui aggiungono nuove colonne
  const ct_schema = useSelector((state) => state.ct_schema?.subrequests);

  let render_columns =
    (columns ?? []).filter((c) => c.field === 'title').length > 0
      ? columns
      : [
          { field: 'title', title: intl.formatMessage(messages.title) },
          ...(columns ?? []),
        ];
  return (
    <div className="table-template">
      <Container className="px-4 pt-3">
        <Table size="sm" responsive bordered striped={alternate_rows ?? false}>
          <thead className="table-light">
            <tr>
              {render_columns.map((c, index) => {
                const field_properties =
                  c.field_properties ??
                  ct_schema?.[c.ct]?.result?.properties?.[c.field] ??
                  {};

                return (
                  <th
                    scope="col"
                    className={cx(c.ct + '-' + c.field, {
                      'date-column':
                        field_properties.widget === 'date' ||
                        field_properties.widget === 'datetime',
                    })}
                    key={index}
                  >
                    {c.title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                {render_columns.map((c, index) => {
                  const field_properties =
                    c.field_properties ??
                    ct_schema?.[c.ct]?.result?.properties?.[c.field] ??
                    {};
                  let render_value = JSON.stringify(item[c.field]);

                  if (field_properties) {
                    const field = {
                      ...field_properties,
                      id: c.field,
                      widget: getWidget(c.field, field_properties),
                    };
                    const Widget = views?.getWidget(field);

                    const widget_props = {
                      behavior: field_properties.behavior,
                    };
                    switch (c.field) {
                      case 'apertura_bando':
                      case 'chiusura_procedimento_bando':
                      case 'scadenza_domande_bando':
                      case 'scadenza_bando':
                        widget_props.format = 'DD MMM yyyy';
                        break;
                      default:
                        break;
                    }
                    // rimuove ora, se non valorizzata
                    if (
                      field_properties.widget === 'datetime' &&
                      c.field !== 'whole_day' &&
                      c.field !== 'open_end' &&
                      item?.[c.field]?.indexOf('T00:00') > 0
                    ) {
                      widget_props.format = 'DD MMM yyyy';
                    }
                    if (field_properties.vocabulary) {
                      widget_props.vocabulary =
                        field_properties.vocabulary['@id'];
                    }
                    render_value = (
                      <Widget value={item[c.field]} {...widget_props} />
                    );
                  }
                  if (c.field === 'title') {
                    render_value = (
                      <UniversalLink
                        item={!isEditMode ? item : null}
                        href={isEditMode ? '#' : ''}
                        className="img-link"
                      >
                        {item[c.field]}
                      </UniversalLink>
                    );
                  }

                  // return <td key={index}>ciao</td>;
                  return <td key={index}>{render_value}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </Table>

        <ListingLinkMore
          title={linkTitle}
          href={linkHref}
          linkAlign={linkAlign}
          className="my-4"
          linkmoreIdLighthouse={linkmore_id_lighthouse}
        />
      </Container>
    </div>
  );
};

TableTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default TableTemplate;
