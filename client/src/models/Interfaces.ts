import {productSchema} from "../../../api/models/Order";

export interface IProduct {
  _id: number,
  title: string,
  price: number,
  description: string,
  shop: string,
  image: string,
  quantity?: number,
}

export interface ICategories {
  _id: number,
  name: string,
}

export interface IUser {
  _id: number,
  address: string,
  email: string,
  name: string,
  phone: string
}

export interface IOrder {
  _id: number,
  user: IUser,
  products: IProduct[],
  total: Number
}