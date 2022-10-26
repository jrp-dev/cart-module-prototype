import { ICartItemsState } from "./cartTypes";
export interface IListProps {
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
