import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  menuText: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.black,
    marginLeft: 20,
    fontSize: 14,
    lineHeight: 26,
    marginTop: 3,
  },
  menuWrapper: {
    marginTop: SIZES.xLarge,
    width: SIZES.width - SIZES.large,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
  menuItem: {
    alignItems: 'center',
    borderBottomWidth: 0.2,
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderColor: COLORS.lightGray,
  },
});

export default styles;
