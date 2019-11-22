import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { defineMessages, injectIntl } from 'react-intl';
import mapValues from 'lodash/mapValues';
import toPairs from 'lodash/toPairs';
import fromPairs from 'lodash/fromPairs';
import cx from 'classnames';

import { BITIcon, it_arrow_left_circle, it_close } from '../Icons';
import Checkbox from '../../Checkbox';

const messages = defineMessages({
  closeSearch: {
    id: 'closeSearch',
    defaultMessage: 'Chiudi cerca',
  },
  backToSearch: {
    id: 'backToSearch',
    defaultMessage: 'Torna alla ricerca',
  },
  search: {
    id: 'search',
    defaultMessage: 'Cerca',
  },
  filters: {
    id: 'filters',
    defaultMessage: 'Filtri',
  },
  confirmSearch: {
    id: 'confirmSearch',
    defaultMessage: 'Conferma',
  },
  sections: {
    id: 'sections',
    defaultMessage: 'Sezioni',
  },
  topics: {
    id: 'topics',
    defaultMessage: 'Argomenti',
  },
  options: {
    id: 'options',
    defaultMessage: 'Opzioni',
  },
  allFilters: {
    id: 'allFilters',
    defaultMessage: 'Tutto',
  },
  amministrazione: {
    id: 'amministrazione',
    defaultMessage: 'Amministrazione',
  },
  servizi: {
    id: 'servizi',
    defaultMessage: 'Servizi',
  },
  novita: {
    id: 'novita',
    defaultMessage: 'Novità',
  },
  documenti: {
    id: 'documenti',
    defaultMessage: 'Documenti e dati',
  },
  allTopics: {
    id: 'allTopics',
    defaultMessage: 'Tutti gli argomenti',
  },
  allOptions: {
    id: 'allOptions',
    defaultMessage: 'Tutte le date',
  },
  removeTopic: {
    id: 'removeTopic',
    defaultMessage: 'Rimuovi argomento',
  },
});

// A group is checked if at least one filter is checked
export const isGroupChecked = group =>
  Object.keys(group).reduce(
    (checked, filterId) => checked || group[filterId].value,
    false,
  );

// A group is indeterminate if at least one of its filters is checked, but not all of them
export const isGroupIndeterminate = (group, groupIsChecked) =>
  groupIsChecked &&
  Object.keys(group).reduce(
    (indet, filterId) => indet || !group[filterId].value,
    false,
  );

// Given a filters group, set all filters to the given state
export const updateGroupCheckedStatus = (group, checked) =>
  mapValues(group, filter => ({
    ...filter,
    value: checked,
  }));

const SearchModal = ({ closeModal, show, intl }) => {
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [advancedTab, setAdvancedTab] = useState('sections');
  const [sections, setSections] = useState({
    amministrazione: {},
    servizi: {},
    novita: {},
    documenti: {},
  });
  const [topics, setTopics] = useState({});
  const selectedTopics = fromPairs(toPairs(topics).filter(t => t[1].value));
  const checkedGroups = {
    amministrazione: isGroupChecked(sections.amministrazione),
    servizi: isGroupChecked(sections.servizi),
    novita: isGroupChecked(sections.novita),
    documenti: isGroupChecked(sections.documenti),
  };
  // The "all" filter is checked if all groups are unchecked
  const allSectionsChecked = Object.keys(checkedGroups).reduce(
    (checked, groupId) => checked && !checkedGroups[groupId],
    true,
  );
  const allTopicsChecked = Object.keys(selectedTopics).length === 0;

  const resetSections = () => {
    setSections(prevSections =>
      mapValues(prevSections, group => updateGroupCheckedStatus(group, false)),
    );
  };

  const setGroupChecked = (groupId, checked) => {
    setSections(prevSections => ({
      ...prevSections,
      [groupId]: updateGroupCheckedStatus(prevSections[groupId], checked),
    }));
  };

  const setSectionFilterChecked = (groupId, filterId, checked) => {
    setSections(prevSections => ({
      ...prevSections,
      [groupId]: {
        ...prevSections[groupId],
        [filterId]: {
          ...prevSections[groupId][filterId],
          value: checked,
        },
      },
    }));
  };

  const resetTopics = () => {
    setTopics(prevTopics =>
      mapValues(prevTopics, topic => ({
        ...topic,
        value: false,
      })),
    );
  };

  const setTopicChecked = (topicId, checked) => {
    setTopics(prevTopics => ({
      ...prevTopics,
      [topicId]: {
        ...prevTopics[topicId],
        value: checked,
      },
    }));
  };

  useEffect(() => {
    // TODO Fetch real data here
    setSections({
      amministrazione: {
        'organi-politici': {
          value: false,
          label: 'Organi politici',
        },
        'aree-amministrative': {
          value: false,
          label: 'Aree amministrative',
        },
      },
      servizi: {
        'anagrafe-e-stato-civile': {
          value: false,
          label: 'Anagrafe e stato civile',
        },
        turismo: {
          value: false,
          label: 'Turismo',
        },
      },
      novita: {
        avvisi: {
          value: false,
          label: 'Avvisi',
        },
        notizie: {
          value: false,
          label: 'Notizie',
        },
      },
      documenti: {
        modulistica: {
          value: false,
          label: 'Modulistica',
        },
        normative: {
          value: false,
          label: 'Normative',
        },
      },
    });
    setTopics({
      abitazione: {
        label: 'Abitazione',
        value: false,
      },
      acqua: {
        label: 'Acqua',
        value: false,
      },
    });
  }, []);

  return (
    <Modal show={show} onHide={closeModal} id="search-modal">
      <Modal.Header>
        <Container>
          <div className="d-flex align-items-center">
            {!advancedSearch && (
              <Button
                variant="link"
                title={intl.formatMessage(messages.closeSearch)}
                onClick={closeModal}
                type="button"
              >
                <BITIcon name={it_arrow_left_circle} />
              </Button>
            )}
            {advancedSearch && (
              <Button
                variant="link"
                title={intl.formatMessage(messages.backToSearch)}
                className="back-to-search text-reset"
                onClick={() => setAdvancedSearch(false)}
                type="button"
              >
                <BITIcon name={it_arrow_left_circle} />
                {intl.formatMessage(messages.search)}
              </Button>
            )}
            <p className="h1">
              {intl.formatMessage(
                advancedSearch ? messages.sections : messages.search,
              )}
            </p>
            {advancedSearch && (
              <Button
                variant="outline-primary"
                className="ml-auto"
                title={intl.formatMessage(messages.confirmSearch)}
              >
                {intl.formatMessage(messages.confirmSearch)}
              </Button>
            )}
          </div>
        </Container>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {!advancedSearch && (
            <>
              <div className="search-filters search-filters-section">
                <div className="h6">
                  {intl.formatMessage(messages.sections)}
                </div>
                <ButtonToolbar>
                  <Button
                    variant={allSectionsChecked ? 'primary' : 'outline-primary'}
                    onClick={resetSections}
                    size="sm"
                    className="mr-2"
                  >
                    {intl.formatMessage(messages.allFilters)}
                  </Button>
                  {Object.keys(sections).map(groupId => (
                    <Button
                      key={groupId}
                      variant={
                        checkedGroups[groupId] ? 'primary' : 'outline-primary'
                      }
                      size="sm"
                      className="mr-2"
                      onClick={() =>
                        setGroupChecked(groupId, !checkedGroups[groupId])
                      }
                    >
                      {intl.formatMessage(messages[groupId])}
                    </Button>
                  ))}
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => {
                      setAdvancedTab('sections');
                      setAdvancedSearch(true);
                    }}
                  >
                    ...
                  </Button>
                </ButtonToolbar>
              </div>
              <div className="search-filters search-filters-topics">
                <div className="h6">{intl.formatMessage(messages.topics)}</div>
                <button
                  className={cx('chip chip-simple chip-lg mr-2', {
                    selected: allTopicsChecked,
                  })}
                  type="button"
                  onClick={resetTopics}
                >
                  <span className="chip-label">
                    {intl.formatMessage(messages.allTopics)}
                  </span>
                </button>
                {Object.keys(selectedTopics).map(topicId => (
                  <div
                    role="presentation"
                    className="chip chip-lg selected"
                    key={topicId}
                    onClick={() => setTopicChecked(topicId, false)}
                  >
                    <span className="chip-label">
                      {selectedTopics[topicId].label}
                    </span>
                    <button type="button">
                      <BITIcon name={it_close} />
                      <span className="sr-only">
                        {intl.formatMessage(messages.removeTopic)}
                      </span>
                    </button>
                  </div>
                ))}
                <button
                  className="chip chip-lg"
                  onClick={() => {
                    setAdvancedTab('topics');
                    setAdvancedSearch(true);
                  }}
                  type="button"
                >
                  <span className="chip-label">...</span>
                </button>
              </div>
              <div className="search-filters search-filters-options">
                <div className="h6">{intl.formatMessage(messages.options)}</div>
              </div>
            </>
          )}
          {advancedSearch && (
            <Tabs
              activeKey={advancedTab}
              className="auto"
              onSelect={k => setAdvancedTab(k)}
            >
              <Tab
                eventKey="sections"
                title={intl.formatMessage(messages.sections)}
              >
                <Row>
                  {Object.keys(sections).map(groupId => (
                    <Col sm={6} key={groupId} className="group-col">
                      <div>
                        <label className="group-head font-weight-bold text-primary">
                          <Checkbox
                            indeterminate={isGroupIndeterminate(
                              sections[groupId],
                              checkedGroups[groupId],
                            )}
                            checked={checkedGroups[groupId]}
                            onChange={e =>
                              setGroupChecked(groupId, e.currentTarget.checked)
                            }
                          />{' '}
                          {intl.formatMessage(messages[groupId])}
                        </label>
                      </div>
                      {Object.keys(sections[groupId]).map(filterId => (
                        <div key={filterId}>
                          <label>
                            <input
                              type="checkbox"
                              checked={sections[groupId][filterId].value}
                              onChange={e =>
                                setSectionFilterChecked(
                                  groupId,
                                  filterId,
                                  e.currentTarget.checked,
                                )
                              }
                            />{' '}
                            {sections[groupId][filterId].label}
                          </label>
                        </div>
                      ))}
                    </Col>
                  ))}
                </Row>
              </Tab>
              <Tab
                eventKey="topics"
                title={intl.formatMessage(messages.topics)}
              >
                <div className="group-col">
                  {Object.keys(topics).map(topicId => (
                    <div key={topicId}>
                      <label>
                        <input
                          type="checkbox"
                          checked={topics[topicId].value}
                          onChange={e =>
                            setTopicChecked(topicId, e.currentTarget.checked)
                          }
                        />{' '}
                        {topics[topicId].label}
                      </label>
                    </div>
                  ))}
                </div>
              </Tab>
              <Tab
                eventKey="options"
                title={intl.formatMessage(messages.options)}
              />
            </Tabs>
          )}
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default injectIntl(SearchModal);
