"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useButtonViewModel_1 = __importDefault(require("../model/useButtonViewModel"));
function Button(data) {
    const { onClickFunc } = (0, useButtonViewModel_1.default)(data);
    return (react_1.default.createElement("button", { onClick: onClickFunc, className: `srn-miniapp-cart-btn ${data.className}` }, data.title));
}
exports.default = Button;
