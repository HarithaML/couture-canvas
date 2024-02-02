import { createContext, useState , useEffect} from 'react';

const addCartItem = (cartItems,productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id == productToAdd.id)
  if(existingCartItem){
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem,quantity: cartItem.quantity+1}:cartItem)
  }
  return [...cartItems,{...productToAdd,quantity: 1}]
}
const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
  if(!existingCartItem){
    return cartItems;
  }
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  );
};

const removeCartItemTotaly = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
  if(existingCartItem) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  return cartItems
}




export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemCount: 0,
  removeItemFromCart: () => {},
  removeItemTotalyFromCart: () => {},
  cartItemTotalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems,setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartItemTotalPrice,setCartItemTotalPrice] = useState(0);
  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const price = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartItemCount(count);
    setCartItemTotalPrice(price)
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems,productToAdd))
  }
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems,productToRemove))
  }
  const removeItemTotalyFromCart = (productToRemove) => {
    setCartItems(removeCartItemTotaly(cartItems,productToRemove))
  }
  
  const value = { isCartOpen, setIsCartOpen,addItemToCart ,cartItems,cartItemCount,removeItemFromCart,removeItemTotalyFromCart,cartItemTotalPrice};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};