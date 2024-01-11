/*Customized LinkEditor to:
- handle data-element
- enhance link (enhanced_link_infos)
*/
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactEditor } from 'slate-react';
import { Transforms } from 'slate';
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
import { simpleLinkDeserializer } from 'design-comuni-plone-theme/config/Slate/Link/deserializer';
const LinkEditor = (props) => {
  const { editor, pluginId, getActiveElement, unwrapElement, insertElement } =
    props;
  const pid = `${editor.uid}-${pluginId}`;
  const showEditor = useSelector((state) => {
    return state['slate_plugins']?.[pid]?.show_sidebar_editor;
  });
  const savedPosition = React.useRef();
  const rect = useSelectionPosition();

  const dispatch = useDispatch();

  const active = getActiveElement(editor);
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
        onChangeValue={(url, dataElement, item) => {
          let enhanced_link_infos = null;
          if (item && item.enhanced_links_enabled) {
            enhanced_link_infos = {};
            enhanced_link_infos['content-type'] = item.mime_type;
            enhanced_link_infos.size = item.getObjSize;
          }
          if (!active) {
            if (!editor.selection) editor.selection = editor.savedSelection;
            insertElement(editor, { url, dataElement, enhanced_link_infos });
          } else {
            const selection = unwrapElement(editor);
            editor.selection = selection;
            insertElement(editor, { url, dataElement, enhanced_link_infos });
          }
          // ReactEditor.focus(editor);

          dispatch(setPluginOptions(pid, { show_sidebar_editor: false }));
          savedPosition.current = null;

          ReactEditor.deselect(editor);
          Transforms.collapse(editor, { edge: 'end' });
          Transforms.insertText(editor, ' ');
        }}
        onClear={() => {
          // clear button was pressed in the link edit popup
          try {
            const newSelection = JSON.parse(
              JSON.stringify(unwrapElement(editor)),
            );
            editor.selection = newSelection;
            editor.savedSelection = newSelection;
          } catch (e) {
            //do nothing when no link was setted yet, and you clear the select item to link
          }
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
  //remove Volto helper link to add custom helper link
  slate.persistentHelpers = slate.persistentHelpers.filter(
    (h) => h().props.pluginId !== 'link',
  );
  slate.persistentHelpers.push((props) => (
    <LinkEditor {...props} pluginId={PLUGINID} {...pluginOptions} />
  ));
  slate.htmlTagsToSlate.A = simpleLinkDeserializer;

  return config;
}
