import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import {
  Search,
  ProductDetails,
  Login,
  Orders,
  SignUp,
  Checkout,
  SuccessfulOrder,
} from './src/screens/index';
import CartProvider from './src/context/CartProvider';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator>
          <Stack.Screen
            name="Bottom Tab Navigation"
            component={BottomTabNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Product Details"
            component={ProductDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Log in"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Sign Up"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Successful Order"
            component={SuccessfulOrder}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Orders"
            component={Orders}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
