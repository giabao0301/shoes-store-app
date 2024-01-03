import React from 'react';
import {View, Alert} from 'react-native';
import ProfileItem from './ProfileItem';
import styles from './profileMenu.style';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ProfileMenu = props => {
  const navigaiton = useNavigation();

  const deleteAccount = async () => {
    const id = await AsyncStorage.getItem('id');
    const userId = JSON.parse(id);
    try {
      const endpoint = `http://172.17.28.120:3000/api/users/${userId}`;
      const response = await axios.delete(endpoint);
      if (response.status === 200) {
        navigaiton.navigate('Bottom Tab Navigation');
      } else {
        throw new Error('Error fetching cart items');
      }
    } catch (error) {
      console.log('Error fetching cart items', error);
    }
  };

  const deleteAccountHandler = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },

        {text: 'Yes', onPress: props.onLogout},
      ],
    );
  };

  return (
    <View style={styles.menuWrapper}>
      <ProfileItem
        icon="heart"
        title="Wishlist"
        onPress={() => {
          navigaiton.navigate('Wishlist');
        }}
      />
      <ProfileItem
        icon="truck-fast"
        title="Orders"
        onPress={() => {
          navigaiton.navigate('Orders');
        }}
      />
      <ProfileItem
        icon="cart-shopping"
        title="Cart"
        onPress={() => {
          navigaiton.navigate('Cart');
        }}
      />
      <ProfileItem
        icon="user-xmark"
        title="Delete Account"
        onPress={deleteAccountHandler}
      />
    </View>
  );
};

export default ProfileMenu;
