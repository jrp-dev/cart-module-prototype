import React, { useEffect, useState } from "react";
export const CartList = () => {
    const [cartItems, setCartItems] = useState([]);
    const getCartItems = () => {
        setCartItems([{ id: 1, name: 'NY Cheese De Luxe + Bronx Pepperoni', quantity: 1, price: 120.00 }, { id: 2, name: 'Fluffy Pancake Chocolate Ala Mode', quantity: 1, price: 200.00 }, { id: 3, name: 'U.S. Spicy Chicken Sandwich Ala Carte', quantity: 1, price: 300.00 }]);
    };
    useEffect(() => {
        getCartItems();
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("p", null, cartItems.map(x => (React.createElement("p", null, x.name))))));
};
export default CartList;
