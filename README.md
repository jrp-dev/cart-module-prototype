
# Cart Component Module

A prototype for a cart component module.



## Installation

Install srn-cart-prototype with npm

```bash
  npm install srn-cart-prototype
```
    
## Documentation

#### data
Array of objects from your cart

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
import CartComponent from 'srn-cart-prototype'

function App() {
  return <CartComponent
        data={cart_items}
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
}
```

