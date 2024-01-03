import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styles from './order.style';

const Orders = () => {
  const [response, setResponse] = useState([]);
  console.log(response);
  const getOrders = async () => {
    const id = await AsyncStorage.getItem('id');
    const userId = JSON.parse(id);
    try {
      const endpoint = `http://172.17.28.120:3000/api/${userId}`;
      const response = await axios.get(endpoint);
      if (response.status === 200) {
        setResponse(response.data.products);
      } else {
        throw new Error('Error fetching cart s');
      }
    } catch (error) {
      console.log('Error fetching cart s', error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Orders</Text>
      <View>
        <View style={styles.orderItem}>
          <View>
            <Text style={styles.name}>ID: 6595ac46de3a5626ec28933f</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.size}>Status: pending</Text>
              <Text style={styles.totalAmount}>$ 420.01</Text>
            </View>
          </View>
        </View>
        <View style={styles.orderItem}>
          <View>
            <Text style={styles.name}>ID: 6592866d7a73f4779b424355</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.size}>Status: pending</Text>
              <Text style={styles.totalAmount}>$ 320.01</Text>
            </View>
          </View>
        </View>
        <View style={styles.orderItem}>
          <View>
            <Text style={styles.name}>ID: 658fc9163e74bda4739275e0</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.size}>Status: shipping</Text>
              <Text style={styles.totalAmount}>$ 589.14</Text>
            </View>
          </View>
        </View>
        <View style={styles.orderItem}>
          <View>
            <Text style={styles.name}>ID: 659286ae7a73f4779b42433c</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.size}>Status: done</Text>
              <Text style={styles.totalAmount}>$ 842.07</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Orders;
