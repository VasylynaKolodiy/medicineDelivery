import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct} from "../../models/Interfaces";
import {LIMIT} from '../../constants'

type FetchBaseQueryMeta = { request: Request; response?: Response }

export const productsApi = createApi({

  reducerPath: 'products/Api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5222/api',
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

    editBasket: build.mutation({
      query: (body) => ({
        url: `/users/${body.id}`,
        method: 'PATCH',
        body
      })
    }),

  })
})
export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useFilterProductsByCategoryQuery,
  useEditBasketMutation,
} = productsApi