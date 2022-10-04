import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import CartComponent from 'srn-cart-prototype';

import './App.css';

function App() {
  return (
    <div className="App">
      <CartComponent />
    </div>
  );
}

export default App;
