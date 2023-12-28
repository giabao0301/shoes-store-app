import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './home.style';
import Header from '../components/home/Header';
import Carousel from '../components/home/Carousel';
import Categories from '../components/home/Categories';
import ProductList from '../components/products/ProductList';
import {ScrollView} from 'react-native-virtualized-view';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const selectCategoryHandler = category => {
    setSelectedCategory(category);
  };
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Carousel />
        <Categories
          saveSelectedCategory={selectCategoryHandler}
          selectedCategory={selectedCategory}
        />
        <Text style={styles.heading}>Products</Text>
        <ProductList selectedCategory={selectedCategory} />
      </ScrollView>
    </View>
  );
};

export default Home;
