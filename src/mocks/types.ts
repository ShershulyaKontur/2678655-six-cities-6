export type Location = {
  latitude: number,
  longitude: number,
  zoom: number
}
export type City = {
  name: string;
  location: Location;
}

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

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

export type Offer = OfferBase & {
  previewImage?: string;
  description?: string;
  bedrooms?: number;
  goods?: string[];
  host?: Host;
  images?: string[];
  maxAdults?: number;
};

export type Offers = Offer[];
