import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StoresButtons from '../HeroImageLeft/StoresButtons';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mock_fields = {
  '@type': 'hero',
  appStoreLink: '/',
  moreHref: 'http://localhost:3000/argomenti',
  moreTitle: 'She spoke just like a baroness',
  playStoreLink: '/',
  show_block_bg: true,
  title: '',
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
        <StoresButtons data={mock_fields} />
      </MemoryRouter>
    </Provider>,
  );

  //link ad altro
  expect(
    screen.getByText(/She spoke just like a baroness/i),
  ).toBeInTheDocument();

  //app store link
  expect(screen.getByRole('link', { name: /App store/i }));
  //play store link
  expect(screen.getByRole('link', { name: /Play store/i }));
});
