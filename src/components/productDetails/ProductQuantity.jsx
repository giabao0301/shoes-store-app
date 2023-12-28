import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {COLORS} from '../../constants';
import styles from './productQuantity.style';

const ProductQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantityHandler = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
  const decreaseQuantityHandler = () => {
    quantity > 1 && setQuantity(prevQuantity => prevQuantity - 1);
  };

  return (
    <View style={styles.quantity}>
      <TouchableOpacity onPress={decreaseQuantityHandler} style={styles.button}>
        <FontAwesome6 name="minus" size={20} color={COLORS.black} />
      </TouchableOpacity>
      <Text style={styles.quantityNumber}>{quantity}</Text>
      <TouchableOpacity onPress={increaseQuantityHandler} style={styles.button}>
        <FontAwesome6 name="plus" size={20} color={COLORS.black} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductQuantity;
