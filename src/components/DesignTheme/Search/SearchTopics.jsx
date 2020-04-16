/**
 * Sections for search
 */
import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { defineMessages, useIntl } from 'react-intl';

import {
  Input,
  FormGroup,
  Label,
  Collapse,
} from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({
  showAll: {
    id: 'Show all',
    defaultMessage: 'Mostra tutto',
  },
});

export default function SearchTopics({
  onChange,
  defaultCheckedTopics,
  collapsable = false,
}) {
  const intl = useIntl();
  const [topics, setTopics] = useState({});
  const [collapse, setCollapse] = useState(true);

  useEffect(() => {
    // TODO Fetch real data here
    setTopics({
      abitazione: {
        label: 'Abitazione',
        value: false,
      },
      acqua: {
        label: 'Acqua',
        value: false,
      },
      agevolazioni_case: {
        label: 'Agevolazioni per la casa',
        value: false,
      },
      anziani: {
        label: 'Anziani',
        value: false,
      },
      assistena_e_inclusione: {
        label: 'Assistenza e inclusione',
        value: false,
      },
      comune: {
        label: 'Comune',
        value: false,
      },
      comunicare_con_il_comune: {
        label: 'Comunicare con il comune',
        value: false,
      },
      corsi_e_tempo_libero: {
        label: 'Corsi e tempo libero',
        value: false,
      },
      costruire_e_ristrutturare: {
        label: 'Costruire e ristrutturare',
        value: false,
      },
      cultura: {
        label: 'Cultura',
        value: false,
      },
      edilizia: {
        label: 'Ediliazia',
        value: false,
      },
      famiglia: {
        label: 'Famiglia',
        value: false,
      },
    });

    //set default checked topics
    Object.keys(defaultCheckedTopics).map(key => {
      setTopicChecked(key, true);
    });
  }, []);

  useEffect(() => {
    onChange(topics);
  }, [topics]);

  const setTopicChecked = (topicId, checked) => {
    setTopics(prevTopics => ({
      ...prevTopics,
      [topicId]: {
        ...prevTopics[topicId],
        value: checked,
      },
    }));
  };

  const getTopicChunks = topics => {
    const size = Object.keys(topics).length;
    if (size > 10) {
      let visibleTopics = {};
      let hidedTopics = {};
      const keys_visible = Object.keys(topics).slice(0, 10);
      const keys_hide = Object.keys(topics).slice(10, size);

      keys_visible.map(key => {
        visibleTopics[key] = topics[key];
      });

      keys_hide.map(key => {
        hidedTopics[key] = topics[key];
      });

      return [visibleTopics, hidedTopics];
    }
    return [topics];
  };

  const topic_chunks = getTopicChunks(topics);

  const drawTopics = topics => (
    <>
      {Object.keys(topics).map(topicId => (
        <div key={topicId}>
          <FormGroup check tag="div">
            <Input
              id={topicId}
              type="checkbox"
              checked={topics[topicId].value}
              onChange={e => setTopicChecked(topicId, e.currentTarget.checked)}
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
              onClick={e => {
                e.preventDefault();
                setCollapse(prev => !prev);
              }}
              className="font-weight-bold"
              data-toggle="collapse"
              href="#collapseTopics"
              role="button"
              aria-expanded="false"
              aria-controls="collapseList"
            >
              {intl.formatMessage(messages.showAll)}
            </a>
          </div>
        </>
      )}
    </>
  );
}
