import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {COLORS, SIZES} from '../../constants';

const Carousel = () => {
  const slides = [
    require('../../../assets/images/banner1.png'),
    require('../../../assets/images/banner2.png'),
    require('../../../assets/images/banner3.png'),
    require('../../../assets/images/banner4.png'),
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{borderRadius: 15, width: '92%', marginTop: 15}}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;
const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
