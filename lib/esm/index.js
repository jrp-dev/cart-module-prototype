import React from "react";
import CartList from "./views/CartList";
const CartComponent = (props) => {
    return (React.createElement(CartList, { data: props.data, keyProp: props.keyProp, titleProp: props.titleProp, rightContent: props.rightContent }));
};
export default CartComponent;
