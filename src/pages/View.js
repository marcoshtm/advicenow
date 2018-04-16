import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ViewScreen extends React.Component {
  render() {
    return (
      <View style={styles.advicerequestbox}>
        <View style={styles.advicerequestbox}>
            <Text style={styles.advicetext}>Estou em dúvida sobre qual carreira seguir. É quase impossível decidir. Eu adoro A mas meu pai diz que não tem como viver disso. Eu acho que vou fazer B que é difícil, minha família apóia, mas será que não vou gostar?</Text>
        </View>
        <View style={styles.advicerequestbox}>
            <Text style={styles.advicetext}>Olá. Para escolher uma carreira você deverá avaliar critérios seus, que poderão versar sobre seu desejo de trabalhar na área, oportunidades identificadas no mercado, identificação com a missão da profissão, salário compatível com a expectativa de padrão de vida e com a oportunidade de alcançar a formação necessária para exercer. Estes critérios só poderão ter mais ou menos importância de acordo com suas noções pessoais. E o estabelecimento de sua decisão final impactará sua vida nos anos seguintes.</Text>
        </View>
        <View style={styles.buttonsview}>
          <View style={styles.buttonview}>
            <Button
              title="Curti"
              color="#006080"
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
          <View style={styles.buttonview}>
            <Button
              title="Não Curti"
              color="#006080"
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
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
  buttonsview: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonview: {
    flex: 1,
    padding: 5,
  },
  advicetext: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 30,
    paddingVertical: 30,
  }
})
