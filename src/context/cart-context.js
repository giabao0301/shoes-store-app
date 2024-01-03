import React, {useContext} from 'react';

export const CartContext = React.createContext({
  item: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {},
});

const useCartContext = () => {
  return useContext(CartContext);
};

export default useCartContext;
