import { createReducer } from '@reduxjs/toolkit';
import { mockOffersList } from '../mocks/mockOffersList';
import { setCity, setOffers } from './action';

const initialState = {
  city: 'Paris',
  offers: mockOffersList,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity,(state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers,(state, action) => {
      state.offers = action.payload;
    });
});
