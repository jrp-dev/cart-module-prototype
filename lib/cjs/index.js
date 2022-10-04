"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CartList_1 = __importDefault(require("./views/CartList"));
const CartComponent = (props) => {
    return (react_1.default.createElement(CartList_1.default, { data: props.data, keyProp: props.keyProp, titleProp: props.titleProp, rightContent: props.rightContent }));
};
exports.default = CartComponent;
