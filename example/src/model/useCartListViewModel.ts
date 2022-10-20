import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decrementCart, incrementCart, reloadCart, removeCart }  from '../store/actions/cart'
import { cartItemsState } from '../types/cartTypes';

export default function useCartListViewModel() {

    const useCartSelector = useSelector((state: any) => state.cart.data);
    const useTotalSelector = useSelector((state: any) => state.cart.total);
    const dispatch = useDispatch();

    const increment = (item: cartItemsState) => {
        dispatch(incrementCart(item))
    }

    const decrement = (item: cartItemsState) => {
        dispatch(decrementCart(item))
    }
    
    const remove = (item: cartItemsState) => {
        dispatch(removeCart(item))
    }
    
    const clear = () => {
        dispatch(clearCart())
    }

    const reload = () => {
        dispatch(reloadCart())
    }
    return {
        useCartSelector,
        useTotalSelector,
        increment,
        decrement,
        remove,
        clear,
        reload
    }
}