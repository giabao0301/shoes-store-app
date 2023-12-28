import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.xxLarge,
    overflow: 'hidden',
    margin: SIZES.medium,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
  },
  searchInput: {
    fontFamily: 'Popins-Regular',
    width: '100%',
    paddingHorizontal: SIZES.large,
  },
  searchBtn: {
    backgroundColor: COLORS.primary,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: SIZES.xxLarge,
    borderTopRightRadius: SIZES.xxLarge,
  },
  searchImage: {
    resizeMode: 'contain',
    width: SIZES.width - 100,
    height: SIZES.height - 300,
    opacity: 0.9,
  },
});

export default styles;
