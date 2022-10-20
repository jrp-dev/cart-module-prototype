import Button from '../../../components/Button';
import CartComponent from 'srn-cart-prototype';
import useCartListViewModel from '../../../../model/useCartListViewModel';

export default function CartList() {
    const {  useCartSelector, useTotalSelector, increment, decrement, remove, clear, reload } = useCartListViewModel();

    return (
        <div>
            <h3>Cart Items</h3>
            <CartComponent
                data={useCartSelector}
                keyProp="id"
                titleProp="name"
                rightContent={
                    [
                        {type: 'dynamicText', title: 'price', onclickFunc: () => null},
                        {type: 'button', title: '-', onclickFunc: decrement},
                        {type: 'dynamicText', title: 'quantity', onclickFunc: () => null},
                        {type: 'button', title: '+', onclickFunc: increment},
                        {type: 'button', title: 'remove', onclickFunc: remove},
                    ]
                }
            />
            <p><strong>Total:</strong> ₱ {useTotalSelector}</p>
            <Button title="Reload Cart" onClickFunc={() => reload()} param={null}/>
            <Button title="Clear All" onClickFunc={() => clear()} param={null}/>
        </div>        
    )
}