/**
 * Sections for search
 */
import React, { useState } from 'react';
import cx from 'classnames';
import { defineMessages, useIntl } from 'react-intl';

import {
  Col,
  FormGroup,
  Label,
  Icon,
  Collapse,
} from 'design-react-kit/dist/design-react-kit';

import { SearchUtils, Checkbox } from '@italia/components';

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
  'documenti-e-dati': {
    id: 'documenti-e-dati',
    defaultMessage: 'Documenti e dati',
  },
});

export default function SearchSections({
  setSections,
  sections,
  cols,
  toggleGroups = false,
}) {
  const intl = useIntl();
  // const [sections, setSections] = useState({
  //   amministrazione: {},
  //   servizi: {},
  //   novita: {},
  //   'documenti-e-dati': {},
  // });

  const [collapse, setCollapse] = useState({
    amministrazione: toggleGroups,
    servizi: toggleGroups,
    novita: toggleGroups,
    'documenti-e-dati': toggleGroups,
  });

  const setSectionFilterChecked = (groupId, filterId, checked) => {
    setSections((prevSections) => ({
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
    setSections((prevSections) => ({
      ...prevSections,
      [groupId]: SearchUtils.updateGroupCheckedStatus(
        prevSections[groupId],
        checked,
      ),
    }));
  };

  // useEffect(() => {
  //   if (Object.keys(searchFilters ?? {}).length > 0) {
  //     setSections(searchFilters);
  //   }
  // }, [searchFilters]);

  // useEffect(() => {
  //   onChange(sections);
  // }, [sections]);

  const toggleCollapseGroup = (groupId) => {
    setCollapse((prevCollapse) => ({
      ...prevCollapse,
      [groupId]: !prevCollapse[groupId],
    }));
  };

  return (
    <>
      {Object.keys(sections).map((groupId) => (
        <Col sm={cols ? 12 / cols : 12} key={groupId} className="group-col">
          <FormGroup check tag="div">
            <Checkbox
              id={groupId}
              indeterminate={SearchUtils.isGroupIndeterminate(
                sections[groupId],
                SearchUtils.isGroupChecked(sections[groupId]),
              )}
              checked={SearchUtils.isGroupChecked(sections[groupId])}
              onChange={(e) =>
                setGroupChecked(groupId, e.currentTarget.checked)
              }
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
                onClick={(e) => {
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
            {Object.keys(sections[groupId]).map((filterId) => (
              <FormGroup
                check
                tag="div"
                key={filterId}
                className={cx({ 'pl-4': toggleGroups })}
              >
                <Checkbox
                  id={filterId}
                  checked={sections[groupId][filterId].value}
                  onChange={(e) =>
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
