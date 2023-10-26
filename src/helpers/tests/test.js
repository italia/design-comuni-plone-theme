export const initSlateTests = (config) => {
  window.getSelection = () => null;

  global.__SERVER__ = true; // eslint-disable-line no-underscore-dangle
  global.__CLIENT__ = false; // eslint-disable-line no-underscore-dangle

  beforeAll(() => {
    config.widgets = {
      id: {
        default: () => <div />,
      },
      type: {
        boolean: () => <div />,
      },
    };

    config.settings = {
      supportedLanguages: [],
      slate: {
        elements: {
          default: ({ attributes, children }) => (
            <p {...attributes}>{children}</p>
          ),
        },
        leafs: {},
        persistentHelpers: [],
        contextToolbarButtons: [],
        textblockExtensions: [],
        extensions: [],
        elementToolbarButtons: {},
        buttons: [],
        toolbarButtons: [],
        expandedToolbarButtons: [],
      },
    };
    config.blocks.blocksConfig.slate = {
      id: 'slate',
      title: 'Slate',
      group: 'text',
      edit: TextBlockEdit,
      restricted: false,
      mostUsed: false,
      blockHasOwnFocusManagement: true,
      sidebarTab: 1,
      security: {
        addPermission: [],
        view: [],
      },
      blockHasValue: (data) => {
        return !!data.plaintext;
      },
    };
  });
};
