import { useEffect } from 'react';
import useViewModel from './ViewModel'
import { getCartAsync } from '../../../../features/cart/cartSlice';
import Button from '../../../components/Button';
import List from '../../../components/List';
import CartComponent from 'srn-cart-prototype';

export default function CartList() {
    const { cartItems, dispatch, incrementCart, decrementCart, removeCart, total } = useViewModel();

    useEffect(() => {
        dispatch(getCartAsync())
    }, [])

    return (
        <div>
            <h4>Cart Items</h4>
            <CartComponent
                data={cartItems}
                keyProp="id"
                titleProp="name"
                rightContent={
                    [
                        {type: 'dynamicText', title: 'price', onclickFunc: () => null},
                        {type: 'button', title: '-', onclickFunc: decrementCart},
                        {type: 'dynamicText', title: 'quantity', onclickFunc: () => null},
                        {type: 'button', title: '+', onclickFunc: incrementCart},
                        {type: 'button', title: 'x', onclickFunc: removeCart},
                    ]
                }
            />
            <p><strong>Total:</strong> {total}</p>
            <Button title="Reload Cart" onClickFunc={() => dispatch(getCartAsync())} param={null}/>
        </div>
    )
}