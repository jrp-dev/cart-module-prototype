import { cartItemsState } from "../../types/cartTypes";

// A mock function to mimic making an async request for data
export function fetchCart(cart = [{id: 1, name: 'Welsh Rabbit', quantity: 1, price: 120.00}, {id: 2, name: 'Rocky Mountain Oysters', quantity: 1, price: 200.00}, {id: 3, name: 'Boston Cream Pie', quantity: 1, price: 300.00}]) {
  return new Promise<{ data: cartItemsState[] }>((resolve) =>
    setTimeout(() => resolve({ data: cart }), 500)
  );
}
