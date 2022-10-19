"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CartList_1 = __importDefault(require("./views/CartList"));
require("./index.css");
const CartComponent = (props) => {
    return (react_1.default.createElement("div", { className: "srn-miniapp-cart-main-container" },
        react_1.default.createElement(CartList_1.default, { data: props.data, keyProp: props.keyProp, titleProp: props.titleProp, rightContent: props.rightContent, onRemove: props.onRemove, showRemoveButton: props.showRemoveButton })));
};
exports.default = CartComponent;
