import React from 'react';
import { Alert, StyleSheet, Text, View, ImageBackground, AppRegistry, TextInput, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

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
      <View style={styles.standardview} >
        <Text style={{color: 'white'}}>"Amizades próximas, conversas particulares."</Text>
        <Text style={{color: 'white', marginTop: 10}}>No APPTESTE você pode</Text>
        <Text style={{color: 'white', marginBottom: 30}}>pedir conselhos, ou aconselhar alguém.</Text>
        <Text style={{color: 'white', marginBottom: 5}}>{this.state.email}</Text>
        <TextInput style={styles.emailbox} />

        <Button
          title="                           ACHEI INTERESSANTE                           "
          color="#006080"
          style={{width: '100%'}}
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
  },
  standardview: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
