import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/index';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.small,
  },
  welcomeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.medium,
    marginTop: SIZES.xSmall,
    color: COLORS.gray,
  },
  username: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.large,
    marginTop: SIZES.xSmall,
    color: COLORS.black,
  },
  icon: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartCount: {
    position: 'absolute',
    bottom: 16,
    right: -8,
    width: 18,
    height: 18,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    zIndex: 999,
  },
  cartNumber: {
    fontFamily: 'regular',
    fontWeight: '600',
    fontSize: SIZES.small,
    color: COLORS.lightWhite,
    top: -2,
  },
});

export default styles;
