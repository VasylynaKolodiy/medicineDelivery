
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