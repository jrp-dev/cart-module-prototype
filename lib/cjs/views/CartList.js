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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartList = void 0;
const react_1 = __importStar(require("react"));
const Button_1 = __importDefault(require("../components/Button"));
const Text_1 = __importDefault(require("../components/Text"));
const CartList = (props) => {
    var _a;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("ul", null, (_a = props === null || props === void 0 ? void 0 : props.data) === null || _a === void 0 ? void 0 : _a.map((item, index) => {
            var _a;
            return (react_1.default.createElement("li", { key: item[props.keyProp] ? item[props.keyProp] : index },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("p", null, item[props.titleProp] ? item[props.titleProp] : ''), (_a = props.rightContent) === null || _a === void 0 ? void 0 :
                    _a.map((content, i) => (react_1.default.createElement(react_1.Fragment, { key: i }, content.type === 'button' ?
                        react_1.default.createElement(Button_1.default, { key: i, title: content.title, onClickFunc: content.onclickFunc, param: item }) :
                        content.type === 'staticText' ?
                            react_1.default.createElement("span", null, content.title) :
                            content.type === 'dynamicText' ?
                                react_1.default.createElement(Text_1.default, { data: item[content.title].toString() }) : ''))))));
        }))));
};
exports.CartList = CartList;
exports.default = exports.CartList;
