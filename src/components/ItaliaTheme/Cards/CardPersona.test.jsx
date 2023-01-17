import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import CardPersona from './CardPersona';

const mockStore = configureStore();
const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
});

it('renders the title correctly', () => {
  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <CardPersona
          item={{
            '@id': 'http://localhost:3000/persona',
            title: 'Mario Rossi',
            id: 'persona',
          }}
        />
      </MemoryRouter>
    </Provider>,
  );

  expect(getByText('Mario Rossi')).toBeInTheDocument();
});
