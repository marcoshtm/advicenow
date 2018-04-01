import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class AskScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Peça um conselho</Text>
        <TextInput
          placeholder="Que conselho você gostaria de pedir?"
          underlineColorAndroid="#ffffff"
          style={styles.textbox}
        />
        <Button
          title="Go to Home"
          color="#006080"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  textbox: {
    width: 300,
    height: 100,
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: '#5c5c3d',
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    borderRadius:10
  }
})
