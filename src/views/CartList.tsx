import React, { useEffect, useState } from "react";
import { cartItemsState } from "../types/cartTypes";

export const CartList = () => {
    const [cartItems, setCartItems] = useState<cartItemsState[]>([]);
    
    const getCartItems = () => {
        setCartItems([{id: 1, name: 'NY Cheese De Luxe + Bronx Pepperoni', quantity: 1, price: 120.00}, {id: 2, name: 'Fluffy Pancake Chocolate Ala Mode', quantity: 1, price: 200.00}, {id: 3, name: 'U.S. Spicy Chicken Sandwich Ala Carte', quantity: 1, price: 300.00}])
    }
    
    useEffect(() => {
        getCartItems()
    }, [])

    return (
        <>
            <p>{cartItems.map(x => (
                <p>{x.name}</p>
            ))}</p>
        </>
    )
}

export default CartList