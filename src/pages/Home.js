import React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <View style={{alignItems: 'center', justifyContent: 'center',}}>
          <View style={styles.askbuttonview}>
            <Button
              title="                  Dar um conselho                    "
              onPress={() => this.props.navigation.navigate('Give')}
              color="#006080"
            />
          </View>
          <View style={styles.givebuttonview}>
            <Button
              title="                Pedir um conselho                    "
              onPress={() => this.props.navigation.navigate('Ask')}
              color="#006080"
            />
          </View>
        </View>
        <View style={{justifyContent: 'flex-start', paddingHorizontal: 20, marginBottom: 20}}>
          <Text style={{color: 'black', marginBottom: 5}}>Conselhos que você recebeu anteriormente:</Text>
          <FlatList
            data={[
                   {date: '12/04/2018', msg: 'Oi. Estou em dúvida sobre..'},
                   {date: '12/05/2018', msg: 'Minha vida anda uma bagun..'},
                   {date: '12/05/2018', msg: 'Minha vida anda uma bagun..'}
                 ]}
            renderItem={
              ({item}) =>
                <View style={styles.advicelistitem}>
                  <Text>{item.date}  -  </Text>
                  <View style={{width: 200}}>
                    <Text>{item.msg}  </Text>
                  </View>
                  <Button title="ver" color="#006080" onPress={() => this.props.navigation.navigate('View')} />
                </View>
            }
          />
        </View>
        <View style={{justifyContent: 'flex-start', paddingHorizontal: 20}}>
          <Text style={{color: 'black', marginBottom: 5}}>Conselhos que você deu anteriormente:</Text>
          <FlatList
            data={[
                   {date: '12/04/2018', msg: 'Persistir é uma forma de s..'},
                   {date: '12/05/2018', msg: 'Às vezes, quando as coisas..'},
                   {date: '12/05/2018', msg: 'Às vezes, quando as coisas..'}
                 ]}
            renderItem={
              ({item}) =>
                <View style={styles.advicelistitem}>
                  <Text>{item.date}  -  </Text>
                  <View style={{width: 200}}>
                    <Text>{item.msg}  </Text>
                  </View>
                  <Button title="ver" color="#006080" onPress={() => this.props.navigation.navigate('View')} />
                </View>
            }
          />
        </View>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  askbuttonview: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30
  },
  givebuttonview: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 30
  },
  advicelistitem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40
  }
})
