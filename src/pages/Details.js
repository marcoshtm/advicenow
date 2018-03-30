import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
