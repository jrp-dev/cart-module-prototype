
# Cart Component Module

A prototype for a cart component module.



## Installation

Install srn-cart-prototype with npm

```bash
  npm install srn-cart-prototype
```
    
## Screenshots

![App Screenshot](https://i.ibb.co/Gv007bD/Screenshot-142.png)


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

#### showRemoveButton (optional)
Boolean. Show/hide default remove item button.

#### onRemove (optional)
Function when clicking the default remove button.

#### showTotal (optional)
Boolean. Show/hide the display of total

#### onTotalChange (optional)
Callback function when the total updates

## Usage/Examples

### JS

```javascript
import { useState } from 'react';
import CartComponent from 'srn-cart-prototype';

function App() {

  const [cart, setCart] = useState([
    {id: 1, name: 'Chicken Sandwich', quantity: 1, price: 120.00},
    {id: 2, name: 'Ham Sandwich', quantity: 1, price: 200.00},
    {id: 3, name: 'Hotdog Sandwich', quantity: 1, price: 300.00}
  ]);

  const increment = (item) => {
    let newArr = cart.map(cart_item => {
      if (cart_item.id === item.id) {
        return {...cart_item, quantity: cart_item.quantity += 1};
      }    
      return cart_item;
    })
    setCart(newArr);
  }

  const decrement = (item) => {
    let newArr = cart.map(cart_item => {
      if (cart_item.id === item.id) {
        return {...cart_item, quantity: cart_item.quantity -= 1};
      }    
      return cart_item;
    })
    setCart(newArr);
  }

  const update = (items) => {
    setCart(items);
  }

  return (
    <div className="App">
        <CartComponent
            data={cart}
            keyProp="id"
            titleProp="name"
            rightContent={
                [
                    {type: 'staticText', title: '$', onclickFunc: () => null},
                    {type: 'dynamicText', title: 'price', onclickFunc: () => null},
                    {type: 'button', title: '-', onclickFunc: decrement},
                    {type: 'dynamicText', title: 'quantity', onclickFunc: () => null},
                    {type: 'button', title: '+', onclickFunc: increment}
                ]
            }
            showRemoveButton={true}
            onRemove={update}
        />
    </div>
  );
}

export default App;
```

### TypeScript

```javascript
import { useState } from 'react';
import CartComponent from 'srn-cart-prototype';

interface ICart {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

function App() {

  const [cart, setCart] = useState([
    {id: 1, name: 'Chicken Sandwich', quantity: 1, price: 120.00},
    {id: 2, name: 'Ham Sandwich', quantity: 1, price: 200.00},
    {id: 3, name: 'Hotdog Sandwich', quantity: 1, price: 300.00}
  ]);

  const increment = (item: ICart) => {
    let newArr = cart.map(cart_item => {
      if (cart_item.id === item.id) {
        return {...cart_item, quantity: cart_item.quantity += 1};
      }    
      return cart_item;
    })
    setCart(newArr);
  }

  const decrement = (item: ICart) => {
    let newArr = cart.map(cart_item => {
      if (cart_item.id === item.id) {
        return {...cart_item, quantity: cart_item.quantity -= 1};
      }    
      return cart_item;
    })
    setCart(newArr);
  }

  const update = (items: ICart[]) => {
    setCart(items);
  }

  return (
    <div className="App">
        <CartComponent
            data={cart}
            keyProp="id"
            titleProp="name"
            rightContent={
                [
                    {type: 'staticText', title: '$', onclickFunc: () => null},
                    {type: 'dynamicText', title: 'price', onclickFunc: () => null},
                    {type: 'button', title: '-', onclickFunc: decrement},
                    {type: 'dynamicText', title: 'quantity', onclickFunc: () => null},
                    {type: 'button', title: '+', onclickFunc: increment}
                ]
            }
            showRemoveButton={true}
            onRemove={update}
        />
    </div>
  );
}

export default App;
```
## Dev Dependencies
- React
- React-dom
- Node version: 14.17.4

## Changelogs

- 1.0.12
  - Added showTotal & onTotalChange property
  - Added total display at the bottom
- 1.0.11 - Updated interfaces and types naming
- 1.0.10 - Updated component screenshot in documentation 
- 1.0.9
  - Added default styling
  - Added default remove button
- 1.0.8 - Updated component screenshot in documentation
- 1.0.7 - Updated usage example in documentation
- 1.0.6 - Added usage example in documentation
- 1.0.5 - Updated folder structure and custom hooks naming
- 1.0.4 - Added GIT repository link
- 1.0.3 - Added data property in documentation
- 1.0.2 - Added documentation
- 1.0.1 - Added rightContent props for adding dynamic content at the right section of cart items
- 1.0.0 - Initialized Cart Component
