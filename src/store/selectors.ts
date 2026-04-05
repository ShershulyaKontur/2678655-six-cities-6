import { State } from './types';

export const getCity = (state: State) => state.city;

export const getSortType = (state: State) => state.sortType;

export const getOffers = (state: State) => state.offers;

export const getOffer = (state: State) => state.offer;

export const getNearbyOffers = (state: State) => state.nearbyOffers;

export const getReviews = (state: State) => state.reviews;

export const getOfferLoadingStatus = (state: State) => state.isOfferDataLoading;

export const getOffersLoadingStatus = (state: State) => state.isOffersDataLoading;

export const getReviewsLoadingStatus = (state: State) => state.isReviewsDataLoading;

export const getError = (state: State) => state.error;

export const getAuthStatus = (state: State) => state.authorizationStatus;
export const getEmail = (state: State) => state.email;
