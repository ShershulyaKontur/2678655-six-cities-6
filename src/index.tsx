import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { mockOffersList } from './mocks/mockOffersList';

const cityOffersCount: number = 5;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers={mockOffersList}
      cityOffersCount={cityOffersCount}
    />
  </React.StrictMode>
);
