import React, {useState, useEffect, useCallback} from 'react';
import {Text, FlatList, View, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import CartItem from './CartItem';
import styles from './cart.style';
import useCartContext from '../../context/cart-context';
import {useNavigation} from '@react-navigation/native';

const CartList = () => {
  const navigation = useNavigation();
  const [response, setResponse] = useState([]);
  const [total, setTotal] = useState(0);
  const [userId, setUserId] = useState('');

  const {addItem, totalAmount, items} = useCartContext();

  const getCartItems = async () => {
    const id = await AsyncStorage.getItem('id');
    const userId = JSON.parse(id);
    setUserId(userId);
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

  const refetch = () => {
    getCartItems();
  };

  const saveTotalHandler = amount => {
    // setTotalAmount(prevAmount => prevAmount + amount);
  };

  useEffect(() => {
    response.forEach(item => {
      addItem(item);
    });
  }, [response]);

  useEffect(() => {
    const total = response.reduce((acc, item) => {
      return acc + item.cartItem.price * item.quantity;
    }, 0);
    setTotal(total);
  }, [response]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>CART</Text>
      <FlatList
        style={styles.list}
        data={items}
        renderItem={({item}) => (
          <CartItem item={item} onSaveTotal={saveTotalHandler} key={item._id} />
        )}
        keyExtractor={item => item._id}
      />
      <View style={styles.bottomBar}>
        <Text style={styles.totalAmount}>
          Total Amount:{' '}
          <Text style={styles.totalNumber}>${+totalAmount.toFixed(2)}</Text>
        </Text>
        <TouchableOpacity
          onPress={() => {
            if (items.length === 0) {
              Alert.alert('Cart is empty');
            } else {
              navigation.navigate('Checkout', {
                response: items,
              });
            }
          }}>
          <View style={styles.checkoutButton}>
            <Text style={styles.checkout}>Order</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartList;
