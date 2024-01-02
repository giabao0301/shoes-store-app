import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {COLORS} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome6 name="angle-left" size={25} color={COLORS.black} />
    </TouchableOpacity>
  );
};

export default BackButton;
