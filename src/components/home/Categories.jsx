import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import styles from './categories.style';
import CategorytItem from './CategoryItem';

const categories = [
  {
    id: 1,
    name: 'All',
    image: require('../../../assets/logo/images.png'),
  },
  {
    id: 2,
    name: 'Nike',
    image: require('../../../assets/logo/nike-logo.jpg'),
  },
  {
    id: 3,
    name: 'Adidas',
    image: require('../../../assets/logo/adidas-logo.jpg'),
  },
  {
    id: 4,
    name: 'Puma',
    image: require('../../../assets/logo/puma-logo.jpg'),
  },
];

const Categories = props => {
  const selectedCategoryHandler = category => {
    props.saveSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>
      <ScrollView horizontal={true}>
        {categories.map(category => (
          <CategorytItem
            key={category.id}
            image={category.image}
            name={category.name}
            onSelect={selectedCategoryHandler.bind(this, category.name)}
            selected={props.selectedCategory}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
