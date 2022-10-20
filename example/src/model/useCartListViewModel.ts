import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decrementCart, loadCart, incrementCart, reloadCart, removeCart }  from '../store/actions/cart'
import { cartItemsState } from '../types/cartTypes';

export default function useCartListViewModel() {

    const cartItems = useSelector((state: any) => state.cart.data);
    const total = useSelector((state: any) => state.cart.total);
    const dispatch = useDispatch();

    const load = (item: cartItemsState[]) => {
        dispatch(loadCart(item))
    }

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
        cartItems,
        load,
        total,
        increment,
        decrement,
        remove,
        clear,
        reload
    }
}