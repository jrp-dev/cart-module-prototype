import { ICartItemsState } from '../../../types/cartTypes';
import * as cartConfig from '../../config/cart';

export const loadCart = (payload: ICartItemsState[]) => {
  return {
    type: cartConfig.LOAD_CART,
    payload
  };
};

export const incrementCart = (payload: ICartItemsState) => {
  return {
    type: cartConfig.INCREMENT_CART,
    payload
  };
};

export const decrementCart = (payload: ICartItemsState) => {
  return {
    type: cartConfig.DECREMENT_CART,
    payload
  };
};

export const removeCart = (payload: ICartItemsState) => {
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

export const updateTotal = (payload: number) => {
  return {
    type: cartConfig.UPDATE_TOTAL,
    payload
  };
};
