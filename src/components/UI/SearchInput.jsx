import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput, Image, FlatList} from 'react-native';
import {COLORS, SIZES} from '../../constants/index';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './searchInput.style';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import SearchedItem from '../products/SearchedItem';

const SearchInput = props => {
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = () => {
    try {
      const response = axios.get(
        `http://localhost:3001/api/products/search/${searchKey}`,
      );

      setSearchResults(response.data);
    } catch (error) {
      console.log('No item found!');
    }
  };

  return (
    <View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={text => setSearchKey(text)}
            onPressIn={() => {}}
            placeholder="Search for..."
            placeholderTextColor={COLORS.gray}
            autoFocus={true}
            onBlur={props.onBlur}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={searchHandler}>
          <FontAwesome5 name="search" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      {searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          keyExtractor={item => item._id}
          renderItem={({item}) => <SearchedItem item={item} />}
          style={{marginHorizontal: 12}}
        />
      ) : (
        <View style={{flex: 1}}>
          <Image
            source={require('../../../assets/images/Pose23.png')}
            style={styles.searchImage}
          />
        </View>
      )}
    </View>
  );
};

export default SearchInput;
