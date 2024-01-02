import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import styles from './cartItem.style';
import {useNavigation} from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {COLORS} from '../../constants';

const CartItem = ({item, onSaveTotal}) => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(item.quantity);
  const [total, setTotal] = useState(item.cartItem.price * quantity);

  useEffect(() => {
    setTotal(item.cartItem.price * quantity);
    onSaveTotal(total);
  }, [quantity, total]);

  const increaseQuantityHandler = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
  const decreaseQuantityHandler = () => {
    quantity > 1 && setQuantity(prevQuantity => prevQuantity - 1);
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
          <Text style={styles.quantityNumber}>{quantity}</Text>
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
