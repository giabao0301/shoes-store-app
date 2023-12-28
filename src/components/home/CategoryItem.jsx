import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './categoryItem.style';
const CategorytItem = props => {
  const active = props.selected === props.name;
  return (
    <Pressable style={styles.category(active)} onPress={props.onSelect}>
      <Image source={props.image} style={styles.categoryImage} />
      <Text style={styles.categoryText(active)}>{props.name}</Text>
    </Pressable>
  );
};

export default React.memo(CategorytItem);
