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

    //TODO fare il merge di topics con defaultSelectedTopics
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
  const topic_chunks =
    topics.length > 10 && collapsable
      ? [topics.slice(0, 10), topics.slice(10, topics.length)]
      : [topics];

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
      [TODO sistemare topic collapsable]
      {drawTopics[topic_chunks[0]]}
      {collapsable && topic_chunks[1] && (
        <>
          <Collapse isOpen={!collapse} id="collapseTopics">
            {drawTopics[topic_chunks[1]]}
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
