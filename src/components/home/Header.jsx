import React, {useState} from 'react';
import {View, Text} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import styles from './header.style';
import {COLORS, SIZES} from '../../constants';

const Header = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcomeText}>Welcome back!</Text>
        <Text style={styles.username}>Bao</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesome6
          name="magnifying-glass"
          size={24}
          color={COLORS.gray}
          onPress={() => {
            navigation.navigate('Search');
          }}
        />
        <View style={styles.cartCount}>
          <Text style={styles.cartNumber}>0</Text>
        </View>
        <FontAwesome6
          name="cart-shopping"
          size={24}
          color={COLORS.gray}
          onPress={() => {
            navigation.navigate('Cart');
          }}
        />
      </View>
    </View>
  );
};

export default Header;
