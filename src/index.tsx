import React from "react";
import { IListProps } from "./types/listTypes";
import CartList from "./views/CartList";
import "./index.css";

const CartComponent = (props: IListProps): JSX.Element => {
  return (
    <div className="srn-miniapp-cart-main-container">
      <CartList {...props} />
    </div>
  );
}

export default CartComponent;