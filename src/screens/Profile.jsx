import React, {useEffect, useState} from 'react';
import {Image, View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './profile.style';
import {useNavigation} from '@react-navigation/native';
import ProfileMenu from '../components/profile/ProfileMenu';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    checkExistingUser();
  }, []);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem('id');
    const userId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(userId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLogin(true);
      } else {
        navigation.navigate('Bottom Tab Navigation');
      }
    } catch (error) {
      console.log('Error retrieving the data', error);
    }
  };

  const userLogout = async () => {
    const id = await AsyncStorage.getItem('id');
    const userId = `user${JSON.parse(id)}`;
    try {
      await AsyncStorage.multiRemove([userId, 'id']);
      navigation.replace('Bottom Tab Navigation');
    } catch (error) {
      console.log('Error logging out the user', error);
    }
  };

  const loginHandler = () => {
    navigation.navigate('Log in');
  };
  const logoutHandler = () => {
    Alert.alert('Log out', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },

      {text: 'Yes', onPress: () => userLogout()},
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={{width: '100%'}}>
        <Image
          style={styles.backgroundImage}
          source={require('../../assets/images/profile-background.jpg')}
        />
        <View style={styles.profileContainer}>
          <Image
            style={styles.userImage}
            source={require('../../assets/images/user.jpg')}
          />
          <Text style={styles.userName}>
            {userLogin ? userData.username : 'Please login into your account'}
          </Text>

          {userLogin && <ProfileMenu onLogout={userLogout} />}

          <TouchableOpacity onPress={userLogin ? logoutHandler : loginHandler}>
            <View style={styles.loginButton}>
              <Text style={styles.loginButtonText}>
                {userLogin ? 'Log out' : 'Log in'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;
