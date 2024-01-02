import {StyleSheet} from 'react-native';
import {SIZES, COLORS} from '../constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 22,
    justifyContent: 'center',
  },
  backBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: SIZES.xLarge,
    width: SIZES.width - 44,
    zIndex: 999,
  },

  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.xLarge,
    color: COLORS.gray,
    textAlign: 'center',
    marginVertical: SIZES.xLarge,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: borderColor => ({
    borderColor: borderColor,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 60,
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  }),
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.regular,
    color: COLORS.gray,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    color: COLORS.black,
  },
  errorText: {
    color: COLORS.red,
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.small,
    marginTop: 5,
    marginLeft: 5,
  },
  registerButton: {
    fontFamily: 'Poppins-Medium',
    fontSize: SIZES.medium,
    color: COLORS.gray,
    textAlign: 'center',
    marginTop: 15,
  },
});

export default styles;
