import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
  },
  upperRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: SIZES.xLarge,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  upperRowText: {
    fontFamily: 'Poppins-Bold',
    color: COLORS.black,
    fontSize: SIZES.medium,
  },

  details: {
    marginTop: -SIZES.xxLarge,
    backgroundColor: COLORS.tertiary,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.xxLarge,
    borderTopRightRadius: SIZES.xxLarge,
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width - 44,
    top: 20,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.black,
    fontSize: SIZES.large,
    maxWidth: '70%',
  },
  price: {
    fontFamily: 'Poppins-Bold',
    color: COLORS.black,
    fontSize: SIZES.large,
  },
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
  description: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.gray2,
    fontSize: SIZES.medium,
    marginHorizontal: 20,
    marginVertical: SIZES.medium,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.tertiary,
    padding: SIZES.xLarge,
  },
  buttonText: {
    fontFamily: 'Poppins-Bold',
    color: COLORS.white,
    textAlign: 'center',
    fontSize: SIZES.large,
  },
  button: {
    width: '80%',
    backgroundColor: COLORS.primary,
    padding: SIZES.small,
    borderRadius: SIZES.small,
  },
});
export default styles;
