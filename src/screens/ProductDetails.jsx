import React, {useState} from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import styles from './productDetails.style';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {COLORS} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-virtualized-view';
import ProductSize from '../components/productDetails/ProductSize';
import ProductImages from '../components/productDetails/ProductImages';
import ProductQuantity from '../components/productDetails/ProductQuantity';
import {useRoute} from '@react-navigation/native';

const ProductDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {item} = route.params;

  return (
    <React.Fragment>
      <ScrollView style={styles.container}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome6 name="angle-left" size={25} color={COLORS.black} />
          </TouchableOpacity>
          <Text style={styles.upperRowText}>Details</Text>
          <FontAwesome6 name="heart" size={25} color={COLORS.black} />
        </View>
        <ProductImages images={item.imageUrls} />
        <View style={styles.details}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>$ {item.price}</Text>
          </View>

          <View style={styles.ratingRow}>
            <View style={styles.rating}>
              <Text style={styles.ratingNumber}>{item.rating}</Text>
              {[...Array(4)].map((_, index) => (
                <FontAwesome
                  key={index}
                  name="star"
                  size={20}
                  color={'#FFD700'}
                />
              ))}
              <FontAwesome name="star-half" size={20} color={'#FFD700'} />
            </View>
            <ProductQuantity />
          </View>
          <ProductSize />
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.bottomRow}>
        <TouchableOpacity>
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
