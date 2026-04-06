import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { getToken } from './token';
import { processErrorHandle } from './process-error-handle';
import { DetailMessage } from '../shared/types';
import { StatusCodeMapping, TIMEOUT } from '../shared/const/const';

const URL = import.meta.env.VITE_API_URL;

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL:URL,
    timeout:TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['X-Token'] = token;
      }

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessage>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);
        processErrorHandle(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};

