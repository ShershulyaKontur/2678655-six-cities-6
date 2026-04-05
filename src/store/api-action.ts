import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from './types';
import axios, { AxiosInstance } from 'axios';
import { Offer, OfferNearbyList, Offers, Reviews } from '../mocks/types';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const/const';
import { loadNearbyOffers, loadOffer, loadOffers, loadReviews, redirectToErrorPage, requireAuthorization, setEmail, setError, setOfferDataLoadingStatus, setOffersDataLoadingStatus, setReviewsDataLoadingStatus } from './action';
import { deleteToken, setToken } from '../services/token';
import { AuthData, UserData } from '../types';
import { store } from '.';
import { ReviewFormData } from '../components/review-form/review-form';

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
  void,
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
      dispatch(loadOffer(response.data));
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        dispatch(redirectToErrorPage());
      } else {
        dispatch(setError('Не удалось загрузить данные об отеле'));
      }
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
      dispatch(setError('Не удалось загрузить список предложений'));
    } finally {
      dispatch(setOffersDataLoadingStatus(false));
    }
  }
);

export const fetchNearbyOffersAction = createAsyncThunk<
  void,
  string,
  { dispatch: AppDispatch; extra: AxiosInstance }
>(
  'offer/fetchNearbyOffers',
  async (offerId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<OfferNearbyList>(`${APIRoute.Offers}/${offerId}/nearby`);
      dispatch(loadNearbyOffers(data));
    } catch (error) {
      dispatch(setError('Не удалось загрузить nearby предложения'));
    }
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
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
      setToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setEmail(email));
    } catch (error) {
      dispatch(setError('Неверный email или пароль'));
      throw error;
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.delete(APIRoute.Logout);
      deleteToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dispatch(setEmail(''));
    } catch (error) {
      dispatch(setError('Ошибка выхода'));
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'offer/fetchReviews',
  async (offerId, { dispatch, extra: api }) => {
    dispatch(setReviewsDataLoadingStatus(true));
    try {
      const { data } = await api.get<Reviews>(`${APIRoute.Comments}/${offerId}`);
      dispatch(loadReviews(data));
    } catch (error) {
      dispatch(setError('Не удалось загрузить отзывы'));
    } finally {
      dispatch(setReviewsDataLoadingStatus(false));
    }
  }
);

export const postReviewAction = createAsyncThunk<
  void,
  { offerId: string; reviewData: ReviewFormData },
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  'data/postReview',
  async ({ offerId, reviewData }, { dispatch, extra: api }) => {
    try {
      await api.post(`${APIRoute.Comments}/${offerId}`, {
        comment: reviewData.review,
        rating: reviewData.rating
      });

      const { data: reviews } = await api.get<Reviews>(`${APIRoute.Comments}/${offerId}`);
      dispatch(loadReviews(reviews));
    } catch (error) {
      dispatch(setError('Не удалось отправить отзыв'));
      throw error;
    }
  }
);
