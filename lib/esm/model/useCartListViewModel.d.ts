import { ICartItemsState } from '../types/cartTypes';
import { IListProps } from '../types/listTypes';
export default function useCartListViewModel(props: IListProps): {
    total: number;
    setTotal: (data: ICartItemsState[]) => void;
    removeCartItem: (item: ICartItemsState) => void;
};
