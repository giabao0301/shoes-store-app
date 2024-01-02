import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS, SIZES} from '../../constants';
import styles from './productValues.style';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const sizes = [38, 39, 40, 41, 42, 43];

const ProductValues = props => {
  const [selectedSize, setSelectedSize] = useState(38);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const data = {
      quantity: quantity,
      selectedSize: selectedSize,
    };
    props.onSaveData(data);
  }, [selectedSize, quantity]);

  const increaseQuantityHandler = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
  const decreaseQuantityHandler = () => {
    quantity > 1 && setQuantity(prevQuantity => prevQuantity - 1);
  };
  return (
    <React.Fragment>
      <View style={styles.ratingRow}>
        <View style={styles.rating}>
          <Text style={styles.ratingNumber}>{props.item.rating}</Text>
          {[...Array(4)].map((_, index) => (
            <FontAwesome key={index} name="star" size={20} color={'#FFD700'} />
          ))}
          <FontAwesome name="star-half" size={20} color={'#FFD700'} />
        </View>

        <View style={styles.quantity}>
          <TouchableOpacity
            onPress={decreaseQuantityHandler}
            style={styles.button}>
            <FontAwesome6 name="minus" size={20} color={COLORS.black} />
          </TouchableOpacity>
          <Text style={styles.quantityNumber}>{quantity}</Text>
          <TouchableOpacity
            onPress={increaseQuantityHandler}
            style={styles.button}>
            <FontAwesome6 name="plus" size={20} color={COLORS.black} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.selectSizeText}>Select size</Text>
      <View style={styles.sizeRow}>
        {sizes.map(size => (
          <TouchableOpacity
            key={size}
            onPress={() => {
              setSelectedSize(size);
            }}>
            <Text
              style={[
                styles.size,
                {
                  borderWidth: 2,
                  borderColor:
                    selectedSize === size ? COLORS.primary : COLORS.white,
                  borderRadius: 15,
                },
              ]}>
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </React.Fragment>
  );
};

export default ProductValues;
