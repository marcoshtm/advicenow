import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, ImageBackground, AppRegistry, TextInput, Button } from 'react-native';

export default class LoginScreen extends React.Component {

  constructor(props) {
      super(props);
      this.state = { email: 'Digite aqui o seu email'};
  }

  render() {
    return (

      <ImageBackground
      source={require('./login1_bg.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <Text style={{color: 'white'}}>"Amizades próximas, conversas particulares."</Text>
        <Text style={{color: 'white', marginTop: 10}}>No APPTESTE você pode</Text>
        <Text style={{color: 'white'}}>pedir conselhos, ou aconselhar alguém.</Text>
        <TextInput
          style={styles.emailbox}
          value={this.state.email}
        />

        <Button
          title="                           ACHEI INTERESSANTE                           "
          onPress={this.onPressButton}
          color="#006080"
          style={{width: '100%'}}
        />
        <Text style={{color: 'white', marginTop: 10}}>Funciona com conversas confidenciais reconfortantes.</Text>
        <Text style={{color: 'white'}}>É gratificante e revelador!</Text>
      </View>
      </ImageBackground>
    );
  }

  onPressButton() {
    Alert.alert('You tapped the button!')
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  },
  emailbox: {
    justifyContent: 'center',
    alignContent: 'center',
    height: 40,
    width: 200,
    borderColor: '#006080',
    borderWidth: 1,
    color: 'white',
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10
  }
})
