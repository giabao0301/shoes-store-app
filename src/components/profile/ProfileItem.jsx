import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import styles from './profileItem.style';

const ProfileItem = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.menuItem}>
        <FontAwesome6 name={icon} size={20} color="#000" />
        <Text style={styles.menuText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileItem;
