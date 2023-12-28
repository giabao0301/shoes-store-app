import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/index';

const styles = StyleSheet.create({
  selectSizeText: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.gray,
    fontSize: SIZES.medium,
    marginHorizontal: 20,
    marginTop: SIZES.medium,
  },
  sizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: SIZES.xLarge,
  },
  size: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: COLORS.black,
    fontSize: SIZES.medium,
    padding: SIZES.xSmall,
    paddingBottom: SIZES.xSmall - 4,
  },
});
export default styles;
