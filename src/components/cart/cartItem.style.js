import {StyleSheet} from 'react-native';
import {SIZES, SHADOWS, COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.small,
    flexDirection: 'row',
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: '#fff',
    ...SHADOWS.medium,
    shadowColor: COLORS.lightWhite,
  },
  image: {
    width: 70,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignContent: 'center',
  },
  productImage: {
    width: '100%',
    height: 65,
    borderRadius: SIZES.small,
    resizeMode: 'cover',
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: SIZES.medium,
  },
  productName: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.medium,
    color: COLORS.black,
  },
  detail: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.small + 2,
    color: COLORS.gray,
    marginTop: 3,
  },
  price: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '40%',
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
  },
  button: {
    padding: SIZES.xSmall,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityNumber: {
    top: 2.5,
    fontFamily: 'Poppins-Regular',
    color: COLORS.black,
    fontSize: SIZES.small,
    marginVertical: SIZES.xSmall,
    marginHorizontal: SIZES.large,
  },
});

export default styles;
