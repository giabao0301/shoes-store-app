import {StyleSheet} from 'react-native';
import {SIZES, SHADOWS, COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.small,
    flexDirection: 'row',
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: '#fff',
    ...SHADOWS.medium,
    shadowColor: COLORS.lightWhite,
  },
  image: {
    width: 70,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignContent: 'center',
  },
  productImage: {
    width: '100%',
    height: 65,
    borderRadius: SIZES.small,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    marginLeft: SIZES.medium,
  },
  productName: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.medium,
    color: COLORS.black,
  },
  detail: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.small + 2,
    color: COLORS.gray,
    marginTop: 3,
  },
});

export default styles;
