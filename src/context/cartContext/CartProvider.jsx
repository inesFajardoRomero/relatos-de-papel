import { createContext, useState, useContext } from 'react';
import CartContext from './CartContext';

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => setCartItems((prev) => [...prev, item]);
  const removeFromCart = (itemId) => setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

