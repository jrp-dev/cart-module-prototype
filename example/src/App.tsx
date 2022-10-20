import { Provider } from 'react-redux';
import './App.css';
import CartList from './presentation/Views/Cart/List/CartList';
import { useStore } from './store';

function App() {
  const { store } : any = useStore()
  return (    
    <Provider store={store}>
      <div className="App">
        <CartList />
      </div>
    </Provider>
  );
}

export default App;