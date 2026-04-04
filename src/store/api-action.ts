import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from './types';
import { AxiosInstance } from 'axios';
import { Offers } from '../mocks/types';
import { APIRoute } from '../const/const';
import { loadOffers, setOffersDataLoadingStatus } from './action';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);
