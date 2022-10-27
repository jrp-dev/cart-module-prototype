import React from "react";
import CartList from "./views/CartList";
import "./index.css";
const CartComponent = (props) => {
    return (React.createElement("div", { className: "srn-miniapp-cart-main-container" },
        React.createElement(CartList, Object.assign({}, props))));
};
export default CartComponent;
