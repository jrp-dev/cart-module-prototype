import { cartItemsState } from '../../../types/cartTypes';
import * as cartConfig from '../../config/cart';

export const loadCart = (payload: cartItemsState[]) => {
  return {
    type: cartConfig.LOAD_CART,
    payload
  };
};

export const incrementCart = (payload: cartItemsState) => {
  return {
    type: cartConfig.INCREMENT_CART,
    payload
  };
};

export const decrementCart = (payload: cartItemsState) => {
  return {
    type: cartConfig.DECREMENT_CART,
    payload
  };
};

export const removeCart = (payload: cartItemsState) => {
  return {
    type: cartConfig.REMOVE_CART,
    payload
  };
};

export const clearCart = () => {
  return {
    type: cartConfig.CLEAR_CART
  };
};

export const reloadCart = () => {
  return {
    type: cartConfig.RELOAD_CART
  };
};
