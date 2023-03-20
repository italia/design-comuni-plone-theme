import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Body from '../Calendar/Body';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('design-comuni-plone-theme/components/ItaliaTheme/Icons/Icon');
jest.mock('@plone/volto/helpers/Loadable/Loadable');
beforeAll(
  async () =>
    await require('@plone/volto/helpers/Loadable/Loadable').__setLoadables(),
);

const mock_fields = {
  '@type': 'calendar',
  headline: 'She keeps her Moet et Chandon',
  headlineTag: 'h2',
  title: 'She keeps her Moet et Chandon',
  path: '/is-this-the-real-life',
};

const mock_path = '/is-this-the-real-life';
const mock_block = 'ccdb29ef-240b-4fc3-bba5-b07ca3340a6d';

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
  calendarSearch: {
    error: null,
    items: [],
    total: 0,
    loaded: false,
    loading: false,
    batching: {},
    subrequests: {
      'ccdb29ef-240b-4fc3-bba5-b07ca3340a6d': {
        error: null,
        items: ['2019/05/01', '2019/12/31', '2023/01/20', '2023/06/02'],
        loaded: true,
        loading: false,
        batching: {},
      },
    },
  },
});

test('View renders all fields', async () => {
  render(
    <Provider store={store}>
      <Body data={mock_fields} path={mock_path} id={mock_block} />
    </Provider>,
  );
});
