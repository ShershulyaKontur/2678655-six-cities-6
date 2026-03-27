import { createReducer } from '@reduxjs/toolkit';
import { mockOffersList } from '../mocks/mockOffersList';
import { setCity, setOffers, setSortType } from './action';

const initialState = {
  city: 'Paris',
  sortType: 'Popular',
  offers: mockOffersList,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity,(state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers,(state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSortType,(state, action) => {
      state.sortType = action.payload;
    })
});
