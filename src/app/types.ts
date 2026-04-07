import { AuthorizationStatus } from '../const';

export type Token = string;

export type AuthStatus = AuthorizationStatus.Auth | AuthorizationStatus.NoAuth | AuthorizationStatus.Unknown;

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  id: number;
  email: string;
  token: Token;
};

