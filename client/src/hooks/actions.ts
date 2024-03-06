import {useDispatch} from "react-redux";
import { bindActionCreators } from 'redux'
import {productsActions} from "../store/products/products.slice";

const actions = {
  ...productsActions
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}