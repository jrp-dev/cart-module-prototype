import React, { Fragment } from "react";
import Button from "../components/Button";
import Text from "../components/Text";
import useCartListViewModel from "../model/useCartListViewModel";
export const CartList = (props) => {
    var _a;
    const { removeCartItem, total } = useCartListViewModel(props);
    return (React.createElement("div", { className: 'srn-miniapp-cart-container' },
        React.createElement("ul", { className: 'srn-miniapp-cart-ul' }, (_a = props === null || props === void 0 ? void 0 : props.data) === null || _a === void 0 ? void 0 : _a.map((item, index) => {
            var _a;
            return (React.createElement("li", { key: item[props.keyProp] ? item[props.keyProp] : index, className: 'srn-miniapp-cart-li' },
                React.createElement("div", { className: 'srn-miniapp-cart-li-content' },
                    React.createElement("p", { className: 'srn-miniapp-cart-li-content-title' }, item[props.titleProp] ? item[props.titleProp] : ''), (_a = props.rightContent) === null || _a === void 0 ? void 0 :
                    _a.map((content, i) => (React.createElement(Fragment, { key: i }, content.type === 'button' ?
                        React.createElement(Button, { title: content.title, onClickFunc: content.onclickFunc, param: item }) :
                        content.type === 'staticText' ?
                            React.createElement(Text, { data: content.title }) :
                            content.type === 'dynamicText' ?
                                React.createElement(Text, { data: item[content.title].toString() }) : ''))),
                    props.showRemoveButton &&
                        React.createElement(Button, { title: "x", onClickFunc: removeCartItem, param: item, className: 'srn-miniapp-cart-remove-btn' }))));
        })),
        props.showTotal &&
            React.createElement("div", { className: "srn-miniapp-cart-total-container" },
                React.createElement("p", { className: "srn-miniapp-cart-total-label" }, "Total"),
                React.createElement("p", { className: "srn-miniapp-cart-total-value" }, total))));
};
export default CartList;
