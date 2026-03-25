import { createReducer } from "@reduxjs/toolkit";
import { mockOffersList } from "../mocks/mockOffersList";
import { changeCity, setOffers } from "./action";
import { Offers } from "../mocks/types";

type InitialState = {
  city: string;
  offers: Offers;
};

const initialState: InitialState = {
  city: 'Amsterdam',
  offers: mockOffersList,
}

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity,(state, action) => {
      state.city = action.payload
    })
    .addCase(setOffers,(state, action) => {
      state.offers = action.payload
    })
})
