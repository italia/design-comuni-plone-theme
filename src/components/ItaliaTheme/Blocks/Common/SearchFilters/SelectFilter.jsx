/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { SelectInput } from 'design-comuni-plone-theme/components';
import { useDispatch, useSelector } from 'react-redux';
import { searchContent, getVocabulary } from '@plone/volto/actions';

const SelectFilter = ({
  options,
  value,
  id,
  onChange,
  placeholder,
  isSearchable = false,
}) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return state;
  });
  const selectOptions = (
    options.dispatch?.action
      ? state?.[options.dispatch.stateSelector]?.result[
          options.dispatch.resultProp ?? 'items'
        ]
      : state?.search?.subrequests?.[options?.dispatch?.subrequests_name]?.items
  )?.map((i) => {
    return {
      value: i.UID,
      label: i.title,
    };
  });

  const vocabularies = state?.vocabularies;

  useEffect(() => {
    if (options.dispatch) {
      if (options.dispatch.action) {
        dispatch(options.dispatch.action(options?.dispatch?.path));
      } else {
        dispatch(
          searchContent(
            options?.dispatch?.path,
            {
              portal_type: options?.dispatch?.portal_types,
              fullobjects: options?.dispatch?.fullobjects,
              metadata_fields: 'UID',
              b_size: options?.dispatch?.b_size,
              ...(options?.dispatch?.additionalParams ?? {}),
            },
            options?.dispatch?.subrequests_name,
          ),
        );
      }
    } else if (options.vocabulary) {
      dispatch(getVocabulary({ vocabNameOrURL: options.vocabulary }));
    }
  }, []);

  const select_options = options?.choices
    ? options.choices
    : options?.vocabulary
      ? vocabularies?.[options.vocabulary]?.items
      : selectOptions;

  return (
    <div className="me-lg-3 my-2 my-lg-1 filter-wrapper select-filter">
      <SelectInput
        id={id}
        value={value}
        placeholder={options?.placeholder}
        onChange={(opt) => {
          onChange(id, opt);
        }}
        options={select_options?.filter((opt) => !!opt.value?.toString()) ?? []}
        isClearable={options?.isClearable ?? true}
        isSearchable={isSearchable}
        // components={{
        //   ClearIndicator: (props) => {
        //     const {
        //       children = <CustomClearText />,
        //       innerProps: { ref, ...restInnerProps },
        //     } = props;
        //     return (
        //       <div
        //         className="select-pill text-primary clearButton"
        //         {...restInnerProps}
        //         ref={ref}
        //       >
        //         <div style={{ padding: '0px 5px' }}>{children}</div>
        //       </div>
        //     );
        //   },
        // }}
      />
    </div>
  );
};

export default SelectFilter;
