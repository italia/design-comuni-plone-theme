/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import mapValues from 'lodash/mapValues';
import toPairs from 'lodash/toPairs';
import fromPairs from 'lodash/fromPairs';
import cx from 'classnames';
import moment from 'moment';

import qs from 'query-string';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  Row,
  Col,
  Button,
  ButtonToolbar,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  FormGroup,
  Input,
  Label,
  Toggle,
  Spinner,
} from 'design-react-kit';

import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { getSearchFilters } from 'design-comuni-plone-theme/actions';
import { SearchUtils, Checkbox } from 'design-comuni-plone-theme/components';

const {
  defaultOptions,
  isGroupChecked,
  isGroupIndeterminate,
  updateGroupCheckedStatus,
  parseFetchedSections,
  parseFetchedTopics,
  parseFetchedOptions,
  getSearchParamsURL,
  setSectionFilterChecked,
  setGroupChecked,
} = SearchUtils;

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
  searchLabel: {
    id: 'searchLabel',
    defaultMessage: 'Cerca nel sito',
  },
  filters: {
    id: 'filters',
    defaultMessage: 'Filtri',
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
  searchAllSections: {
    id: 'searchAllSections',
    defaultMessage: 'Cerca in tutte le sezioni',
  },
  searchInSection: {
    id: 'searchInSection',
    defaultMessage: 'Cerca nella sezione',
  },
  deselectSection: {
    id: 'deselectSearchSection',
    defaultMessage: 'Non cercare nella sezione',
  },
  advandedSectionsFilters: {
    id: 'advandedSectionsFilters',
    defaultMessage: 'Vai alla ricerca per sezioni avanzata',
  },
  allTopics: {
    id: 'allTopics',
    defaultMessage: 'Tutti gli argomenti',
  },
  searchAllTopics: {
    id: 'searchAllTopics',
    defaultMessage: 'Cerca tutti gli argomenti',
  },
  selectTopicFilters: {
    id: 'selectTopicFilters',
    defaultMessage: 'Seleziona gli argomenti che vuoi cercare',
  },
  allOptions: {
    id: 'allOptions',
    defaultMessage: 'Tutte le date',
  },
  setMoreSearchOptions: {
    id: 'setMoreSearchOptions',
    defaultMessage: 'Vai alle altre opzioni di ricerca',
  },
  removeTopic: {
    id: 'removeTopic',
    defaultMessage: 'Rimuovi argomento',
  },
  removeOption: {
    id: 'removeOption',
    defaultMessage: 'Rimuovi opzione',
  },
  optionActiveContentButton: {
    id: 'optionActiveContentButton',
    defaultMessage: 'Contenuto attivo',
  },
  optionActiveContentLabel: {
    id: 'optionActiveContentLabel',
    defaultMessage: 'Cerca solo tra i contenuti attivi',
  },
  optionActiveContentInfo: {
    id: 'optionActiveContentInfo',
    defaultMessage:
      'Verranno esclusi dalla ricerca i contenuti archiviati e non più validi come gli eventi terminati o i bandi scaduti.',
  },
  optionDateStart: {
    id: 'optionDateStart',
    defaultMessage: 'Data inizio',
  },
  optionDateEnd: {
    id: 'optionDateEnd',
    defaultMessage: 'Data fine',
  },
  optionDateStartButton: {
    id: 'optionDateStartButton',
    defaultMessage: 'Dal',
  },
  optionDateEndButton: {
    id: 'optionDateEndButton',
    defaultMessage: 'Al',
  },
  optionDatePlaceholder: {
    id: 'optionDatePlaceholder',
    defaultMessage: 'inserisci la data in formato gg/mm/aaaa',
  },
  current: {
    id: 'currentActive',
    defaultMessage: 'attivo',
  },
  searchLabel: {
    id: 'searchLabel',
    defaultMessage: 'Cerca nel sito',
  },
});

const SearchModal = ({ closeModal, show }) => {
  const intl = useIntl();

  const dispatch = useDispatch();
  const location = useLocation();

  const [redirectingToResults, setRedirectingToResults] = useState(false);
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [advancedTab, setAdvancedTab] = useState(null);
  const [searchableText, setSearchableText] = useState(
    qs.parse(location.search)?.SearchableText ?? '',
  );
  const [sections, setSections] = useState({});
  const [topics, setTopics] = useState({});
  const [options, setOptions] = useState({ ...defaultOptions });
  const subsite = useSelector((state) => state.subsite?.data);
  const selectedTopics = fromPairs(toPairs(topics).filter((t) => t[1].value));
  const inputRef = React.useRef(null);
  let checkedGroups = {};
  Object.keys(sections).forEach((k) => {
    checkedGroups[k] = isGroupChecked(sections[k]);
  });

  const searchFilters = useSelector((state) => state.searchFilters.result);

  useEffect(() => {
    if (!searchFilters || Object.keys(searchFilters).length === 0)
      dispatch(getSearchFilters());
  }, []);

  const handleBackTabbingFromPane = (event) => {
    if (event.shiftKey && event.key === 'Tab') {
      const activeTab = document.querySelectorAll('[aria-selected=true] a')[0];
      if (!activeTab) {
        return;
      }
      const firstSectionItem = document.querySelectorAll(
        '[role="tabpanel"][aria-expanded="true"] input',
      )[0];
      const lastFocusedElement = document.activeElement;
      const modal = document.querySelectorAll('div.modal[role="dialog"]')[0];
      //  That input is nasty, make exception in logic
      const isModalContainer =
        modal === lastFocusedElement ||
        lastFocusedElement === document.getElementById('options-date-end');
      if (
        lastFocusedElement === firstSectionItem ||
        !lastFocusedElement ||
        isModalContainer
      ) {
        event.preventDefault(); // Prevent default Shift+Tab behavior
        activeTab.focus();
      }
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleBackTabbingFromPane);
    return () => {
      document.removeEventListener('keydown', handleBackTabbingFromPane);
    };
  }, []);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        inputRef.current && inputRef.current.focus(); //setta il focus sul campo di ricerca all'apertura della modale
      }, 100);
      document.body.classList.add('search-modal-opened'); //to prevent scroll body
    } else {
      document.body.classList.remove('search-modal-opened'); //re-enable scroll body
    }
  }, [show, inputRef]);

  useEffect(() => {
    if (Object.keys(searchFilters?.sections ?? {}).length > 0) {
      let pfs = parseFetchedSections(searchFilters.sections, location, subsite);

      setSections(pfs);
    }

    if (searchFilters?.topics?.length > 0) {
      setTopics(parseFetchedTopics(searchFilters.topics, location));
    }

    setOptions(parseFetchedOptions(defaultOptions, location));
  }, [searchFilters, location, subsite]);

  // The "all" filter is checked if all groups are unchecked
  const allSectionsChecked = Object.keys(checkedGroups).reduce(
    (checked, groupId) => checked && !checkedGroups[groupId],
    true,
  );
  const allTopicsChecked = Object.keys(selectedTopics).length === 0;
  const allOptionsSet =
    !options.activeContent && !options.dateStart && !options.dateEnd;

  const resetSections = () => {
    setSections((prevSections) =>
      mapValues(prevSections, (group) => ({
        ...group,
        items: updateGroupCheckedStatus(group, false),
      })),
    );
  };

  const resetTopics = () => {
    setTopics((prevTopics) =>
      mapValues(prevTopics, (topic) => ({
        ...topic,
        value: false,
      })),
    );
  };

  const setTopicChecked = (topicId, checked) => {
    setTopics((prevTopics) => ({
      ...prevTopics,
      [topicId]: {
        ...prevTopics[topicId],
        value: checked,
      },
    }));
  };

  const resetOptions = () => setOptions({ ...defaultOptions });

  const setOptionValue = (optId, value) =>
    setOptions((prevOptions) => ({ ...prevOptions, [optId]: value }));

  const submitSearch = () => {
    setRedirectingToResults(true);
    setAdvancedSearch(false);
    // setTimeout(() => {
    //   closeModal();
    // }, 500);
  };

  const handleEnterSearch = (e) => {
    if (e.key === 'Enter') {
      submitSearch();

      if (__CLIENT__) {
        window.location.href =
          window.location.origin +
          getSearchParamsURL(
            searchableText,
            sections,
            topics,
            options,
            {},
            null,
            null,
            null,
            subsite,
            intl.locale,
          );
      }
    }
  };

  return (
    <Modal
      wrapClassName="public-ui"
      id="search-modal"
      isOpen={show}
      toggle={closeModal}
      role="alertdialog"
    >
      <ModalHeader toggle={closeModal}>
        <Container>
          <div className="d-flex align-items-center">
            {!advancedSearch && (
              <Button
                color="link"
                title={intl.formatMessage(messages.closeSearch)}
                onClick={closeModal}
              >
                <Icon color="" icon="it-arrow-left-circle" padding={false} />
              </Button>
            )}
            {advancedSearch && (
              <Button
                color="link"
                title={intl.formatMessage(messages.backToSearch)}
                className="back-to-search text-reset"
                onClick={() => setAdvancedSearch(false)}
              >
                <Icon color="" icon="it-arrow-left-circle" padding={false} />
              </Button>
            )}
            <p className="modal-title-centered h1">
              {intl.formatMessage(
                advancedSearch ? messages.filters : messages.search,
              )}
            </p>

            <a
              href={getSearchParamsURL(
                searchableText,
                sections,
                topics,
                options,
                {},
                null,
                null,
                null,
                subsite,
                intl.locale,
                false,
              )}
              className="ms-auto btn btn-outline-primary text-capitalize"
              style={{ visibility: advancedSearch ? 'visible' : 'hidden' }}
              onClick={submitSearch}
            >
              {intl.formatMessage(messages.search)}
            </a>
          </div>
        </Container>
      </ModalHeader>
      <ModalBody>
        <Container>
          {!advancedSearch && (
            <>
              <div className="search-filters search-filters-text">
                <div className="form-group">
                  <div
                    className="input-group mb-3"
                    role="search"
                    aria-label={intl.formatMessage(messages.searchLabel)}
                  >
                    <input
                      id="search-text"
                      type="text"
                      value={searchableText}
                      onChange={(e) => setSearchableText(e.target.value)}
                      onKeyDown={handleEnterSearch}
                      className="form-control"
                      placeholder={intl.formatMessage(messages.searchLabel)}
                      aria-label={intl.formatMessage(messages.searchLabel)}
                      aria-describedby="search-button"
                      ref={inputRef}
                    />
                    <a
                      href={getSearchParamsURL(
                        searchableText,
                        sections,
                        topics,
                        options,
                        {},
                        null,
                        null,
                        null,
                        subsite,
                        intl.locale,
                        false,
                      )}
                      onClick={submitSearch}
                      className="btn btn-link rounded-0 py-0"
                      title={intl.formatMessage(messages.search)}
                      id="search-button"
                    >
                      <Icon icon="it-search" aria-hidden={true} size="sm" />
                    </a>
                  </div>
                </div>
              </div>

              {Object.keys(sections)?.length > 0 && (
                <div className="search-filters search-filters-section">
                  <div className="h6">
                    {intl.formatMessage(messages.sections)}
                  </div>
                  <ButtonToolbar className="mb-3">
                    <Button
                      color="primary"
                      outline={!allSectionsChecked}
                      onClick={resetSections}
                      size="sm"
                      className="me-2 mb-2"
                      aria-label={intl.formatMessage(
                        messages.searchAllSections,
                      )}
                    >
                      {intl.formatMessage(messages.allFilters)}
                    </Button>
                    {Object.keys(sections).map((groupId) => (
                      <Button
                        key={groupId}
                        color="primary"
                        outline={!checkedGroups[groupId]}
                        size="sm"
                        className="me-2 mb-2"
                        aria-label={
                          (!checkedGroups[groupId]
                            ? intl.formatMessage(messages.searchInSection)
                            : intl.formatMessage(messages.deselectSection)) +
                          ' ' +
                          sections[groupId].title
                        }
                        onClick={() =>
                          setGroupChecked(
                            groupId,
                            !checkedGroups[groupId],
                            setSections,
                          )
                        }
                      >
                        {sections[groupId].title}
                      </Button>
                    ))}
                    <Button
                      color="primary"
                      outline
                      size="sm"
                      className="mb-2"
                      onClick={() => {
                        setAdvancedTab('sections');
                        setAdvancedSearch(true);
                      }}
                      aria-label={intl.formatMessage(
                        messages.advandedSectionsFilters,
                      )}
                    >
                      ...
                    </Button>
                  </ButtonToolbar>
                </div>
              )}
              <div className="search-filters search-filters-topics">
                <div className="h6">{intl.formatMessage(messages.topics)}</div>
                <button
                  className={cx('chip chip-simple chip-lg me-2 mb-2', {
                    selected: allTopicsChecked,
                  })}
                  type="button"
                  onClick={resetTopics}
                  aria-label={intl.formatMessage(messages.searchAllTopics)}
                >
                  <span className="chip-label">
                    {intl.formatMessage(messages.allTopics)}
                  </span>
                </button>
                {Object.keys(selectedTopics).map((topicId) => (
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
                      <Icon color="" icon="it-close" padding={false} />
                      <span className="visually-hidden">
                        {intl.formatMessage(messages.removeTopic)}{' '}
                        {selectedTopics[topicId].label}
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
                  aria-label={intl.formatMessage(messages.selectTopicFilters)}
                >
                  <span className="chip-label">...</span>
                </button>
              </div>
              <div className="search-filters search-filters-options">
                <div className="h6">{intl.formatMessage(messages.options)}</div>
                <button
                  className={cx('chip chip-simple chip-lg me-2 mb-2', {
                    selected: allOptionsSet,
                  })}
                  type="button"
                  onClick={resetOptions}
                >
                  <span className="chip-label">
                    {intl.formatMessage(messages.allOptions)}
                  </span>
                </button>
                {options.activeContent && (
                  <div
                    role="presentation"
                    className="chip chip-lg selected"
                    onClick={() => setOptionValue('activeContent', false)}
                  >
                    <span className="chip-label">
                      {intl.formatMessage(messages.optionActiveContentButton)}
                    </span>
                    <button type="button">
                      <Icon color="" icon="it-close" padding={false} />
                      <span className="visually-hidden">
                        {intl.formatMessage(messages.removeOption)}{' '}
                        {intl.formatMessage(messages.optionActiveContentButton)}
                      </span>
                    </button>
                  </div>
                )}
                {options.dateStart && (
                  <div
                    role="presentation"
                    className="chip chip-lg selected"
                    onClick={() => setOptionValue('dateStart', null)}
                  >
                    <span className="chip-label">
                      {`${intl.formatMessage(
                        messages.optionDateStartButton,
                      )} ${moment(options.dateStart)
                        .locale(intl.locale)
                        .format('LL')}`}
                    </span>
                    <button type="button">
                      <Icon color="" icon="it-close" padding={false} />
                      <span className="visually-hidden">
                        {intl.formatMessage(messages.removeOption)}{' '}
                        {`${intl.formatMessage(
                          messages.optionDateStartButton,
                        )} ${moment(options.dateStart)
                          .locale(intl.locale)
                          .format('LL')}`}
                      </span>
                    </button>
                  </div>
                )}
                {options.dateEnd && (
                  <div
                    role="presentation"
                    className="chip chip-lg selected"
                    onClick={() => setOptionValue('dateEnd', null)}
                  >
                    <span className="chip-label">
                      {`${intl.formatMessage(
                        messages.optionDateEndButton,
                      )} ${moment(options.dateEnd)
                        .locale(intl.locale)
                        .format('LL')}`}
                    </span>
                    <button type="button">
                      <Icon color="" icon="it-close" padding={false} />
                      <span className="visually-hidden">
                        {intl.formatMessage(messages.removeOption)}{' '}
                        {`${intl.formatMessage(
                          messages.optionDateEndButton,
                        )} ${moment(options.dateEnd)
                          .locale(intl.locale)
                          .format('LL')}`}
                      </span>
                    </button>
                  </div>
                )}
                <button
                  className="chip chip-lg"
                  onClick={() => {
                    setAdvancedTab('options');
                    setAdvancedSearch(true);
                  }}
                  type="button"
                  aria-label={intl.formatMessage(messages.setMoreSearchOptions)}
                >
                  <span className="chip-label">...</span>
                </button>
              </div>
              <div className="search-filters text-center">
                <a
                  href={getSearchParamsURL(
                    searchableText,
                    sections,
                    topics,
                    options,
                    {},
                    null,
                    null,
                    null,
                    subsite,
                    intl.locale,
                    false,
                  )}
                  onClick={submitSearch}
                  className="btn-icon btn btn-primary"
                  title={intl.formatMessage(messages.search)}
                >
                  <Icon icon="it-search" aria-hidden={true} size="sm" />
                  <span className="ms-2">
                    {intl.formatMessage(messages.search)}
                  </span>
                </a>
              </div>
            </>
          )}
          {advancedSearch && (
            <div>
              <Nav tabs className="mb-3 nav-fill" role="tablist">
                {Object.keys(sections)?.length > 0 && (
                  <NavItem
                    role="tab"
                    aria-controls="sections-tab"
                    aria-selected={advancedTab === 'sections'}
                  >
                    <NavLink
                      href="#"
                      active={advancedTab === 'sections'}
                      onClick={() => setAdvancedTab('sections')}
                      id={'sections'}
                    >
                      <span>{intl.formatMessage(messages.sections)}</span>
                      {advancedTab === 'sections' && (
                        <span className="visually-hidden">
                          {' '}
                          {intl.formatMessage(messages.current)}
                        </span>
                      )}
                    </NavLink>
                  </NavItem>
                )}
                <NavItem
                  role="tab"
                  aria-controls="topics-tab"
                  aria-selected={advancedTab === 'topics'}
                >
                  <NavLink
                    href="#"
                    active={advancedTab === 'topics'}
                    onClick={() => setAdvancedTab('topics')}
                    id={'topics'}
                  >
                    <span>{intl.formatMessage(messages.topics)}</span>
                    {advancedTab === 'topics' && (
                      <span className="visually-hidden">
                        {' '}
                        {intl.formatMessage(messages.current)}
                      </span>
                    )}
                  </NavLink>
                </NavItem>
                <NavItem
                  role="tab"
                  aria-controls="options-tab"
                  aria-selected={advancedTab === 'options'}
                >
                  <NavLink
                    href="#"
                    active={advancedTab === 'options'}
                    onClick={() => setAdvancedTab('options')}
                    id={'options'}
                  >
                    <span>{intl.formatMessage(messages.options)}</span>
                    {advancedTab === 'options' && (
                      <span className="visually-hidden">
                        {' '}
                        {intl.formatMessage(messages.current)}
                      </span>
                    )}
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={advancedTab}>
                {Object.keys(sections)?.length > 0 && (
                  <TabPane
                    className="p-3"
                    tabId="sections"
                    role="tabpanel"
                    id="sections-tab"
                    aria-expanded={advancedTab === 'sections'}
                    hidden={!(advancedTab === 'sections')}
                  >
                    <Row>
                      <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-sm-12">
                        <Row>
                          {Object.keys(sections).map((groupId) => (
                            <Col sm={6} key={groupId} className="group-col">
                              <div role="tablist">
                                <FormGroup check tag="div">
                                  <Checkbox
                                    id={`modal-search-${groupId}`}
                                    indeterminate={isGroupIndeterminate(
                                      sections[groupId],
                                      checkedGroups[groupId],
                                    )}
                                    checked={checkedGroups[groupId]}
                                    onChange={(e) =>
                                      setGroupChecked(
                                        groupId,
                                        e.currentTarget.checked,
                                        setSections,
                                      )
                                    }
                                    role="tab"
                                    aria-controls={groupId + '-section'}
                                    aria-selected={checkedGroups[groupId]}
                                  />
                                  <Label
                                    check
                                    for={`modal-search-${groupId}`}
                                    tag="label"
                                    className={cx(
                                      'group-head fw-bold text-primary',
                                      {
                                        indeterminate: isGroupIndeterminate(
                                          sections[groupId],
                                          checkedGroups[groupId],
                                        ),
                                      },
                                    )}
                                    widths={['xs', 'sm', 'md', 'lg', 'xl']}
                                  >
                                    {sections[groupId].title}
                                  </Label>
                                </FormGroup>
                                {Object.keys(sections[groupId].items).map(
                                  (filterId) => (
                                    <FormGroup
                                      check
                                      tag="div"
                                      key={filterId}
                                      role="tabpanel"
                                      id={groupId + '-section'}
                                      aria-label={sections[groupId].title}
                                    >
                                      <Checkbox
                                        id={`modal-search-${filterId}`}
                                        checked={
                                          sections[groupId].items[filterId]
                                            .value
                                        }
                                        onChange={(e) =>
                                          setSectionFilterChecked(
                                            groupId,
                                            filterId,
                                            e.currentTarget.checked,
                                            setSections,
                                          )
                                        }
                                      />
                                      <Label
                                        check
                                        for={`modal-search-${filterId}`}
                                        tag="label"
                                        widths={['xs', 'sm', 'md', 'lg', 'xl']}
                                      >
                                        {
                                          sections[groupId].items[filterId]
                                            .label
                                        }
                                      </Label>
                                    </FormGroup>
                                  ),
                                )}
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </div>
                    </Row>
                  </TabPane>
                )}
                <TabPane
                  className="p-3"
                  tabId="topics"
                  role="tabpanel"
                  id="topics-tab"
                  aria-expanded={advancedTab === 'topics'}
                  hidden={!(advancedTab === 'topics')}
                >
                  <Row>
                    <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-sm-12">
                      <div className="group-col columns">
                        {Object.keys(topics).map((topicId) => (
                          <div key={topicId}>
                            <FormGroup check tag="div">
                              <Input
                                id={`modal-search-${topicId}`}
                                type="checkbox"
                                checked={topics[topicId].value}
                                onChange={(e) =>
                                  setTopicChecked(
                                    topicId,
                                    e.currentTarget.checked,
                                  )
                                }
                              />
                              <Label
                                check
                                for={`modal-search-${topicId}`}
                                tag="label"
                                widths={['xs', 'sm', 'md', 'lg', 'xl']}
                              >
                                {topics[topicId].label}
                              </Label>
                            </FormGroup>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Row>
                </TabPane>
                <TabPane
                  className="p-3"
                  tabId="options"
                  role="tabpanel"
                  id="options-tab"
                  aria-expanded={advancedTab === 'options'}
                  hidden={!(advancedTab === 'options')}
                >
                  <Row>
                    <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-sm-12">
                      <FormGroup check className="form-check-group mb-5">
                        <Toggle
                          label={intl.formatMessage(
                            messages.optionActiveContentLabel,
                          )}
                          checked={options.activeContent}
                          onChange={(e) =>
                            setOptionValue('activeContent', e.target?.checked)
                          }
                        />
                        <p className="small">
                          {intl.formatMessage(messages.optionActiveContentInfo)}
                        </p>
                      </FormGroup>
                      <div className="row mt-5">
                        <FormGroup className="col-sm">
                          <Input
                            id="options-date-start"
                            type="date"
                            label={intl.formatMessage(messages.optionDateStart)}
                            placeholder={intl.formatMessage(
                              messages.optionDatePlaceholder,
                            )}
                            value={options.dateStart}
                            onChange={(e) =>
                              setOptionValue('dateStart', e.target.value)
                            }
                          />
                        </FormGroup>
                        <FormGroup className="col-sm">
                          <Input
                            id="options-date-end"
                            type="date"
                            label={intl.formatMessage(messages.optionDateEnd)}
                            placeholder={intl.formatMessage(
                              messages.optionDatePlaceholder,
                            )}
                            value={options.dateEnd}
                            onChange={(e) =>
                              setOptionValue('dateEnd', e.target.value)
                            }
                          />
                        </FormGroup>
                      </div>
                    </div>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          )}
        </Container>
        {redirectingToResults && (
          <div className="overlay loading-results">
            <Spinner active />
          </div>
        )}
      </ModalBody>
    </Modal>
  );
};

export default SearchModal;
