import './BasketItem.scss'
import PlusIcon from "../../assets/plus.svg?react";
import MinusIcon from "../../assets/minus.svg?react";
import BinIcon from "../../assets/bin.svg?react";
import {Button} from "@mui/material";
import {IProduct} from "../../models/Interfaces";

interface IBasketItemProps {
  product: IProduct;
  handleCalculateCount: (number: number, _id: number) => void;
  handleRemoveFromBasket: (_id: number) => void;
}


const BasketItem: React.FC<IBasketItemProps> = ({product, handleCalculateCount, handleRemoveFromBasket}) => {

    return (
      <div className="basketItem">
        <div className="basketItem__image">
          <img src={product.image} alt={product.title}/>
        </div>
        <div className="basketItem__info">
          <div className="basketItem__title">
            <h3>{product.title}</h3>
          </div>

          <div className="basketItem__wrapper">
            <div className="basketItem__counter">
              <Button
                className="basketItem__plus"
                onClick={() => handleCalculateCount(1, product._id)}
              >
                <PlusIcon/>
              </Button>

              <input
                className="basketItem__input"
                type="text"
                value={product.quantity}
                min={1}
                readOnly={true}
              />

              <Button
                className="basketItem__minus"
                disabled={product.quantity <= 1}
                onClick={() => handleCalculateCount(-1, product._id)}
              >
                <MinusIcon/>
              </Button>
            </div>
            <div className="basketItem__price">
              {(product.price * product.quantity).toLocaleString('en')}₴
            </div>
            <div className="basketItem__bin" onClick={() => handleRemoveFromBasket(product._id)}>
              <BinIcon/>
            </div>
          </div>
        </div>
      </div>
    );
  }
;

export default BasketItem;