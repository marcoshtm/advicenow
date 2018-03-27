import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = { text: 'Email', password: 'Senha'};
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>"Amizades próximas, conversas particulares."</Text>
        <Text>No ADVISE.NOW você pode</Text>
        <Text>pedir conselhos, ou aconselhar alguém.</Text>
        <Text>Funciona com conversas confidenciais reconfortantes.</Text>
        <Text>É gratificante e revelador!</Text>
        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
          value={this.state.password}
        />
        <Button
          title="Entrar"
          color="#006080"
        />
      </View>
    );
  }
}
