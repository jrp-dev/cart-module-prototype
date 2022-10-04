"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartList = void 0;
const react_1 = __importStar(require("react"));
const CartList = () => {
    const [cartItems, setCartItems] = (0, react_1.useState)([]);
    const getCartItems = () => {
        setCartItems([{ id: 1, name: 'NY Cheese De Luxe + Bronx Pepperoni', quantity: 1, price: 120.00 }, { id: 2, name: 'Fluffy Pancake Chocolate Ala Mode', quantity: 1, price: 200.00 }, { id: 3, name: 'U.S. Spicy Chicken Sandwich Ala Carte', quantity: 1, price: 300.00 }]);
    };
    (0, react_1.useEffect)(() => {
        getCartItems();
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", null, cartItems.map(x => (react_1.default.createElement("p", null, x.name))))));
};
exports.CartList = CartList;
exports.default = exports.CartList;
