export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:offerId',
  Main = '/',
  Error = '*'
}

export enum APIRoute {
  Offers = '/offers',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH'
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
