import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.large,
  },
  heading: {
    fontFamily: 'Poppins-Bold',
    color: COLORS.black,
    fontSize: SIZES.large,
    marginBottom: SIZES.small,
  },
  categories: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
