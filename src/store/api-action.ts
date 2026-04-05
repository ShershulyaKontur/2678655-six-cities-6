import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from './types';
import axios, { AxiosInstance } from 'axios';
import { Offer, OfferNearbyList, Offers } from '../mocks/types';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const/const';
import { loadNearbyOffers, loadOffer, loadOffers, redirectToErrorPage, requireAuthorization, setEmail, setError, setOfferDataLoadingStatus, setOffersDataLoadingStatus } from './action';
import { deleteToken, setToken } from '../services/token';
import { AuthData, UserData } from '../types';
import { store } from '.';

export const clearErrorAction = createAsyncThunk(
  'offers/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOfferAction = createAsyncThunk<
  Offer,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/fetchOffer',
  async (offerId, { dispatch, extra: api }) => {
    dispatch(setOfferDataLoadingStatus(true));
    try {
      const response = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
      console.log('✅ API response:', response.data);

      // Диспатчим действие
      dispatch(loadOffer(response.data));

      // Добавьте принудительное обновление через return для createAsyncThunk
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        dispatch(redirectToErrorPage());
      } else {
        dispatch(setError('Не удалось загрузить данные об отеле'));
      }
      throw error;
    } finally {
      dispatch(setOfferDataLoadingStatus(false));
    }
  }
);

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
    try {
      const { data } = await api.get<Offers>(APIRoute.Offers);
      dispatch(loadOffers(data));
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        dispatch(redirectToErrorPage());
      } else {
        dispatch(setError('Не удалось загрузить список предложений'));
      }
    } finally {
      dispatch(setOffersDataLoadingStatus(false));
    }
  }
);

export const fetchNearbyOffersAction = createAsyncThunk<
  void,
  string,
  { extra: AxiosInstance }
>(
  'offer/fetchNearbyOffers',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferNearbyList>(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(loadNearbyOffers(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setEmail(data.email));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dispatch(setEmail(''));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    setToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    deleteToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
