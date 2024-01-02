import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';
const styles = StyleSheet.create({
  buttonText: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    fontSize: 18,
  },
  button: isValid => ({
    backgroundColor: isValid ? COLORS.primary : COLORS.gray2,
    height: 60,
    width: '100%',
    borderRadius: 12,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }),
});

export default styles;
