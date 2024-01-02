import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './home.style';
import Header from '../components/home/Header';
import Carousel from '../components/home/Carousel';
import Categories from '../components/home/Categories';
import ProductList from '../components/products/ProductList';
import {ScrollView} from 'react-native-virtualized-view';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    checkExistingUser();
  }, []);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem('id');
    const userId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(userId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLogin(true);
      } else {
        navigation.navigate('Bottom Tab Navigation');
      }
    } catch (error) {
      console.log('Error retrieving the data', error);
    }
  };
  const route = useRoute();

  console.log(route.params);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const selectCategoryHandler = category => {
    setSelectedCategory(category);
  };
  return (
    <View style={styles.container}>
      {userLogin ? (
        <Header username={userData.username} />
      ) : (
        <Header username="Guest" />
      )}
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
