/**
 * Customizzato
 * - customizzato per cambiare gli import dei link per poterli customizzare
 */
import decorateComponentWithProps from 'decorate-component-with-props';

import DefaultLink from '@italia/config/RichTextEditor/Plugins/AnchorPlugin/components/Link';
import LinkButton from '@italia/config/RichTextEditor/Plugins/AnchorPlugin/components/LinkButton';
import linkStrategy, {
  matchesEntityType,
} from '@plone/volto/components/manage/AnchorPlugin/linkStrategy';

function unboundRemoveEntity(editorState) {
  const contentState = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();
  const startKey = selectionState.getStartKey();
  const contentBlock = contentState.getBlockForKey(startKey);
  const startOffset = selectionState.getStartOffset();
  const entity = contentBlock.getEntityAt(startOffset);

  if (!entity) {
    return editorState;
  }

  let entitySelection = null;

  contentBlock.findEntityRanges(
    (character) => character.getEntity() === entity,
    (start, end) => {
      entitySelection = selectionState.merge({
        anchorOffset: start,
        focusOffset: end,
        isBackward: false,
      });
    },
  );

  const newContentState = this.Modifier.applyEntity(
    contentState,
    entitySelection,
    null,
  );

  const newEditorState = this.EditorState.push(
    editorState,
    newContentState,
    'apply-entity',
  );

  return newEditorState;
}

export default (config = {}) => {
  // ToDo: Get rif of the remainings of having the original CSS modules
  const defaultTheme = {};

  const {
    theme = defaultTheme,
    placeholder,
    Link,
    linkTarget,
    libraries,
  } = config;

  const removeEntity = unboundRemoveEntity.bind(libraries);

  return {
    decorators: [
      {
        strategy: linkStrategy,
        matchesEntityType,
        component:
          Link ||
          decorateComponentWithProps(DefaultLink, {
            className: 'link-anchorlink-theme',
            target: linkTarget,
          }),
      },
    ],

    LinkButton: decorateComponentWithProps(LinkButton, {
      ownTheme: theme,
      placeholder,
      onRemoveLinkAtSelection: (setEditorState, getEditorState) =>
        setEditorState(removeEntity(getEditorState())),
    }),
  };
};
