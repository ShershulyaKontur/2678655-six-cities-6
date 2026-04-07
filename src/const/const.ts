import { StatusCodes } from 'http-status-codes';
import { SortType } from '../features/offers/types';

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:offerId',
  Main = '/',
  Error = '*',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

export const SORT_OPTIONS: { type: SortType; label: string }[] = [
  { type: 'popular', label: 'Popular' },
  { type: 'priceLowToHigh', label: 'Price: low to high' },
  { type: 'priceHighToLow', label: 'Price: high to low' },
  { type: 'topRated', label: 'Top rated first' },
];


export const TIMEOUT_SHOW_ERROR = 2000;
export const TIMEOUT = 5000;

export const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const DEFAULT_LOCATIONS: string[] =
['Paris', 'Cologne', 'Brussels','Amsterdam', 'Hamburg', 'Dusseldorf'];
