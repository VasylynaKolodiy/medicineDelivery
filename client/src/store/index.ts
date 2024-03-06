import {configureStore} from "@reduxjs/toolkit";
import {productsApi} from "./products/products.api";
import {productsReducer} from "./products/products.slice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    products: productsReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>