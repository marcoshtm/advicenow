import React from 'react';
import { Alert, StyleSheet, Text, View, ImageBackground, AppRegistry, TextInput, Picker, Button } from 'react-native';
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
          placeholder="Sobrenome"
          underlineColorAndroid="#ffffff"
          style={styles.textbox}
        />
        <TextInput
          placeholder="Email"
          underlineColorAndroid="#ffffff"
          style={styles.textbox}
        />
        <Text style={{color: 'white'}}>Data de nascimento:</Text>
        <View style={styles.birthdateview}>
          <Picker style={styles.pickeritemday} mode="dropdown">
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
            <Picker.Item label="13" value="13" />
            <Picker.Item label="14" value="14" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="16" value="16" />
            <Picker.Item label="17" value="17" />
            <Picker.Item label="18" value="18" />
            <Picker.Item label="19" value="19" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="21" value="21" />
            <Picker.Item label="22" value="22" />
            <Picker.Item label="23" value="23" />
            <Picker.Item label="24" value="24" />
            <Picker.Item label="25" value="25" />
            <Picker.Item label="26" value="26" />
            <Picker.Item label="27" value="27" />
            <Picker.Item label="28" value="28" />
            <Picker.Item label="29" value="29" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="31" value="31" />
          </Picker>
          <Picker style={styles.pickeritemmonth} mode="dropdown">
            <Picker.Item label="Janeiro" value="1" />
            <Picker.Item label="Fevereiro" value="2" />
            <Picker.Item label="Março" value="3" />
            <Picker.Item label="Abril" value="4" />
            <Picker.Item label="Maio" value="5" />
            <Picker.Item label="Junho" value="6" />
            <Picker.Item label="Julho" value="7" />
            <Picker.Item label="Agosto" value="8" />
            <Picker.Item label="Setembro" value="9" />
            <Picker.Item label="Outubro" value="10" />
            <Picker.Item label="Novembro" value="11" />
            <Picker.Item label="Dezembro" value="12" />
          </Picker>
          <Picker style={styles.pickeritemyear} mode="dropdown">
            <Picker.Item label="1990" value="1990" />
            <Picker.Item label="1980" value="1980" />
            <Picker.Item label="1970" value="1970" />
            <Picker.Item label="1960" value="1960" />
          </Picker>
        </View>
        <Text style={{color: 'white'}}>Sexo:</Text>
        <Picker style={styles.pickeritemgender} mode="dropdown">
          <Picker.Item label="Masculino" value="M" />
          <Picker.Item label="Feminino" value="F" />
        </Picker>
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
  pickeritemgender: {
    height: 40,
    width: 200,
    borderColor: '#006080',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    marginBottom: 20
  },
  standardview: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  birthdateview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pickeritemday: {
    height: 40,
    width: 40,
    borderColor: '#006080',
    borderWidth: 2,
    backgroundColor: '#ffffff',
    paddingHorizontal: 5,
    marginBottom: 10
  },
  pickeritemmonth: {
    height: 40,
    width: 90,
    borderColor: '#006080',
    borderWidth: 2,
    backgroundColor: '#ffffff',
    paddingHorizontal: 5,
    marginBottom: 10
  },
  pickeritemyear: {
    height: 40,
    width: 70,
    borderColor: '#006080',
    borderWidth: 2,
    backgroundColor: '#ffffff',
    paddingHorizontal: 5,
    marginBottom: 10
  },
})
