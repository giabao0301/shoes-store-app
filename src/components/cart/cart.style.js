import {StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../../constants';
const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  header: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    marginTop: 40,
  },
  list: {
    marginBottom: 150,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SIZES.medium,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: COLORS.offwhite,
    width: '100%',
  },
  totalAmount: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.medium,
    color: COLORS.black,
  },
  totalNumber: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  checkoutButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.small,
    borderRadius: SIZES.small,
  },
  checkout: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
});

export default styles;
