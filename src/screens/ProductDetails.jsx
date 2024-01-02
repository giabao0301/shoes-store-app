import React, {useCallback, useMemo, useState} from 'react';
import {TouchableOpacity, View, Image, Text, Alert} from 'react-native';
import styles from './productDetails.style';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {COLORS} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-virtualized-view';
import ProductImages from '../components/productDetails/ProductImages';
import {useRoute} from '@react-navigation/native';
import BackButton from '../components/UI/BackButton';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductValues from '../components/productDetails/ProductValues';

const ProductDetails = () => {
  var selectedData = null;
  const route = useRoute();

  const saveDataHandler = data => {
    selectedData = data;
  };

  const {item} = route.params;
  const addItemToCartHandler = async () => {
    const id = await AsyncStorage.getItem('id');
    const userId = JSON.parse(id);
    try {
      const endpoint = 'http://172.17.28.120:3000/api/cart';

      const data = {
        cartItem: item._id,
        quantity: selectedData.quantity,
        userId: userId,
        size: selectedData.selectedSize,
      };

      const response = await axios.post(endpoint, data);

      if (response.status === 200) {
        Alert.alert('Item added to cart');
      } else {
        throw new Error('Error adding to cart');
      }
    } catch (error) {
      console.log('Error adding to cart', error);
    }
  };

  return (
    <React.Fragment>
      <ScrollView style={styles.container}>
        <View style={styles.upperRow}>
          <BackButton />
          <Text style={styles.upperRowText}>Details</Text>
          <FontAwesome6 name="heart" size={25} color={COLORS.black} />
        </View>

        <ProductImages images={item.imageUrls} />

        <View style={styles.details}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>$ {item.price}</Text>
          </View>

          <ProductValues onSaveData={saveDataHandler} item={item} />

          <Text style={styles.description}>{item.description}</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomRow}>
        <TouchableOpacity onPress={addItemToCartHandler}>
          <Feather name="shopping-cart" size={30} color={COLORS.black} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy now</Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

export default ProductDetails;
