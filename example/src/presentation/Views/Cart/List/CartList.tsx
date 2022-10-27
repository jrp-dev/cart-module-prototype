import { useEffect } from 'react';
import CartComponent from 'srn-cart-prototype';
import useCartListViewModel from '../../../../model/useCartListViewModel';
import { ICartItemsState } from '../../../../types/cartTypes';
import Button from '../../../components/Button';

export default function CartList() {
    const { cartItems, total, increment, decrement, remove, clear, reload, load, setTotal } = useCartListViewModel();

    const loadCart = () => {
        load([{id: 1, name: 'Welsh Rabbit', quantity: 1, price: 120.00}, {id: 2, name: 'Rocky Mountain Oysters', quantity: 1, price: 200.00}, {id: 3, name: 'Boston Cream Pie', quantity: 1, price: 300.00}])
    }

    useEffect(() => {
        loadCart()
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
                        {type: 'button', title: '-', onclickFunc: decrement},
                        {type: 'dynamicText', title: 'quantity', onclickFunc: () => null},
                        {type: 'button', title: '+', onclickFunc: increment},
                        {type: 'button', title: 'x', onclickFunc: remove},
                    ]
                }
                showRemoveButton={true}
                onRemove={load}
                showTotal={true}
                onTotalChange={setTotal}
            />
            <p><strong>Total:</strong> ₱ {total}</p>
            <Button title="Reload Cart" onClickFunc={() => loadCart()} param={null}/>
            <Button title="Clear All" onClickFunc={() => clear()} param={null}/>
        </div>        
    )
}