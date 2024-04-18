import {IProduct} from "../models/Interfaces";
import BasketItem from "../components/BasketItem/BasketItem";
import Button from "@mui/material/Button";
import {useAppSelector} from "../hooks/redux";
import {useActions} from "../hooks/actions";
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";
import {useRef, useState} from "react";
import './Basket.scss'
import {useSaveOrderMutation} from "../store/products/products.api";

const Basket = () => {

  const basket = useAppSelector((state) => state.products.basket);
  const basketArr = Object.values(basket);
  const {editBasket} = useActions();
  const [saveOrder] = useSaveOrderMutation();
  const submitForm = useRef(null);
  const initialFields = {
    name: '',
    email: '',
    phone: '',
    address: ''
  }

  const [state, setState] = useState(initialFields);

  let totalPrice = basketArr?.reduce((sum: number, elem: IProduct) => {
    return +sum + (+elem.quantity * +elem.price)
  }, 0);

  const handleOrderBasket = async () => {
    await saveOrder({
      user: state,
      products: basketArr,
      total: totalPrice
    });
    editBasket({});
    setState(initialFields)
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

  const onHandleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value});
  }
  
  return (
    <div className='basket'>
      <ValidatorForm className='basket__form form' onSubmit={handleOrderBasket}>
        <div className='form__item'>
          <h3>Name</h3>
          <TextValidator
            value={state.name}
            name='name'
            type="text"
            placeholder='Name'
            variant="outlined"
            onChange={onHandleChange}
            validators={['required']}
            errorMessages={['This field is required']}
          />
        </div>
        <div className='form__item'>
          <h3>Email</h3>
          <TextValidator
            value={state.email}
            name='email'
            type="text"
            placeholder='Email'
            variant="outlined"
            onChange={onHandleChange}
            validators={['required']}
            errorMessages={['This field is required']}
          />
        </div>
        <div className='form__item'>
          <h3>Phone</h3>
          <TextValidator
            value={state.phone}
            name='phone'
            type="number"
            placeholder='Phone'
            variant="outlined"
            onChange={onHandleChange}
            validators={['required']}
            errorMessages={['This field is required']}
          />
        </div>
        <div className='form__item'>
          <h3>Address</h3>
          <TextValidator
            value={state.address}
            name='address'
            type="text"
            placeholder='Address'
            variant="outlined"
            onChange={onHandleChange}
            validators={['required']}
            errorMessages={['This field is required']}
          />
        </div>
        <input type="submit" ref={submitForm} hidden/>
      </ValidatorForm>
      <div className='basket__items'>
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
      </div>
      <div className='dialogBasket__order'>
        <div className='dialogBasket__totalPrice'>
          Total price: {totalPrice?.toLocaleString('en')}₴
        </div>

        <Button
          className="dialogBasket__buttonOrder"
          onClick={() => submitForm?.current.click()}
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