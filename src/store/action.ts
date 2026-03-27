import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../mocks/types';

export const setCity = createAction<string>('city/setCity');
export const setOffers = createAction<Offers>('offers/setOffers');
export const setSortType = createAction<string>('sort/setSortType');
