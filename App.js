import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './src/pages/Login'
import HomeScreen from './src/pages/Home'
import AskScreen from './src/pages/Ask'
import GiveScreen from './src/pages/Give'
import ViewScreen from './src/pages/View'

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
    Ask: {
      screen: AskScreen,
    },
    Give: {
      screen: GiveScreen,
    },
    View: {
      screen: ViewScreen,
    },
  },
  {
    initialRouteName: 'Login',
  }
);
