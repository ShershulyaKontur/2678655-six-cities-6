import { createReducer } from '@reduxjs/toolkit';
import { loadNearbyOffers, loadOffer, loadOffers, redirectToErrorPage, requireAuthorization, setCity, setEmail, setError, setOfferDataLoadingStatus, setOffersDataLoadingStatus, setSortType } from './action';
import { SortType } from '../components/sorting/types';
import { Offer, OfferNearbyList, Offers } from '../mocks/types';
import { AuthorizationStatus } from '../const/const';
import { AuthStatus } from '../types';

type initialStateProps ={
  city: string;
  sortType: SortType;
  offers: Offers;
  offer: Offer | null;
  nearbyOffers: OfferNearbyList,
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  authorizationStatus: AuthStatus;
  email: string;
  error: string | null;
}

const initialState : initialStateProps = {
  city: 'Paris',
  sortType: 'popular',
  offers: [],
  offer: null,
  nearbyOffers: [],
  isOffersDataLoading: false,
  isOfferDataLoading: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  email: ''
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
    .addCase(loadOffer,(state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadNearbyOffers,(state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus,(state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setOfferDataLoadingStatus,(state, action) => {
      state.isOfferDataLoading = action.payload;
    })
    .addCase(redirectToErrorPage, (state) => {
      state.error = 'offer-not-found/404';
    })
    .addCase(requireAuthorization,(state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setEmail,(state, action) => {
      state.email = action.payload;
    })
    .addCase(setError,(state, action) => {
      state.error = action.payload;
    });
});
