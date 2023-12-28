import React from 'react';
import {StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

const ProductImages = ({images}) => {
  return (
    <SliderBox
      style={styles.image}
      images={images}
      ImageComponentStyle={{width: '100%'}}
      circleLoop
    />
  );
};

export default React.memo(ProductImages);
const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
});
