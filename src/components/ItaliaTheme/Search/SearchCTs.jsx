/**
 * Sections for search
 */
import React, { useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { values } from 'lodash';
import { Input, FormGroup, Label, Collapse, Button } from 'design-react-kit';

const messages = defineMessages({
  showAll: {
    id: 'Show all',
    defaultMessage: 'Mostra tutto',
  },
  showAllCTS: {
    id: 'Show all content types',
    defaultMessage: 'Mostra tutti i tipi di contenuto',
  },
  hide: {
    id: 'Hide',
    defaultMessage: 'Nascondi',
  },
  hideAllCTS: {
    id: 'Hide all content types',
    defaultMessage: 'Nascondi tutti i tipi di contenuto',
  },
  selectAll: {
    id: 'Select all or none',
    defaultMessage: 'Seleziona tutti o nessuno',
  },
  selectAllCT: {
    id: 'Select all content types or none',
    defaultMessage: 'Seleziona tutti i tipi di contenuti o nessuno',
  },
  searchCTOf: {
    id: 'Cerca i contenuti di tipo',
    defaultMessage: 'Cerca i contenuti di tipo',
  },
});

export default function SearchCTs({
  portalTypes,
  setPortalTypes,
  collapsable = false,
}) {
  const intl = useIntl();
  const [collapse, setCollapse] = useState(true);

  const toggleAll = (cts) => {
    setCollapse(false);
    let select_all = false;
    Object.keys(cts).forEach((ctId) => {
      if (!cts[ctId].value) {
        select_all = true;
      }
    });
    Object.keys(cts).forEach((ctId) => {
      setCtChecked(ctId, select_all);
    });
  };
  const setCtChecked = (ctId, checked) => {
    setPortalTypes((prevCts) => ({
      ...prevCts,
      [ctId]: {
        ...prevCts[ctId],
        value: checked,
      },
    }));
  };

  const getCtsChunks = (cts) => {
    /* ctsOrderedKeys
     * è una lista di chavi ordinate per 'defaultChecked' in modo che
     * i valori attivi di default siano in cima e non spariscano nel collapse
     */
    const ctsOrderedKeys = [
      ...values(
        Object.keys(cts).reduce(
          (acc, ct) => {
            // quindi mi creo due liste con quelli attivi di default
            if (cts[ct].defaultChecked)
              return { ...acc, defaultChecked: acc.defaultChecked.concat(ct) };

            // e gli altri
            return { ...acc, others: acc.others.concat(ct) };
          },
          { defaultChecked: [], others: [] },
        ),
      ),
      // e faccio un flatten di quella doppia lista
    ].reduce((acc, val) => [...acc, ...val], []);

    const size = ctsOrderedKeys.length;
    if (size > 10) {
      let visibleCts = {};
      let hidedCts = {};
      const keys_visible = ctsOrderedKeys.slice(0, 10);
      const keys_hide = ctsOrderedKeys.slice(10, size);

      keys_visible.forEach((key) => {
        visibleCts[key] = cts[key];
      });

      keys_hide.forEach((key) => {
        hidedCts[key] = cts[key];
      });

      return [visibleCts, hidedCts];
    }
    return [cts];
  };

  const cts_chunks = getCtsChunks(portalTypes);

  const drawFilter = (cts) => (
    <>
      {Object.keys(cts).map((ctId) => (
        <div key={ctId}>
          <FormGroup check tag="div">
            <Input
              id={ctId}
              type="checkbox"
              checked={cts[ctId].value}
              onChange={(e) => setCtChecked(ctId, e.currentTarget.checked)}
              aria-controls="search-results-region"
              aria-label={
                intl.formatMessage(messages.searchCTOf) + ' ' + cts[ctId].label
              }
            />
            <Label
              check
              for={ctId}
              tag="label"
              widths={['xs', 'sm', 'md', 'lg', 'xl']}
            >
              {cts[ctId].label}
            </Label>
          </FormGroup>
        </div>
      ))}
    </>
  );
  return (
    <>
      <Button
        color="link"
        size="mini"
        className="select-all-cts"
        title={intl.formatMessage(messages.selectAll)}
        aria-label={intl.formatMessage(messages.selectAllCT)}
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          toggleAll({ ...cts_chunks[0], ...cts_chunks[1] });
        }}
      >
        {intl.formatMessage(messages.selectAll)}
      </Button>
      {drawFilter(cts_chunks[0])}
      {collapsable && cts_chunks[1] && (
        <>
          <Collapse isOpen={!collapse} id="collapseTopics">
            {drawFilter(cts_chunks[1])}
          </Collapse>
          <div className="mt-4">
            <a
              onClick={(e) => {
                e.preventDefault();
                setCollapse((prev) => !prev);
              }}
              className="fw-bold"
              data-toggle="collapse"
              href="#collapseTopics"
              role="button"
              aria-expanded="false"
              aria-controls="collapseList"
              aria-label={intl.formatMessage(
                collapse ? messages.showAllCTS : messages.hideAllCTS,
              )}
            >
              {intl.formatMessage(collapse ? messages.showAll : messages.hide)}
            </a>
          </div>
        </>
      )}
    </>
  );
}
