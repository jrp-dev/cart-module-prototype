import { cartAction, cartItemsState } from '../../../types/cartTypes';
import * as cartConfig from '../../config/cart'

const cart_items = [{id: 1, name: 'Welsh Rabbit', quantity: 1, price: 120.00}, {id: 2, name: 'Rocky Mountain Oysters', quantity: 1, price: 200.00}, {id: 3, name: 'Boston Cream Pie', quantity: 1, price: 300.00}]

const getTotal = (value: cartItemsState[]) => {
    return value.map(x => x.price * x.quantity).reduce((a: number, b:number) => a + b, 0)
}

const initialState = {
    data: cart_items,
    total: getTotal(cart_items)
}


const cartReducer = (state = initialState, action: cartAction) => {
    switch (action.type) {
        case cartConfig.INCREMENT_CART:
            const incrementData = state.data.map(cart_item => {
                if (cart_item.id === action.payload.id) { cart_item.quantity += 1 } return cart_item
            })
            return {
                ...state,
                data: incrementData,
                total: getTotal(incrementData)
            }
        case cartConfig.DECREMENT_CART:
            const decrementData = state.data.map(cart_item => {
                if (cart_item.id === action.payload.id && action.payload.quantity > 1 ) { cart_item.quantity -= 1 } return cart_item
            })
            return {
                ...state,
                data: decrementData,
                total: getTotal(decrementData)
            }
        case cartConfig.REMOVE_CART:
            const removeData = state.data.filter(cart_item => cart_item.id !== action.payload.id)
            return {
                ...state,
                data: removeData,
                total: getTotal(removeData)
            }
        case cartConfig.CLEAR_CART:
            return {
                ...state,
                data: [],
                total: 0
            }
        case cartConfig.RELOAD_CART:
            const reloadData = cart_items.map(cart_item => { return {...cart_item, quantity: 1 }})
            return {
                ...state,
                data: reloadData,
                total: getTotal(reloadData)
            }
        default:
            return state;
    }
}

export default cartReducer;