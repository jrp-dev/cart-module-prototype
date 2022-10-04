import React, { Fragment } from "react";
import Button from "../components/Button";
import Text from "../components/Text";
export const CartList = (props) => {
    var _a;
    return (React.createElement(React.Fragment, null,
        React.createElement("ul", null, (_a = props === null || props === void 0 ? void 0 : props.data) === null || _a === void 0 ? void 0 : _a.map((item, index) => {
            var _a;
            return (React.createElement("li", { key: item[props.keyProp] ? item[props.keyProp] : index },
                React.createElement("div", null,
                    React.createElement("p", null, item[props.titleProp] ? item[props.titleProp] : ''), (_a = props.rightContent) === null || _a === void 0 ? void 0 :
                    _a.map((content, i) => (React.createElement(Fragment, { key: i }, content.type === 'button' ?
                        React.createElement(Button, { key: i, title: content.title, onClickFunc: content.onclickFunc, param: item }) :
                        content.type === 'staticText' ?
                            React.createElement("span", null, content.title) :
                            content.type === 'dynamicText' ?
                                React.createElement(Text, { data: item[content.title].toString() }) : ''))))));
        }))));
};
export default CartList;
