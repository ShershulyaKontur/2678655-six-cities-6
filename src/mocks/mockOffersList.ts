import { Offers } from "./types";

export const mockOffersList: Offers = [
  {
    id: "67318f9c-706d-44e2-9b27-0993a8306c51",
    title: "Canal View Prinsengracht",
    type: "hotel",
    price: 478,
    previewImage: "https://14.design.htmlacademy.pro/static/hotel/8.jpg",
    city: {
      name: "Paris",
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.5,
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 3,
    goods: ['Wi-Fi', 'Washing machine', 'Towels'],
    host: {
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    maxAdults: 4
  },
  {
   id: "a9d98153-0052-4c29-8aa6-03461af8eb4f",
    title: "The Joshua Tree House",
    type: "room",
    price: 102,
    previewImage: "https://14.design.htmlacademy.pro/static/hotel/15.jpg",
    city: {
      name: "Cologne",
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.6,
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 3,
    goods: ['Laptop friendly workspace', 'Breakfast'],
    host: {
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    images: ['img/apartment-02.jpg'],
    maxAdults: 4
  },
  {
    id: "a9b2a105-17e1-4a35-80f7-0f8790c2566e",
    title: "Loft Studio in the Central Area",
    type: "hotel",
    previewImage: "https://14.design.htmlacademy.pro/static/hotel/19.jpg",
    price: 187,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.6,
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 3,
    goods: ['Washer', 'Towels', 'Fridge'],
    host: {
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    images: ['img/apartment-03.jpg'],
    maxAdults: 4
  },
  {
    id: "15753ba9-61c2-4cd7-97bb-2e263d49c49b",
    title: "Perfectly located Castro",
    type: "hotel",
    price: 383,
    previewImage: "https://14.design.htmlacademy.pro/static/hotel/11.jpg",
    city: {
      name: "Amsterdam",
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.7,
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 3,
    goods: ['Washer', 'Towels', 'Fridge', 'Laptop friendly workspace', 'Breakfast'],
    host: {
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    images: ['img/apartment-03.jpg'],
    maxAdults: 4
  }
];
