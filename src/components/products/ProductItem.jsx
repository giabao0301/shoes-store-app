import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './productItem.style';
import {useNavigation} from '@react-navigation/native';

const ProductItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Product Details', {item});
      }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item.imageUrls[0],
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>
          <View style={styles.details}>
            <Text style={styles.price}>$ {item.price}</Text>
            <View style={styles.rating}>
              <FontAwesome name="star" size={16} color={'#FFD700'} />
              <Text style={styles.ratingNumber}>{item.rating}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
