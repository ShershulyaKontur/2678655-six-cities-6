import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { mockOffersList } from './mocks/mockOffersList';
import { Provider } from 'react-redux';
import { store } from './store';

const cityOffersCount: number = mockOffersList.length;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={mockOffersList}
        cityOffersCount={cityOffersCount}
      />
    </Provider>
  </React.StrictMode>
);
