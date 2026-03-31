import axios, { AxiosInstance } from 'axios';

const URL = import.meta.env.VITE_API_URL;
const TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL:URL,
    timeout:TIMEOUT
  });
  return api
}
