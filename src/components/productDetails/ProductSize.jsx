import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants';
import styles from './productSize.style';

const sizes = [38, 39, 40, 41, 42, 43];

const ProductSize = () => {
  const [selectedSize, setSelectedSize] = useState(38);

  return (
    <React.Fragment>
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

export default ProductSize;
