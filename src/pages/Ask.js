import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class AskScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }} />
        <View style={{ flex: 0.9, alignItems: 'center', justifyContent: 'flex-start', width:'80%' }}>
          <Text>Peça um conselho</Text>
          <TextInput
            placeholder="Que conselho você gostaria de pedir?"
            underlineColorAndroid="#ffffff"
            multiline={true}
            style={styles.textbox}
          />
          <Button
            title="Enviar"
            color="#006080"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  textbox: {
    width: '100%',
    height: 200,
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
