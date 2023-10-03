import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactEditor } from 'slate-react';
import {
  _insertElement,
  _unwrapElement,
  _isActiveElement,
  _getActiveElement,
} from '@plone/volto-slate/elementEditor/utils';
import { SIMPLELINK } from '@plone/volto-slate/constants';
import { useSelectionPosition } from '@plone/volto-slate/hooks';
import { setPluginOptions } from '@plone/volto-slate/actions';
import { PositionedToolbar } from '@plone/volto-slate/editor/ui';
import AddLinkForm from '@plone/volto/components/manage/AnchorPlugin/components/LinkButton/AddLinkForm';

const LinkEditor = (props) => {
  const {
    editor,
    pluginId,
    getActiveElement,
    unwrapElement,
    insertElement,
  } = props;
  const pid = `${editor.uid}-${pluginId}`;
  const showEditor = useSelector((state) => {
    return state['slate_plugins']?.[pid]?.show_sidebar_editor;
  });
  const savedPosition = React.useRef();
  const rect = useSelectionPosition();

  const dispatch = useDispatch();

  const active = getActiveElement(editor);
  // console.log('active', active);
  const [node] = active || [];

  if (showEditor && !savedPosition.current) {
    savedPosition.current = getPositionStyle(rect);
  }
  const dataElement =
    node?.data?.dataElement || node?.data?.['data-element'] || '';

  return showEditor ? (
    <PositionedToolbar className="add-link" position={savedPosition.current}>
      <AddLinkForm
        block="draft-js"
        placeholder={'Aggiungi un link'}
        data={{ url: node?.data?.url || '', dataElement }}
        theme={{}}
        onChangeValue={(url, dataElement) => {
          if (!active) {
            if (!editor.selection) editor.selection = editor.savedSelection;
            insertElement(editor, { url, dataElement });
          } else {
            const selection = unwrapElement(editor);
            editor.selection = selection;
            insertElement(editor, { url, dataElement });
          }
          ReactEditor.focus(editor);
          dispatch(setPluginOptions(pid, { show_sidebar_editor: false }));
          savedPosition.current = null;
        }}
        onClear={() => {
          // clear button was pressed in the link edit popup
          const newSelection = JSON.parse(
            JSON.stringify(unwrapElement(editor)),
          );
          editor.selection = newSelection;
          editor.savedSelection = newSelection;
        }}
        onOverrideContent={(c) => {
          dispatch(setPluginOptions(pid, { show_sidebar_editor: false }));
          savedPosition.current = null;
        }}
      />
    </PositionedToolbar>
  ) : null;
};
function getPositionStyle(rect) {
  return {
    style: {
      opacity: 1,
      top: rect.top + window.pageYOffset - 6,
      left: rect.left + window.pageXOffset + rect.width / 2,
    },
  };
}

export default function install(config) {
  const { slate } = config.settings;
  const PLUGINID = SIMPLELINK;
  const insertElement = _insertElement(PLUGINID);
  const getActiveElement = _getActiveElement(PLUGINID);
  const isActiveElement = _isActiveElement(PLUGINID);
  const unwrapElement = _unwrapElement(PLUGINID);
  const pluginOptions = {
    insertElement,
    getActiveElement,
    isActiveElement,
    unwrapElement,
  };

  slate.persistentHelpers.push((props) => (
    <LinkEditor {...props} pluginId={PLUGINID} {...pluginOptions} />
  ));

  return config;
}
