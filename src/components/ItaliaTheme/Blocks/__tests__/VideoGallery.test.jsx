import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import View from '../VideoGallery/Body';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mock_fields = {
  '@type': 'video_gallery',
  allowExternals: false,
  channel_link: 'https://www.youtube.com/channel/UC4pMCEXGlQta-oiG2gAL2Vw',
  channel_link_title: 'Tananai',
  lastChange: 1675939483747,
  subblocks: [
    {
      id: '1675939383372',
      title: 'Baby Goddamn',
      url: 'https://www.youtube.com/watch?v=PLin7dzqk_w',
    },
    {
      id: '1675939463002',
      title: 'Tango',
      url: 'https://www.youtube.com/watch?v=C7ckx1gbDH0',
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
        <View data={mock_fields} />
      </MemoryRouter>
    </Provider>,
  );

  //reactSlick non renderizza
});
