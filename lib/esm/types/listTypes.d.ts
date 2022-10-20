import { ICartItemsState } from "./cartTypes";
export interface listTypes {
    data: ICartItemsState[];
    rightContent?: Array<{
        type: 'button' | 'staticText' | 'dynamicText';
        title: string;
        onclickFunc: (prop: any) => void;
    }>;
    titleProp: string;
    keyProp: string;
    onRemove?: (prop: any) => void;
    showRemoveButton?: boolean;
}
