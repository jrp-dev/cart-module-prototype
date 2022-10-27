import { useEffect, useState } from 'react';
import { ICartItemsState } from '../types/cartTypes';
import { IListProps } from '../types/listTypes';

export default function useCartListViewModel(props: IListProps) {

    const [total, setCartTotal] = useState<number>(0)
    
    useEffect(() => {
        setTotal(props.data)
    }, [props.data])

    const setTotal = (data: ICartItemsState[]) => {        
        let updatedTotal = data.map(x => x.price * x.quantity).reduce((a: number, b: number) => a + b, 0)
        setCartTotal(updatedTotal)
        if (props.onTotalChange) {
            props.onTotalChange(updatedTotal)
        }
    }

    const removeCartItem = (item: ICartItemsState) => {
        let newItems = props.data.filter(x => x.id !== item.id)
        if (props.onRemove) {
            props.onRemove(newItems)
        }
    }

    return {
        total,
        setTotal,
        removeCartItem
    }

}