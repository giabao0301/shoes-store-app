import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CartList from '../components/cart/CartList';

const Cart = () => {
  return (
    <View>
      <CartList />
    </View>
  );
};

export default Cart;
