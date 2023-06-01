import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RichText from '../RichText';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureStore([]);

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
});

it('renders content', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <RichText
          data={{
            blocks: {
              'c3aac6c5-b8d9-48b7-bc01-a7211248548b': {
                '@type': 'text',
                text: {
                  blocks: [
                    {
                      data: {},
                      depth: 0,
                      entityRanges: [],
                      inlineStyleRanges: [],
                      key: 'e0m83',
                      text: 'Un mega evento con delle mega iniziative',
                      type: 'unstyled',
                    },
                  ],
                  entityMap: {},
                },
              },
            },
            blocks_layout: {
              items: ['c3aac6c5-b8d9-48b7-bc01-a7211248548b'],
            },
          }}
        />
      </MemoryRouter>
    </Provider>,
  );

  expect(
    screen.getByText('Un mega evento con delle mega iniziative'),
  ).toBeInTheDocument();
});
