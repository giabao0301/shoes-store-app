import React from 'react';
import {StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../constants/index';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    marginTop: 40,
  },
  checkoutButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.small,
    borderRadius: SIZES.small,
    marginHorizontal: 22,
    marginTop: 40,
  },
  checkout: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.large,
    textAlign: 'center',
    color: '#fff',
  },
});

export default styles;
