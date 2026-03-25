import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../mocks/types';

export const changeCity = createAction<string>('city/changeCity');
export const setOffers = createAction<Offers>('offers/setOffer');
