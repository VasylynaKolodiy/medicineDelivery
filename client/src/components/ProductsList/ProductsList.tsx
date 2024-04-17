import {FC} from 'react';
import {IProduct} from '../../models/Interfaces';
import ProductCard from "../ProductCard/ProductCard";
import './ProductsList.scss'

interface IProductList {
  productsState: IProduct[],
  setCatName: (name: string) => void,
  setPageNumber: (page: number) => void,
}

const ProductsList: FC<IProductList>  = ({productsState, setCatName, setPageNumber}) => {
  return (
    <section className='productsList'>
      {productsState.length > 0
        ? productsState?.map((product: IProduct) =>
        <ProductCard
          product={product}
          setCatName={setCatName}
          setPageNumber={setPageNumber}
          key={product._id}
        />
      )
        : <div className='productCard'><h4>There are no products</h4></div>
      }
    </section>
  );
};

export default ProductsList;