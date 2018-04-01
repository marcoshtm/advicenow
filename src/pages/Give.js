import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class GiveScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.advicerequestbox}>
            <Text style={{backgroundColor: '#ffffff', paddingHorizontal: 30, paddingVertical: 30}}>Estou em dúvida sobre qual carreira seguir. É quase impossível decidir. Eu adoro A mas meu pai diz que não tem como viver disso. Eu acho que vou fazer B que é difícil, minha família apóia, mas será que não vou gostar?</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <View style={{ flex: 0.2, flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('./marcos_fb_c.png')} />
            <Text>Dê o seu conselho</Text>
          </View>
          <TextInput
            placeholder="Qual o seu conselho?"
            underlineColorAndroid="#ffffff"
            style={styles.textbox}
          />
          <Button
            title="Go to Home"
            color="#006080"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  advicerequestbox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
