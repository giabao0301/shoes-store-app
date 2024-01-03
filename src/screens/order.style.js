import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants/index';

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
  orderItem: {
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.offwhite,
  },
  name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#000',
  },
  price: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000',
  },
  quantity: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000',
  },
  size: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000',
  },
  shippingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 22,
  },
  shipping: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#000',
  },
  shippingfee: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 22,
    marginTop: 20,
  },
  total: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#000',
  },
  totalAmount: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.medium,
    color: COLORS.primary,
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
    marginHorizontal: 22,
    marginTop: 20,
  },
  checkout: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.medium,
    textAlign: 'center',
    color: '#fff',
  },
});

export default styles;
