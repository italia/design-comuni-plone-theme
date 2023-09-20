import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Block from '../TextCard/SimpleCard/Block';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mock_fields = {
  '@type': 'testo_riquadro_semplice',
  simple_card_content: {
    blocks: [
      {
        data: {},
        depth: 0,
        entityRanges: [],
        inlineStyleRanges: [],
        key: 'a898u',
        text: 'Is this just fantasy?',
        type: 'unstyled',
      },
    ],
    entityMap: {},
  },
  simple_card_title: {
    blocks: [
      {
        data: {},
        depth: 0,
        entityRanges: [],
        inlineStyleRanges: [],
        key: '23dhi',
        text: 'Is this the real life?',
        type: 'unstyled',
      },
    ],
    entityMap: {},
  },
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
        <Block data={mock_fields} block={{ id: '1234' }} />
      </MemoryRouter>
    </Provider>,
  );

  //titolo
  expect(
    screen.getByRole('heading', { name: /Is this the real life?/i }),
  ).toBeInTheDocument();

  //descrizione
  expect(screen.getByText(/Is this just fantasy?/i)).toBeInTheDocument();
});
