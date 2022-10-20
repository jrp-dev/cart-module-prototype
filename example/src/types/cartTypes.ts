export interface cartItemsState {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

export interface cartActionGeneral {
    type: string;
}

export interface IincrementCart {
    type: 'INCREMENT_CART';
    payload: cartItemsState;
}
export interface IdecrementCart {
    type: 'DECREMENT_CART';
    payload: cartItemsState;
}

export interface IremoveCart {
    type: 'REMOVE_CART';
    payload: cartItemsState;
}

export interface IclearCart {
    type: 'CLEAR_CART';
}

export interface iReloadCart {
    type: 'RELOAD_CART';
}

export type cartAction = IincrementCart | IdecrementCart | IremoveCart | IclearCart | iReloadCart