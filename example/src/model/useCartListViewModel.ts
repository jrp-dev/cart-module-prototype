import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decrementCart, loadCart, incrementCart, reloadCart, removeCart }  from '../store/actions/cart'
import { ICartItemsState } from '../types/cartTypes';

export default function useCartListViewModel() {

    const cartItems = useSelector((state: any) => state.cart.data);
    const total = useSelector((state: any) => state.cart.total);
    const dispatch = useDispatch();

    const load = (item: ICartItemsState[]) => {
        dispatch(loadCart(item))
    }

    const increment = (item: ICartItemsState) => {
        dispatch(incrementCart(item))
    }

    const decrement = (item: ICartItemsState) => {
        dispatch(decrementCart(item))
    }
    
    const remove = (item: ICartItemsState) => {
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