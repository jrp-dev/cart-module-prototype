import { useEffect } from 'react';
import useViewModel from './ViewModel'
import { getCartAsync } from '../../../../features/cart/cartSlice';
import Button from '../../../components/Button';
import CartComponent from 'srn-cart-prototype';

export default function CartList() {
    const { cartItems, dispatch, incrementCart, decrementCart, removeCart, clearCart, total } = useViewModel();

    useEffect(() => {
        dispatch(getCartAsync())
    }, [])

    return (
        <div>
            <h3>Cart Items</h3>
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
            <Button title="Clear All" onClickFunc={() => clearCart()} param={null}/>
        </div>
    )
}