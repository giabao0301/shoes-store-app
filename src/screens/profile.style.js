import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  backgroundImage: {
    height: 290,
    width: '100%',
    resizeMode: 'cover',
  },
  profileContainer: {
    alignItems: 'center',
  },
  userImage: {
    height: 155,
    width: 155,
    borderRadius: 100,
    borderColor: COLORS.primary,
    borderWidth: 1,
    resizeMode: 'cover',
    marginTop: -90,
  },
  userName: {
    fontFamily: 'Poppins-Bold',
    color: COLORS.black,
    marginVertical: 5,
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: SIZES.xxLarge,
    marginVertical: 10,
  },
  loginButtonText: {
    fontFamily: 'Poppins-Bold',
    color: COLORS.white,
  },
});

export default styles;
