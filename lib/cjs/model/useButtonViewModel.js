"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function useCartListViewModel(props) {
    const onClickFunc = () => {
        props.onClickFunc(props.param);
    };
    return {
        onClickFunc
    };
}
exports.default = useCartListViewModel;
