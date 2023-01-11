/**
 * Diff field component.
 * @module components/manage/Diff/DiffField
 */
/* CUSTOMIZATIONS
- Overhaul all logic and html, use something that actually does the job
- Still need to test dates, images not being shown correctly, might revert
  to filename if the solution to this bug is not quick and easy
- Backend has to fix history, RelList fields not appearing in response
*/

import React, { useMemo } from 'react';
import { isEqual } from 'lodash';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import {
  blockIsNotEmptyPlaceholder,
  SSRRenderHtml,
} from 'design-comuni-plone-theme/helpers';
import {
  getBaseUrl,
  getBlocksFieldname,
  getBlocksLayoutFieldname,
  hasBlocksData,
} from '@plone/volto/helpers';
import content from '../../../../../../omelette/src/reducers/content/content';

/**
 * Enhanced diff words utility
 * @function diffWords
 * @param oneStr Field one
 * @param twoStr Field two
 */

const readable_date_format = {
  dateStyle: 'full',
  timeStyle: 'short',
};
const booleanMapping = {
  true: 'Si',
  false: 'No',
};
/**
 * Diff field component.
 * @function DiffField
 * @param {*} one Field one
 * @param {*} two Field two
 * @param {Object} schema Field schema
 * @returns {string} Markup of the component.
 */
const DiffField = ({
  one,
  two,
  contentOne,
  contentTwo,
  view,
  schema,
  diffLib,
  htmlDiffLib,
  field,
  store,
  history,
}) => {
  const language = useSelector((state) => state.intl.locale);

  const diff2 = (prev, curr) =>
    htmlDiffLib.default.execute(
      prev ? String(prev) : '',
      curr ? String(curr) : '',
    );
  const diffs = useMemo(() => {
    let parts;

    if (isEqual(one, two) || field === 'blocks_layout') return null;
    if (schema?.widget) {
      switch (schema.widget) {
        case 'richtext':
          parts = diff2(one?.data, two?.data);
          break;
        case 'datetime':
          parts = diff2(
            new Intl.DateTimeFormat(language, readable_date_format).format(
              new Date(one),
            ),
            new Intl.DateTimeFormat(language, readable_date_format).format(
              new Date(two),
            ),
          );
          break;

        case 'blocks':
          if (
            (!blockIsNotEmptyPlaceholder(one) &&
              !blockIsNotEmptyPlaceholder(two)) ||
            !!!store
          )
            break;

          const first = SSRRenderHtml(history, store, one, schema.widget);
          const second = SSRRenderHtml(history, store, two, schema.widget);

          parts = diff2(first, second);
          break;
        case 'json':
          if (isEqual(contentOne, contentTwo)) break;
          const bOne = SSRRenderHtml(history, store, contentOne, schema.widget);
          const bTwo = SSRRenderHtml(history, store, contentTwo, schema.widget);

          parts = diff2(bOne, bTwo);
          break;
        default:
          parts = diff2(one, two);
          break;
      }
    } else if (schema.type === 'object' && store) {
      if (field.includes('image') && isEqual(one?.filename, two?.filename))
        return;
      const first = SSRRenderHtml(history, store, one, field);
      const second = SSRRenderHtml(history, store, two, field);
      parts = diff2(first, second);
    } else if (schema.type === 'array') {
      // debugger;
      const oneArray = (one || []).map((i) => i?.title || i).join(', ');
      const twoArray = (two || []).map((j) => j?.title || j).join(', ');
      parts = diff2(oneArray, twoArray);
    } else if (
      schema?.type === 'boolean' &&
      !isEqual(booleanMapping[!!one], booleanMapping[!!two])
    ) {
      parts = diff2(booleanMapping[!!one], booleanMapping[!!two]);
    } else {
      parts = diff2(one, two);
    }
    return parts;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [one, two, schema, field, language, store, history]);

  return store && diffs ? (
    <Table compact data-testid="DiffField" className="diffField">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan={2}>{schema.title}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {view === 'split' && (
          <Table.Row>
            <Table.Cell width={8} verticalAlign="top">
              <div
                className="previous-state"
                dangerouslySetInnerHTML={{
                  __html: SSRRenderHtml(
                    history,
                    store,
                    schema?.type === 'boolean'
                      ? booleanMapping[!!one]
                      : schema?.widget === 'json'
                      ? contentOne
                      : one,
                    schema?.widget ??
                      (schema?.type === 'object' && field.includes('image')
                        ? field
                        : schema?.type),
                  ),
                }}
              />
            </Table.Cell>
            <Table.Cell width={8} verticalAlign="top">
              <div
                className="current-state"
                dangerouslySetInnerHTML={{
                  __html: diffs,
                }}
              />
            </Table.Cell>
          </Table.Row>
        )}
        {view === 'unified' && (
          <Table.Row>
            <Table.Cell width={16} verticalAlign="top">
              <div
                className="current-state"
                dangerouslySetInnerHTML={{
                  __html: diffs,
                }}
              />
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  ) : null;
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
DiffField.propTypes = {
  one: PropTypes.any.isRequired,
  two: PropTypes.any.isRequired,
  contentOne: PropTypes.any,
  contentTwo: PropTypes.any,
  view: PropTypes.string.isRequired,
  schema: PropTypes.shape({
    widget: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default injectLazyLibs(['htmlDiffLib'])(DiffField);
