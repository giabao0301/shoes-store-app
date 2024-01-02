import React, {useReducer, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {},
});

const useCartContext = () => {
  return useContext(CartContext);
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    const existingCartItemIndex = state.items.findIndex(
      item => item.id === action.item.id,
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      if (action.item.quantity > 1) {
        updatedItems = state.items.concat(action.item);
      } else {
        updatedItems = state.items.concat({...action.item, quantity: 1});
      }
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      item => item.id === action.id,
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.quantity) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = props => {
  const [response, setResponse] = useState([]);
  console.log('response', response);
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: response || [],
    totalAmount: 0,
  });

  const addItemToCartHandler = item => {
    dispatchCartAction({type: 'ADD', item: item});
  };
  const removeItemFromCartHandler = id => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const getCartItems = async () => {
    const id = await AsyncStorage.getItem('id');
    const userId = JSON.parse(id);
    try {
      const endpoint = `http://172.17.28.120:3000/api/cart/find/${userId}`;
      const response = await axios.get(endpoint);
      if (response.status === 200) {
        setResponse(response.data.products);
      } else {
        throw new Error('Error fetching cart items');
      }
    } catch (error) {
      console.log('Error fetching cart items', error);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export {CartProvider, useCartContext};
