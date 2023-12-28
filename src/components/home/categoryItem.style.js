import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  category: active => ({
    width: 130,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: active ? COLORS.primary : COLORS.white,
    borderRadius: 8,
    padding: 5,
    marginRight: 10,
  }),
  categoryText: active => ({
    fontFamily: 'Poppins-Regular',
    color: active ? COLORS.white : COLORS.black,
    paddingHorizontal: SIZES.xSmall,
  }),
  categoryImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
});
export default styles;
