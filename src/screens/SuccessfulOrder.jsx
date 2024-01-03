import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './successfulOrder.style';
import {useNavigation} from '@react-navigation/native';

const SuccessfulOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/shipping.jpg')}
        style={styles.image}
      />
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <Text style={styles.text}>
          Your Order Has Been Placed Successfully!
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <View style={styles.checkoutButton}>
            <Text style={styles.checkout}>Continue Shopping</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuccessfulOrder;
