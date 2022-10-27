import { TCartActionProps, ICartItemsState } from '../../../types/cartTypes';
import * as cartConfig from '../../config/cart'

const getTotal = (value: ICartItemsState[]) => {
    return value.map(x => x.price * x.quantity).reduce((a: number, b:number) => a + b, 0)
}

const initialState: {data: ICartItemsState[], total: number} = {
    data: [],
    total: 0
}


const cartReducer = (state = initialState, action: TCartActionProps) => {
    switch (action.type) {
        case cartConfig.INCREMENT_CART:
            const incrementedCartItems = state.data.map(cart_item => {
                if (cart_item.id === action.payload.id) { cart_item.quantity += 1 } return cart_item
            })
            return {
                ...state,
                data: incrementedCartItems
                // total: getTotal(incrementedCartItems)
            }
        case cartConfig.DECREMENT_CART:
            const decrementedCartItems = state.data.map(cart_item => {
                if (cart_item.id === action.payload.id && action.payload.quantity > 1 ) { cart_item.quantity -= 1 } return cart_item
            })
            return {
                ...state,
                data: decrementedCartItems
                // total: getTotal(decrementedCartItems)
            }
        case cartConfig.REMOVE_CART:
            const filteredCartItems = state.data.filter(cart_item => cart_item.id !== action.payload.id)
            return {
                ...state,
                data: filteredCartItems
                // total: getTotal(filteredCartItems)
            }
        case cartConfig.CLEAR_CART:
            return {
                ...state,
                data: [],
                total: 0
            }
        case cartConfig.LOAD_CART:
            return {
                ...state,
                data: action.payload
                // total: getTotal(action.payload)
            }
        case cartConfig.UPDATE_TOTAL:
            return {
                ...state,
                total: action.payload
            }
        default:
            return state;
    }
}

export default cartReducer;