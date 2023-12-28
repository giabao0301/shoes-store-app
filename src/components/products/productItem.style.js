import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: 179,
    height: 240,
    marginEnd: 20,
    marginBottom: 20,
    backgroundColor: COLORS.tertiary,
  },
  imageContainer: {
    flex: 1,
    borderTopLeftRadius: SIZES.small,
    borderTopRightRadius: SIZES.small,
    overflow: 'hidden',
    backgroundColor: COLORS.secondary,
  },
  image: {
    width: '100%',
    height: 170,
    resizeMode: 'cover',
  },
  info: {
    padding: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderBottomEndRadius: SIZES.small,
    borderBottomStartRadius: SIZES.small,
  },
  name: {
    color: COLORS.black,
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.medium,
    marginBottom: 8,
  },
  price: {
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.medium,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginEnd: 5,
  },
  ratingNumber: {
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.medium,
  },
});
export default styles;
