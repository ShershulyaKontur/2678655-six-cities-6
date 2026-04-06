import type { Host, City, Type, Location } from './common';

export type Offer = OfferBase & {
  previewImage?: string;
  description?: string;
  bedrooms?: number;
  goods?: string[];
  host?: Host;
  images?: string[];
  maxAdults?: number;
};

export type OfferBase = {
  id: string;
  title: string;
  type: Type;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type OfferNearby = OfferBase & {previewImage: string};

export type Offers = Offer[];

export type OfferNearbyList = OfferNearby[];
