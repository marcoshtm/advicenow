import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class GiveScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Give Screen</Text>
        <TextInput style={styles.givebox} />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  givebox: {
    width: 300,
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20
  }
})
