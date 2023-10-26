import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import View from '../ContactsBlock/View';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mock_fields = {
  '@type': 'contacts',
  bg_color: 'primary',
  description: [
    {
      children: [
        {
          text: 'Let them eat cake',
        },
      ],
      type: 'p',
    },
  ],
  href: 'http://localhost:3000/eventi',
  lastChange: 1675330752814,
  linkMoreTitle: 'Extraordinarily nice',
  subblocks: [
    {
      email: [
        {
          children: [
            {
              text: 'For Khrushchev and Kennedy',
            },
          ],
          type: 'p',
        },
      ],

      id: '1675328833526',
      tel: [
        {
          children: [
            {
              text: 'A built-in remedy',
            },
          ],
          type: 'p',
        },
      ],
      text: [
        {
          children: [
            {
              text: 'Just like Mary Antoinette',
            },
          ],
          type: 'p',
        },
      ],
      title: 'She said',
    },
    {
      email: [
        {
          children: [
            {
              text: 'Well versed in etiquette',
            },
          ],
          type: 'p',
        },
      ],
      id: '1675330720693',
      tel: [
        {
          children: [
            {
              text: 'Caviar and cigarettes',
            },
          ],
          type: 'p',
        },
      ],

      text: [
        {
          children: [
            {
              text: "You can't decline",
            },
          ],
          type: 'p',
        },
      ],
      title: 'At anytime an invitation',
    },
  ],
  title: 'In her pretty cabinet',
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

  //sfondo blocco
  const blocco = document.querySelector('.full-width.section.py-5');
  expect(blocco).toHaveClass('full-width section bg-primary py-5');

  //title
  expect(screen.getByText(/In her pretty cabinet/i)).toBeInTheDocument();

  //descrizione
  expect(screen.getByText(/Let them eat cake/i)).toBeInTheDocument();

  //titolo card
  expect(screen.getByText(/She said/i)).toBeInTheDocument();
  expect(screen.getByText(/At anytime an invitation/i)).toBeInTheDocument();
  //testo card
  expect(screen.getByText(/Just like Mary Antoinette/i)).toBeInTheDocument();
  expect(screen.getByText(/You can't decline/i)).toBeInTheDocument();
  //numero telefono
  expect(screen.getByText(/A built-in remedy/i)).toBeInTheDocument();
  expect(screen.getByText(/Caviar and cigarettes/i)).toBeInTheDocument();
  //email
  expect(screen.getByText(/For Khrushchev and Kennedy/i)).toBeInTheDocument();
  expect(screen.getByText(/Well versed in etiquette/i)).toBeInTheDocument();

  //link ad altro
  expect(
    screen.getByRole('link', { name: /Extraordinarily nice/i }),
  ).toBeInTheDocument();
});
