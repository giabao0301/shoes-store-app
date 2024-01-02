import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './button.style';

const PrimaryButton = ({title, onPress, isValid, loader}) => {
  return (
    <TouchableOpacity
      style={styles.button(isValid)}
      onPress={onPress}
      disabled={!isValid}>
      {loader === false ? (
        <Text style={styles.buttonText}>{title}</Text>
      ) : (
        <ActivityIndicator size="large" color="#fff" />
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
