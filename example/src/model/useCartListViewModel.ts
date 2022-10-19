import { useAppDispatch, useAppSelector } from '../app/hooks';
import { decrement, increment, remove, selectCart, clear, cartTotal, update } from '../features/cart/cartSlice';
import { cartItemsState } from '../types/cartTypes';

export default function useCartListViewModel() {

    const useCartItemsSelector = useAppSelector(selectCart);
    const useGetTotal = useAppSelector(cartTotal);
    const dispatch = useAppDispatch();

    const incrementCart = (item: cartItemsState) => {
        dispatch(increment(item))
    }

    const decrementCart = (item: cartItemsState) => {
        dispatch(decrement(item))
    }

    const removeCart = (item: cartItemsState) => {
        dispatch(remove(item))
    }

    const clearCart = () => {
        dispatch(clear())
    }

    const updateCart = (data: cartItemsState[]) => {
        dispatch(update(data))
    }

    return {
        useCartItemsSelector,
        useGetTotal,
        dispatch,
        decrementCart,
        incrementCart,
        removeCart,
        clearCart,
        updateCart
    }
}