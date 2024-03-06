import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct} from "../../models/Interfaces";
import {LIMIT} from '../../constants'

type FetchBaseQueryMeta = { request: Request; response?: Response }

const API_URL = import.meta.env.VITE_API_BASE_URL

export const productsApi = createApi({

  reducerPath: 'products/Api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),

  endpoints: build => ({

    getProducts: build.query({
      query: () => ({
        url: '/products',
      })
    }),
    getCategories: build.query({
      query: () => ({
        url: '/shops',
      })
    }),
    filterProductsByCategory: build.query({
      query: ({catName, pageNumber}) => ({
        url: `/products?${catName ? `shop=${catName}` : ''}&limit=${LIMIT}&page=${pageNumber}`
      }),

      transformResponse(response: IProduct[], meta: FetchBaseQueryMeta) {
        return {data: response, totalCount: (meta.response?.headers.get('X-Total-Count'))}
      }
    }),

  })
})
export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useFilterProductsByCategoryQuery,
} = productsApi