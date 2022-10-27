export interface ICartItemsState {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

export interface ILoadCartProps {
    type: 'LOAD_CART';
    payload: ICartItemsState[];
}

export interface IincrementCartProps {
    type: 'INCREMENT_CART';
    payload: ICartItemsState;
}
export interface IdecrementCartProps {
    type: 'DECREMENT_CART';
    payload: ICartItemsState;
}

export interface IremoveCartProps {
    type: 'REMOVE_CART';
    payload: ICartItemsState;
}

export interface IclearCartProps {
    type: 'CLEAR_CART';
}

export interface IReloadCartProps {
    type: 'RELOAD_CART';
}

export interface IUpdateTotalProps {
    type: 'UPDATE_TOTAL';
    payload: number;
}

export type TCartActionProps = IincrementCartProps | IdecrementCartProps | IremoveCartProps | IclearCartProps | IReloadCartProps | ILoadCartProps | IUpdateTotalProps