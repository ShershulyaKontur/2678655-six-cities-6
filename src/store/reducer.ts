import { createReducer } from '@reduxjs/toolkit';
import { loadNearbyOffers, loadOffer, loadOffers, loadReviews, redirectToErrorPage, requireAuthorization, setCity, setEmail, setError, setOfferDataLoadingStatus, setOffersDataLoadingStatus, setReviewsDataLoadingStatus, setSortType } from './action';
import { SortType } from '../features/offers/types';
import { Offer, OfferNearbyList, Offers, Reviews } from '../shared/types';
import { AuthStatus } from '../app/types';
import { AuthorizationStatus } from '../shared/const';

type initialStateProps = {
  city: string;
  sortType: SortType;
  offers: Offers;
  offer: Offer | null;
  reviews: Reviews;
  nearbyOffers: OfferNearbyList;
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  isReviewsDataLoading: boolean;
  authorizationStatus: AuthStatus;
  email: string;
  error: string | null;
};

const initialState: initialStateProps = {
  city: 'Paris',
  sortType: 'popular',
  offers: [],
  offer: null,
  reviews:[],
  nearbyOffers: [],
  isReviewsDataLoading: false,
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
    .addCase(loadReviews,(state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setOffersDataLoadingStatus,(state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setOfferDataLoadingStatus,(state, action) => {
      state.isOfferDataLoading = action.payload;
    })
    .addCase(setReviewsDataLoadingStatus,(state, action) => {
      state.isReviewsDataLoading = action.payload;
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
