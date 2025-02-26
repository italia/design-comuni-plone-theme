import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccordionView from '../Accordion/View';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mock_fields = {
  '@type': 'accordion',
  lastChange: 1675245190157,
  subblocks: [
    {
      href: '/',
      id: '1675245121000',
      linkMoreTitle: 'Caught in a landside',
      text: {
        blocks: [
          {
            data: {},
            depth: 0,
            entityRanges: [],
            inlineStyleRanges: [],
            key: 'b6vem',
            text: 'Is this just fantasy',
            type: 'unstyled',
          },
        ],
        entityMap: {},
      },
      title: {
        blocks: [
          {
            data: {},
            depth: 0,
            entityRanges: [],
            inlineStyleRanges: [],
            key: '2ikdv',
            text: 'Accordion 1',
            type: 'unstyled',
          },
        ],
        entityMap: {},
      },
    },
  ],
};

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
});

test('View renders all fields', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <AccordionView data={mock_fields} />
      </MemoryRouter>
    </Provider>,
  );

  expect(screen.getByText(/Accordion 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Is this just fantasy/i)).toBeInTheDocument();
});
