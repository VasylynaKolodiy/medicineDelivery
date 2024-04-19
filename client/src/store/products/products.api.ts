import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {IOrder, IProduct} from "../../models/Interfaces";
import { LIMIT } from '../../constants'

type FetchBaseQueryMeta = { request: Request; response?: Response }

const API_URL: string = import.meta.env.VITE_API_BASE_URL;

export const productsApi = createApi({
  reducerPath: 'products/Api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], void>({
      query: () => ({
        url: '/products',
      })
    }),
    getCategories: build.query<string[], void>({
      query: () => ({
        url: '/shops',
      })
    }),
    filterProductsByCategory: build.query<IProduct[], { catName: string; pageNumber: number }>({
      query: ({ catName, pageNumber }) => ({
        url: `/products?${catName ? `shop=${catName}` : ''}&limit=${LIMIT}&page=${pageNumber}`
      })
    }),
    getProductById: build.query<IProduct, { id: string }>({
      query: ({ id }) => ({
        url: `/products/${id}`
      }),
    }),
    saveOrder: build.mutation<void, { body: IOrder }>({
      query: (body) => ({
        url: 'orders',
        method: 'POST',
        body
      }),
    }),
    getOrders: build.query<void, { email: string | undefined }>({
      query: ({ email }) => ({
        url: `/orders?${email ? `email=${email}` : ''}`
      }),
    }),
  })
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductByIdQuery,
  useGetOrdersQuery,
  useFilterProductsByCategoryQuery,
  useSaveOrderMutation
} = productsApi;
