
# Cart Component Module

A prototype for a cart component module.



## Installation

Install srn-cart-prototype with npm

```bash
  npm install srn-cart-prototype
```
    
## Screenshots

![App Screenshot](https://i.postimg.cc/JzC4QCgR/Screenshot-139.png)


## Documentation

#### keyProp
Property of object with unique ID for mapping

#### titleProp
Property of object to display text each line

#### rightContent
Array. Contents in the right side of each cart items.

```javascript
    [{type: 'button', title: '-', onclickFunc: decrementCart}]
```
##### type
dynamicText | staticText | button - Specify the type of element you want to display.

##### title
Displays text inside the element. If the type is dynamicText, this will display the value of the property specified here. If staticText, it displays the title field as is.

##### onclickFunc
Function that triggers on click.




## Usage/Examples

```javascript
...
import { useState } from 'react';
import CartComponent from 'srn-cart-prototype';

function App() {

  const [cart, setCart] = useState([
    {id: 1, name: 'Chicken Sandwich', quantity: 1, price: 120.00},
    {id: 2, name: 'Ham Sandwich', quantity: 1, price: 200.00},
    {id: 3, name: 'Hotdog Sandwich', quantity: 1, price: 300.00}
  ]);

  const increment = (item: cartItemsState) => {
    let newArr = cart.map(cart_item => {
      if (cart_item.id === item.id) {
        return {...cart_item, quantity: cart_item.quantity += 1};
      }    
      return cart_item;
    })
    setCart(newArr);
  }

  const decrement = (item: cartItemsState) => {
    let newArr = cart.map(cart_item => {
      if (cart_item.id === item.id) {
        return {...cart_item, quantity: cart_item.quantity -= 1};
      }    
      return cart_item;
    })
    setCart(newArr);
  }

  const remove = (item: cartItemsState) => {
    setCart([]);
  }

  return (
    <div className="App">
        <CartComponent
            data={cart}
            keyProp="id"
            titleProp="name"
            rightContent={
                [
                    {type: 'staticText', title: '₱ ', onclickFunc: () => null},
                    {type: 'dynamicText', title: 'price', onclickFunc: () => null},
                    {type: 'button', title: '-', onclickFunc: decrement},
                    {type: 'dynamicText', title: 'quantity', onclickFunc: () => null},
                    {type: 'button', title: '+', onclickFunc: increment},
                    {type: 'button', title: 'x', onclickFunc: remove},
                ]
            }
        />
    </div>
  );
}

export default App;
```

