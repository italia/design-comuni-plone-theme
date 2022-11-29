/**
 * Sections for search
 */
import React, { useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Input, FormGroup, Label, Collapse } from 'design-react-kit';

const messages = defineMessages({
  showAll: {
    id: 'Show all',
    defaultMessage: 'Mostra tutto',
  },
  hide: {
    id: 'Hide',
    defaultMessage: 'Nascondi',
  },
  searchTopic: {
    id: 'Cerca per argomento',
    defaultMessage: 'Cerca per argomento',
  },
  showAllTopics: {
    id: 'Mostra tutti gli argomenti',
    defaultMessage: 'Mostra tutti gli argomenti',
  },
  hideAllTopics: {
    id: 'Non mostrare tutti gli argomenti',
    defaultMessage: 'Non mostrare tutti gli argomenti',
  },
});

export default function SearchTopics({
  setTopics,
  topics,
  collapsable = false,
}) {
  const intl = useIntl();
  // const [topics, setTopics] = useState({});
  const [collapse, setCollapse] = useState(true);

  // useEffect(() => {
  //   if (searchFilters?.length > 0) {
  //     setTopics(searchFilters);
  //   }
  // }, [searchFilters]);

  // useEffect(() => {
  //   onChange(topics);
  // }, [topics]);

  const setTopicChecked = (topicId, checked) => {
    setTopics((prevTopics) => ({
      ...prevTopics,
      [topicId]: {
        ...prevTopics[topicId],
        value: checked,
      },
    }));
  };

  const getTopicChunks = (topics) => {
    const size = Object.keys(topics).length;
    if (size > 10) {
      let visibleTopics = {};
      let hidedTopics = {};
      const keys_visible = Object.keys(topics).slice(0, 10);
      const keys_hide = Object.keys(topics).slice(10, size);

      keys_visible.forEach((key) => {
        visibleTopics[key] = topics[key];
      });

      keys_hide.forEach((key) => {
        hidedTopics[key] = topics[key];
      });

      return [visibleTopics, hidedTopics];
    }
    return [topics];
  };

  const topic_chunks = getTopicChunks(topics);

  const drawTopics = (topics) => (
    <>
      {Object.keys(topics).map((topicId) => (
        <div key={topicId}>
          <FormGroup check tag="div">
            <Input
              id={topicId}
              type="checkbox"
              checked={topics[topicId].value}
              onChange={(e) =>
                setTopicChecked(topicId, e.currentTarget.checked)
              }
              aria-controls="search-results-region"
              aria-label={
                intl.formatMessage(messages.searchTopic) +
                ' ' +
                topics[topicId].label
              }
            />
            <Label
              check
              for={topicId}
              tag="label"
              widths={['xs', 'sm', 'md', 'lg', 'xl']}
            >
              {topics[topicId].label}
            </Label>
          </FormGroup>
        </div>
      ))}
    </>
  );
  return (
    <>
      {drawTopics(topic_chunks[0])}
      {collapsable && topic_chunks[1] && (
        <>
          <Collapse isOpen={!collapse} id="collapseTopics">
            {drawTopics(topic_chunks[1])}
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
                collapse ? messages.showAllTopics : messages.hideAllTopics,
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
