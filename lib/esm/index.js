import React from "react";
import CartList from "./views/CartList";
import "./index.css";
const CartComponent = (props) => {
    return (React.createElement("div", { className: "srn-miniapp-cart-main-container" },
        React.createElement(CartList, { data: props.data, keyProp: props.keyProp, titleProp: props.titleProp, rightContent: props.rightContent, onRemove: props.onRemove, showRemoveButton: props.showRemoveButton })));
};
export default CartComponent;
