import React, { Fragment, useEffect, useState } from "react";
import Button from "../components/Button";
import Text from "../components/Text";
export const CartList = (props) => {
    var _a;
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let newTotal = props.data.map(x => x.price * x.quantity).reduce((a, b) => a + b, 0);
        setTotal(newTotal);
        if (props.onTotalChange) {
            props.onTotalChange(newTotal);
        }
    }, [props.data]);
    const setCartItems = (item) => {
        let newItems = props.data.filter(x => x.id !== item.id);
        if (props.onRemove) {
            props.onRemove(newItems);
        }
    };
    return (React.createElement("div", { className: 'srn-miniapp-cart-container' },
        React.createElement("ul", { className: 'srn-miniapp-cart-ul' }, (_a = props === null || props === void 0 ? void 0 : props.data) === null || _a === void 0 ? void 0 : _a.map((item, index) => {
            var _a;
            return (React.createElement("li", { key: item[props.keyProp] ? item[props.keyProp] : index, className: 'srn-miniapp-cart-li' },
                React.createElement("div", { className: 'srn-miniapp-cart-li-content' },
                    React.createElement("p", { className: 'srn-miniapp-cart-li-content-title' }, item[props.titleProp] ? item[props.titleProp] : ''), (_a = props.rightContent) === null || _a === void 0 ? void 0 :
                    _a.map((content, i) => (React.createElement(Fragment, { key: i }, content.type === 'button' ?
                        React.createElement(Button, { key: i, title: content.title, onClickFunc: content.onclickFunc, param: item }) :
                        content.type === 'staticText' ?
                            React.createElement(Text, { data: content.title }) :
                            content.type === 'dynamicText' ?
                                React.createElement(Text, { data: item[content.title].toString() }) : ''))),
                    props.showRemoveButton &&
                        React.createElement("button", { onClick: () => setCartItems(item), className: 'srn-miniapp-cart-btn srn-miniapp-cart-remove-btn' }, "x"))));
        })),
        props.showTotal &&
            React.createElement("div", { className: "srn-miniapp-cart-total-container" },
                React.createElement("p", { className: "srn-miniapp-cart-total-label" }, "Total"),
                React.createElement("p", { className: "srn-miniapp-cart-total-value" }, total))));
};
export default CartList;
