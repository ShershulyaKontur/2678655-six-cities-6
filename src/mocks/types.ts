export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location: Location;
};

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Offer = OfferBase & {
  previewImage?: string;
  description?: string;
  bedrooms?: number;
  goods?: string[];
  host?: Host;
  images?: string[];
  maxAdults?: number;
};

export type OfferNearby = OfferBase & {previewImage: string};

export type Offers = Offer[];

export type OfferNearbyList = OfferNearby[];

export type Review = {
  id: string;
  date: string;
  user: Host;
  comment: string;
  rating: number;
}

export type Reviews = Review[];

type Type = 'hotel' | 'room' | 'apartment' | 'house';

type OfferBase = {
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


