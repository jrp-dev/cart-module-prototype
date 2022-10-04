import { cartItemsState } from "./cartTypes";

export interface listTypes {
    data: cartItemsState[];
    rightContent?: Array<{type: 'button' | 'staticText' | 'dynamicText', title: string, onclickFunc: (prop: any) => void}>;
    titleProp: string;
    keyProp: string;
}