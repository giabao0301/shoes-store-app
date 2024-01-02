import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import ProductItem from './ProductItem';
import styles from './productList.style';
import useFetch from '../../hook/useFetch';

const ProductList = props => {
  const {data, isLoading, error} = useFetch(
    'http:/172.17.28.120:3000/api/products/',
    'get',
  );

  let products;
  if (props.selectedCategory === 'All') {
    products = data;
  } else {
    products = data.filter(
      product => product.category === props.selectedCategory,
    );
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Some thing went wrong!</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={item => item._id}
          numColumns={2}
          renderItem={({item}) => <ProductItem item={item} />}
        />
      )}
    </View>
  );
};

export default ProductList;
