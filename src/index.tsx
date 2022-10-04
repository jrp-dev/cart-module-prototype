import React from "react";
import { listTypes } from "./types/listTypes";
import CartList from "./views/CartList";

const CartComponent = (props: listTypes): JSX.Element => {
  return (
    <CartList data={props.data} keyProp={props.keyProp} titleProp={props.titleProp} rightContent={props.rightContent} />
  );
}

export default CartComponent;