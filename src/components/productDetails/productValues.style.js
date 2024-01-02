import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  ratingRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width - 44,
    top: 20,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingNumber: {
    top: 2.5,
    fontFamily: 'Poppins-Regular',
    color: COLORS.gray2,
    fontSize: SIZES.medium,
    marginRight: SIZES.small,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.tertiary,
    padding: SIZES.xLarge,
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.white,
    textAlign: 'center',
    fontSize: SIZES.medium,
  },
  button: {
    width: '80%',
    backgroundColor: COLORS.primary,
    padding: SIZES.small,
    borderRadius: SIZES.small,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: SIZES.medium,
    marginVertical: SIZES.xSmall,
    marginHorizontal: SIZES.large,
  },
  selectSizeText: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.gray,
    fontSize: SIZES.medium,
    marginHorizontal: 20,
    marginTop: SIZES.medium,
  },
  sizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: SIZES.xLarge,
  },
  size: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: COLORS.black,
    fontSize: SIZES.medium,
    padding: SIZES.xSmall,
    paddingBottom: SIZES.xSmall - 4,
  },
});

export default styles;
