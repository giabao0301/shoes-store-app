import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import styles from './cartItem.style';
import {useNavigation} from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {COLORS} from '../../constants';
import useCartContext from '../../context/cart-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const CartItem = ({item, onSaveTotal}) => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(item.quantity);
  const {addItem, removeItem} = useCartContext();

  const increaseQuantityHandler = async () => {
    const id = await AsyncStorage.getItem('id');
    const userId = JSON.parse(id);
    try {
      const endpoint = 'http://172.17.28.120:3000/api/cart';

      const data = {
        cartItem: item.cartItem._id,
        quantity: 1,
        userId: userId,
        size: item.size,
      };

      const response = await axios.post(endpoint, data);

      if (response.status === 200) {
        console.log('Increased');
      } else {
        throw new Error('Error adding to cart');
      }
    } catch (error) {
      console.log('Error adding to cart', error);
    }
    addItem({...item, quantity: 1});
    setQuantity(prevQuantity => prevQuantity + 1);
  };
  const decreaseQuantityHandler = async () => {
    if (quantity > 1) {
      const id = await AsyncStorage.getItem('id');
      const userId = JSON.parse(id);
      try {
        const endpoint = `http://172.17.28.120:3000/api/cart/quantity`;
        const data = {
          userId: userId,
          cartItem: item.cartItem._id,
        };
        const response = await axios.post(endpoint, data);
        if (response.status === 200) {
          console.log(response.data);
        } else {
          throw new Error('Error fetching cart items');
        }
      } catch (error) {
        console.log('Error fetching cart items', error);
      }
      quantity > 1 && setQuantity(prevQuantity => prevQuantity - 1);
    } else {
      try {
        const endpoint = `http://172.17.28.120:3000/api/cart/${item._id}`;
        const response = await axios.delete(endpoint);
        if (response.status === 200) {
          console.log(response.data);
        } else {
          throw new Error('Error fetching cart items');
        }
      } catch (error) {
        console.log('Error fetching cart items', error);
      }
    }
    removeItem(item._id);
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        // navigation.navigate('Product Details', {item});
      }}>
      <View style={styles.image}>
        <Image
          source={{uri: item.cartItem.imageUrls[0]}}
          style={styles.productImage}
        />
      </View>
      <View style={styles.cartItemDetails}>
        <Text style={styles.productName}>{item.cartItem.name}</Text>
        <Text style={styles.detail}>Size: {item.size}</Text>
        <Text style={styles.price}>$ {item.cartItem.price}</Text>
        <View style={styles.quantity}>
          <TouchableOpacity
            onPress={decreaseQuantityHandler}
            style={styles.button}>
            <FontAwesome6 name="minus" size={16} color={COLORS.black} />
          </TouchableOpacity>
          <Text style={styles.quantityNumber}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={increaseQuantityHandler}
            style={styles.button}>
            <FontAwesome6 name="plus" size={16} color={COLORS.black} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;
