import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dates from '../Dates';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

jest.mock('design-comuni-plone-theme/components/ItaliaTheme/Icons/Icon');
jest.mock('@plone/volto/helpers/Loadable/Loadable');
beforeAll(
  async () =>
    await require('@plone/volto/helpers/Loadable/Loadable').__setLoadables(),
);

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// const mockStore = configureStore([]);
// const store = mockStoreù()

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
});

const mockdata = {
  start: '2023-01-20T09:00:00+00:00',
  end: '2023-01-20T09:00:00+00:00',
};

it('renders content', async () => {
  const { debug } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Dates content={mockdata} />
      </MemoryRouter>
    </Provider>,
  );

  debug();
  expect();
  // screen.getByText(/10:00/i, { exact: false })).toBeInTheDocument();
  // await screen.findByText('20', { exact: false }),
});
