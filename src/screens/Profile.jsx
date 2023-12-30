import React, {useState} from 'react';
import {Image, View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './profile.style';
import {useNavigation} from '@react-navigation/native';
import ProfileMenu from '../components/profile/ProfileMenu';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(true);
  const navigation = useNavigation();

  const loginHandler = () => {
    navigation.navigate('Login');
  };
  const logoutHandler = () => {
    Alert.alert('Log out', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },

      {text: 'Yes', onPress: () => setUserLogin(false)},
    ]);
  };

  return (
    <View style={styles.container}>
      <View>
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
              {userLogin ? 'David' : 'Please login into your account'}
            </Text>

            {userLogin && <ProfileMenu />}

            <TouchableOpacity
              onPress={userLogin ? logoutHandler : loginHandler}>
              <View style={styles.loginButton}>
                <Text style={styles.loginButtonText}>
                  {userLogin ? 'Log out' : 'Log in'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
