import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
    paddingHorizontal: SIZES.medium,
    marginBottom: 70,
  },
  textStyle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 40,
  },
  heading: {
    fontFamily: 'Poppins-Bold',
    color: COLORS.black,
    fontSize: SIZES.large,
  },
});

export default styles;
