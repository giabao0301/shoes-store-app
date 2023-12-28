import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/index';

const styles = StyleSheet.create({
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
});

export default styles;
