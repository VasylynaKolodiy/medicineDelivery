import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IOrder } from "../../models/Interfaces";

interface InitialState {
  basket: IProduct[];
  history: IOrder[];
}

const initialState: InitialState = {
  basket: JSON.parse(localStorage.getItem('basket') || '[]'),
  history: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    editBasket(state, action: PayloadAction<IProduct>) {
      state.basket = action.payload;
      localStorage.setItem('basket', JSON.stringify(state.basket));
    },
    getOrders(state, action: PayloadAction<IOrder[]>) {
      state.history = action.payload;
    }
  }
});

export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
