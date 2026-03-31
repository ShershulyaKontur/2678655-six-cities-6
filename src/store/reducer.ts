import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, setCity, setOffersDataLoadingStatus, setSortType } from './action';
import { SortType } from '../components/sorting/types';
import { Offers } from '../mocks/types';

type initialStateProps ={
  city: string;
  sortType: SortType;
  offers: Offers;
  isOffersDataLoading: boolean;
}

const initialState : initialStateProps = {
  city: 'Paris',
  sortType: 'popular',
  offers: [],
  isOffersDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity,(state, action) => {
      state.city = action.payload;
    })
    .addCase(setSortType,(state, action) => {
      state.sortType = action.payload;
    })
    .addCase(loadOffers,(state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus,(state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});
