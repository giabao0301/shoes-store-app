import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './checkout.style';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useCartContext from '../context/cart-context';
import {useNavigation} from '@react-navigation/native';

const Checkout = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const item = route.params.response;
  console.log(item);
  const {totalAmount, clearItems} = useCartContext();

  const checkoutHandler = () => {
    clearItems();
    navigation.navigate('Successful Order');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order</Text>
      <View>
        <FlatList
          data={item}
          keyExtractor={item._id}
          renderItem={({item}) => (
            <View style={styles.orderItem} key={item._id}>
              <View>
                <Text style={styles.name}>{item.cartItem.name}</Text>
                <Text style={styles.size}>Size: {item.size}</Text>
              </View>
              <Text style={styles.quantity}>x {item.quantity}</Text>
              <Text style={styles.price}>$ {item.cartItem.price}</Text>
            </View>
          )}
        />
        <View style={styles.shippingContainer}>
          <Text style={styles.shipping}>Shipping: </Text>
          <Text style={styles.shippingfee}>$ 10</Text>
        </View>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total: </Text>
        <Text style={styles.totalAmount}>
          ${' '}
          {item[0].total + 10
            ? item[0].total + 10
            : (totalAmount + 10).toFixed(2)}
        </Text>
      </View>
      <TouchableOpacity onPress={checkoutHandler}>
        <View style={styles.checkoutButton}>
          <Text style={styles.checkout}>Chechout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;
