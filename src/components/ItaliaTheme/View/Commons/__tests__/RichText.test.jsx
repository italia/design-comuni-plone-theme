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
              '77317d1d-92a1-4e94-946c-f00647c71f32': {
                '@type': 'slate',
                plaintext: 'Un mega evento con delle mega iniziative',
                value: [
                  {
                    children: [
                      {
                        text: 'Un mega evento con delle mega iniziative',
                      },
                    ],
                    type: 'p',
                  },
                ],
              },
            },
            blocks_layout: {
              items: ['77317d1d-92a1-4e94-946c-f00647c71f32'],
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
