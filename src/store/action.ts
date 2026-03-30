import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../mocks/types';
import { SortType } from '../components/sorting/types';

export const setCity = createAction<string>('city/setCity');
export const setOffers = createAction<Offers>('offers/setOffers');
export const setSortType = createAction<SortType>('sort/setSortType');
