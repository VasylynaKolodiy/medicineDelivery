import {IProduct} from "../models/Interfaces";
import BasketItem from "../components/BasketItem/BasketItem";
import Button from "@mui/material/Button";
import {useAppSelector} from "../hooks/redux";
import {useActions} from "../hooks/actions";

const Basket = () => {

  const basket = useAppSelector((state) => state.products.basket);
  const basketArr = Object.values(basket);
  const {editBasket} = useActions();

  let totalPrice = basketArr?.reduce((sum: number, elem: IProduct) => {
    return +sum + (+elem.quantity * +elem.price)
  }, 0);

  const handleOrderBasket = () => {

  }

  const handleCalculateCount = (sign, id) => {
    editBasket({
      ...basket,
      [id]: { ...basket[id], quantity: basket[id].quantity + sign }}
    )
  }
  const handleRemoveFromBasket = (id) => {
    const newBasket = {...basket};
    delete newBasket[id];
    editBasket(newBasket)
  }

  return (
    <div>
      {!!basketArr.length
        ? basketArr.map((product: IProduct) =>
          <BasketItem
            key={product._id}
            product={product}
            handleCalculateCount={handleCalculateCount}
            handleRemoveFromBasket={handleRemoveFromBasket}
          />)
        : <div>Your basket is empty</div>
      }
      <div className='dialogBasket__order'>
        <div className='dialogBasket__totalPrice'>
          Total price: {totalPrice?.toLocaleString('en')}$
        </div>

        <Button
          className="dialogBasket__buttonOrder"
          onClick={handleOrderBasket}
          variant="outlined"
          disabled={!totalPrice}
        >
          Order
        </Button>
      </div>
    </div>
  );
};

export default Basket;