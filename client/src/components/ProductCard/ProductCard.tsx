import {Link} from "react-router-dom";
import './ProductCard.scss';
import {IProduct} from "../../models/Interfaces";
import {FC} from "react";
import {Button} from "@mui/material";
import {useAppSelector} from "../../hooks/redux";
import InBasketIcon from "../../assets/basket-order.svg?react";
import {useActions} from "../../hooks/actions";


interface IProductCardProps {
  product: IProduct,
  setCatName: (name: string) => void,
  setPageNumber: (page: number) => void,
}

const ProductCard: FC<IProductCardProps> = ({product, setCatName, setPageNumber}) => {

  const basket = useAppSelector((state) => state.products.basket);
  const {editBasket} = useActions()

  const onClickCategory = (category: string) => {
    setPageNumber(1);
    setCatName(category)
  }

  const handleAddToBasket = () => {
    editBasket(({...basket, [product._id]: {...product, quantity: 1}}) )
  }

  return (
    <div className='productCard'>

      <div className='productCard__images'>
        <img className='productCard__image' src={product?.image} alt={product?.title}/>
        <Link className='productCard__link' to={`/${product._id}`}/>
      </div>

      <div className='productCard__inner'>
        <div className='productCard__info'>
          <div className='productCard__title'>{product.title}</div>
          <div className='productCard__price'>{product.price.toLocaleString('en')}$</div>
        </div>

        {!basket.hasOwnProperty(product._id)
          ? (<Button
            className='productPage__buyButton'
            variant="outlined"
            onClick={handleAddToBasket}
          >
            Add to basket
          </Button>)
          : <Link to='/basket' className='productCard__inBasket'>
            <InBasketIcon />
            <div>Already in the basket</div>
          </Link>
        }

      </div>
    </div>
  );
};

export default ProductCard;