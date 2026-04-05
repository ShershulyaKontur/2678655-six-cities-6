import { createAction } from '@reduxjs/toolkit';
import { Offer, OfferNearbyList, Offers } from '../mocks/types';
import { SortType } from '../components/sorting/types';
import { AuthorizationStatus } from '../const/const';

export const setCity = createAction<string>('city/setCity');
export const setSortType = createAction<SortType>('sort/setSortType');

export const setOffers = createAction<Offers>('offers/setOffers');
export const loadOffers = createAction<Offers>('data/loadOffers');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const loadOffer = createAction<Offer>('data/loadOffer');
export const setOfferDataLoadingStatus = createAction<boolean>('data/setOfferDataLoadingStatus');
export const redirectToErrorPage = createAction('app/redirectToErrorPage');

export const loadNearbyOffers = createAction<OfferNearbyList>('data/loadNearbyOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setEmail = createAction<string>('user/setEmail');

export const setError = createAction<string | null>('offers/setError');
