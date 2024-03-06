import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../../models/Interfaces";

const initialState = {
  basket: JSON.parse(localStorage.getItem('basket') || '{}'),
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    editBasket(state, action: PayloadAction<IProduct>) {
      state.basket = action.payload
      localStorage.setItem('basket', JSON.stringify(state.basket))
    },
  }
})

export const productsActions = productsSlice.actions
export const productsReducer = productsSlice.reducer