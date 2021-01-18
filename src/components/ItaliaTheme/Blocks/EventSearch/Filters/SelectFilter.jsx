import React, { useEffect } from 'react';
import { SelectInput } from '@italia/components';
import { useDispatch, useSelector } from 'react-redux';
import { searchContent, getVocabulary } from '@plone/volto/actions';

const SelectFilter = ({ options, value, id, onChange, placeholder }) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return state;
  });
  const selectOptions = state?.search?.subrequests[
    options?.dispatch?.subrequests_name
  ]?.items?.map((i) => {
    return {
      value: i.UID,
      label: i.title,
    };
  });

  const vocabularies = state?.vocabularies;

  useEffect(() => {
    if (options.dispatch) {
      dispatch(
        searchContent(
          options?.dispatch?.path,
          {
            portal_type: options?.dispatch?.portal_types,
            fullobjects: options?.dispatch?.fullobjects,
            metadata_fields: 'UID',
            b_size: options?.dispatch?.b_size,
          },
          options?.dispatch?.subrequests_name,
        ),
      );
    } else if (options.vocabulary) {
      dispatch(getVocabulary(options.vocabulary));
    }
  }, []);

  const select_options = options?.vocabulary
    ? vocabularies?.[options.vocabulary]?.items
    : selectOptions;

  return (
    <div className="mr-lg-3 my-2 my-lg-1 filter-wrapper select-filter">
      <SelectInput
        id={id}
        value={value}
        placeholder={options?.placeholder}
        onChange={(opt) => {
          onChange(id, opt);
        }}
        options={select_options}
        isClearable={true}
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
