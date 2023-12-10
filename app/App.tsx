/* eslint-disable prettier/prettier */
import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import Home from './src/screens/Home';
import About from './src/screens/About';
import ProductDetails from './src/screens/ProductDetails';
import Cart from './src/screens/Cart';
import Checkout from './src/screens/Checkout';
import Payments from './src/screens/Payments';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import Account from './src/screens/Account/Account';
import Notifications from './src/screens/Account/Notifications';
import Profile from './src/screens/Account/Profile';
import MyOrders from './src/screens/Account/MyOrders';
import Dashboard from './src/screens/Admin/Dashboard';
import store from './src/redux/store';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={DefaultTheme}>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="productDetails" component={ProductDetails} options={{
            title: 'Product Details',
            headerTitleAlign: 'center',
            headerBackVisible: false,
          }} />
          <Stack.Screen name="checkout" component={Checkout} options={{
            title: 'Checkout',
            headerTitleAlign: 'center',
            headerBackVisible: false,
          }} />
          <Stack.Screen name="myorders" component={MyOrders} options={{
            title: 'My Orders',
            headerTitleAlign: 'center',
            headerBackVisible: false,
          }} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="notifications" component={Notifications} options={{
            title: 'Notifications',
            headerTitleAlign: 'center',
            headerBackVisible: false,
          }} />
          <Stack.Screen name="adminPanel" component={Dashboard} options={{
            title: 'Admin Panel',
            headerTitleAlign: 'center',
            headerBackVisible: false,
          }} />
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="payment" component={Payments} />
          <Stack.Screen name="account" component={Account} options={{
            title: 'My Account',
            headerTitleAlign: 'center',
            headerBackVisible: false,
          }} />
          <Stack.Screen name="cart" component={Cart} options={{
            title: 'My Cart',
            headerTitleAlign: 'center',
            headerBackVisible: false,
          }} />
          <Stack.Screen name="mobile" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
