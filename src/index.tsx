import React from "react";
import { IListProps } from "./types/listTypes";
import CartList from "./views/CartList";
import "./index.css";

const CartComponent = (props: IListProps): JSX.Element => {
  return (
    <div className="srn-miniapp-cart-main-container">
      <CartList
        data={props.data}
        keyProp={props.keyProp}
        titleProp={props.titleProp}
        rightContent={props.rightContent}
        onRemove={props.onRemove}
        showRemoveButton={props.showRemoveButton}
      />
    </div>
  );
}

export default CartComponent;