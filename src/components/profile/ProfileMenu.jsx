import React from 'react';
import {View, Alert} from 'react-native';
import ProfileItem from './ProfileItem';
import styles from './profileMenu.style';
import {useNavigation} from '@react-navigation/native';

const ProfileMenu = () => {
  const navigaiton = useNavigation();

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

        {text: 'Yes', onPress: () => console.log('Yes Pressed')},
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
