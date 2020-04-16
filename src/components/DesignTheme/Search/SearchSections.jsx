/**
 * Sections for search
 */
import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import {
  Col,
  FormGroup,
  Label,
  Icon,
  Collapse,
} from 'design-react-kit/dist/design-react-kit';
import { Checkbox } from '@design/components';
import { SearchUtils } from '@design/components';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
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
});

export default function SearchSections({
  onChange,
  defaultCheckedGroups,
  cols,
  toggleGroups = false,
}) {
  const intl = useIntl();
  const [sections, setSections] = useState({
    amministrazione: {},
    servizi: {},
    novita: {},
    documenti: {},
  });

  const [collapse, setCollapse] = useState({
    amministrazione: toggleGroups,
    servizi: toggleGroups,
    novita: toggleGroups,
    documenti: toggleGroups,
  });

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

  const setGroupChecked = (groupId, checked) => {
    setSections(prevSections => ({
      ...prevSections,
      [groupId]: SearchUtils.updateGroupCheckedStatus(
        prevSections[groupId],
        checked,
      ),
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
    // TODO fare il merge di section con defaultCheckedGroup
  }, []);

  useEffect(() => {
    onChange(sections);
  }, [sections]);

  const toggleCollapseGroup = groupId => {
    setCollapse(prevCollapse => ({
      ...prevCollapse,
      [groupId]: !prevCollapse[groupId],
    }));
  };

  return (
    <>
      {Object.keys(sections).map(groupId => (
        <Col sm={cols ? 12 / cols : 12} key={groupId} className="group-col">
          <FormGroup check tag="div">
            <Checkbox
              id={groupId}
              indeterminate={SearchUtils.isGroupIndeterminate(
                sections[groupId],
                SearchUtils.isGroupChecked(sections[groupId]),
              )}
              checked={SearchUtils.isGroupChecked(sections[groupId])}
              onChange={e => setGroupChecked(groupId, e.currentTarget.checked)}
            />

            <Label
              check
              for={groupId}
              tag="label"
              className={cx('group-head', {
                'text-primary': !toggleGroups,
                'font-weight-bold': !toggleGroups,
                indeterminate: SearchUtils.isGroupIndeterminate(
                  sections[groupId],
                  SearchUtils.isGroupChecked(sections[groupId]),
                ),
              })}
              widths={['xs', 'sm', 'md', 'lg', 'xl']}
            >
              {intl.formatMessage(messages[groupId])}
            </Label>

            {toggleGroups && (
              <a
                className="float-right"
                href={`#section${groupId}Collapse`}
                onClick={e => {
                  e.preventDefault();
                  toggleCollapseGroup(groupId);
                }}
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls={`section${groupId}Collapse`}
              >
                <Icon
                  color="primary"
                  icon="it-more-items"
                  padding={false}
                  className="right"
                />
              </a>
            )}
          </FormGroup>

          <Collapse
            isOpen={!collapse[groupId]}
            id={`section${groupId}Collapse`}
          >
            {Object.keys(sections[groupId]).map(filterId => (
              <FormGroup
                check
                tag="div"
                key={filterId}
                className={cx({ 'pl-4': toggleGroups })}
              >
                <Checkbox
                  id={filterId}
                  checked={sections[groupId][filterId].value}
                  onChange={e =>
                    setSectionFilterChecked(
                      groupId,
                      filterId,
                      e.currentTarget.checked,
                    )
                  }
                />
                <Label
                  check
                  for={filterId}
                  tag="label"
                  widths={['xs', 'sm', 'md', 'lg', 'xl']}
                >
                  {sections[groupId][filterId].label}
                </Label>
              </FormGroup>
            ))}
          </Collapse>
        </Col>
      ))}
    </>
  );
}
