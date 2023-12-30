import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import styles from './searchedItem.style';
import {useNavigation} from '@react-navigation/native';

const SearchedItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate('Product Details', {item});
        }}>
        <View style={styles.image}>
          <Image
            source={{uri: item.imageUrls[0]}}
            style={styles.productImage}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.detail}>{item.category}</Text>
          <Text style={styles.detail}>$ {item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchedItem;
