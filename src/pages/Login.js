import React from 'react';
import { Alert, StyleSheet, Text, View, ImageBackground, AppRegistry, TextInput, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class LoginScreen extends React.Component {

  constructor(props) {
      super(props);
      this.state = { email: ''};
  }

  render() {
    return (
      <ImageBackground
      source={require('./login1_bg.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.standardview} >
        <Text style={{color: 'white', marginBottom: 5}}>"Amizades próximas, conversas particulares."</Text>
        <Text style={{color: 'white', marginBottom: 30}}>Peça conselhos, ou aconselhe alguém.</Text>
        <TextInput
          placeholder="Nome"
          underlineColorAndroid="#ffffff"
          style={styles.textbox}
        />
        <TextInput
          placeholder="Email"
          underlineColorAndroid="#ffffff"
          style={styles.textbox}
        />

        <Button
          title="                  ACHEI INTERESSANTE, INICIAR!                    "
          color="#006080"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text style={{color: 'white', marginTop: 10}}>Funciona com conversas confidenciais reconfortantes.</Text>
        <Text style={{color: 'white'}}>É gratificante e revelador!</Text>
      </View>
      </ImageBackground>
    );
  }
}

export const styles = StyleSheet.create({
  textbox: {
    justifyContent: 'center',
    alignContent: 'center',
    height: 40,
    width: 200,
    borderColor: '#006080',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff'
  },
  standardview: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
