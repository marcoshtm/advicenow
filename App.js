import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/pages/Home'
import DetailsScreen from './src/pages/Details'
import LoginScreen from './src/pages/Login'

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Login',
  }
);
