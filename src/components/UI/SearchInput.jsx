import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  Keyboard,
  Pressable,
} from 'react-native';
import {COLORS, SIZES} from '../../constants/index';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './searchInput.style';
import axios from 'axios';
import SearchedItem from '../products/SearchedItem';

const SearchInput = props => {
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = async () => {
    try {
      setSearchResults([]);
      const response = await axios.get(
        `http://172.17.28.120:3000/api/products/search/${searchKey}`,
      );
      const data = await response.data;
      setSearchResults(data);
    } catch (error) {
      console.log('No item found!');
      setSearchResults([]);
    }
    Keyboard.dismiss();
  };

  return (
    <View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={text => setSearchKey(text)}
            placeholder="Search for..."
            placeholderTextColor={COLORS.black}
            color={COLORS.black}
            autoFocus={true}
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
          style={styles.searchedItemList}
        />
      ) : (
        <Pressable style={{flex: 1}}>
          <Image
            source={require('../../../assets/images/Pose23.png')}
            style={styles.searchImage}
          />
        </Pressable>
      )}
    </View>
  );
};

export default SearchInput;
