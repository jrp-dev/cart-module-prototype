import { useEffect, useState } from 'react';
export default function useCartListViewModel(props) {
    const [total, setCartTotal] = useState(0);
    useEffect(() => {
        setTotal(props.data);
    }, [props.data]);
    const setTotal = (data) => {
        let newTotal = data.map(x => x.price * x.quantity).reduce((a, b) => a + b, 0);
        setCartTotal(newTotal);
        if (props.onTotalChange) {
            props.onTotalChange(newTotal);
        }
    };
    const removeCartItem = (item) => {
        let newItems = props.data.filter(x => x.id !== item.id);
        if (props.onRemove) {
            props.onRemove(newItems);
        }
    };
    return {
        total,
        setTotal,
        removeCartItem
    };
}
