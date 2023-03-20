import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import View from '../BandiSearch/View';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mock_fields = {
  '@type': 'searchBandi',
  filter_one: 'text_filter',
  filter_three: 'ente_filter',
  filter_two: 'tipologia_filter',
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
        <View data={mock_fields} />
      </MemoryRouter>
    </Provider>,
  );

  //barra di ricerca
  expect(
    screen.getByPlaceholderText(/Cerca per parola chiave/i),
  ).toBeInTheDocument();
  const selectFilters = document.getElementsByClassName('select-filter');
  expect(selectFilters).toHaveLength(2);

  //bottone di ricerca
  expect(screen.getByRole('button', { name: /Cerca/i })).toBeInTheDocument();
});
