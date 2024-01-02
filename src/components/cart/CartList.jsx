import React, {useState, useEffect} from 'react';
import {Text, FlatList, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import CartItem from './CartItem';
import styles from './cart.style';

const CartList = () => {
  const [response, setResponse] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

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

  var total = 0;

  const saveTotalHandler = amount => {
    console.log(amount);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>CART</Text>
      <FlatList
        data={response}
        renderItem={({item}) => (
          <CartItem item={item} onSaveTotal={saveTotalHandler} />
        )}
        keyExtractor={item => item._id}
      />
      <View style={styles.bottomBar}>
        <Text style={styles.totalAmount}>
          Total Amount:{' '}
          <Text style={styles.totalNumber}>${totalAmount.toFixed(2)}</Text>
        </Text>
        <TouchableOpacity>
          <View style={styles.checkoutButton}>
            <Text style={styles.checkout}>CHECKOUT</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartList;
