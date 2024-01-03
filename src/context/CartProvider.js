import React, {useReducer} from 'react';
import {CartContext} from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {},
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.cartItem.price * action.item.quantity;

    const existingCartItemIndex = state.items.findIndex(
      item =>
        item.cartItem.name === action.item.cartItem.name &&
        item.size === action.item.size,
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
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    console.log('remove', state.items);
    const existingCartItemIndex = state.items.findIndex(
      item => item._id === action._id,
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount =
      state.totalAmount - existingCartItem.cartItem.price;
    let updatedItems;
    if (existingCartItem.quantity === 1) {
      updatedItems = state.items.filter(item => item._id !== action._id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'CLEAR') {
    return defaultCartState;
  }
  return defaultCartState;
};

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  );
  const addItemToCartHandler = item => {
    dispatchCartAction({type: 'ADD', item: item});
  };
  const removeItemFromCartHandler = _id => {
    dispatchCartAction({type: 'REMOVE', _id: _id});
  };
  const clearItemsFromCartHandler = () => {
    dispatchCartAction({type: 'CLEAR'});
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearItems: clearItemsFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
