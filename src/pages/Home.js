import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.standardview}>
            <Button
              title="Dar um conselho"
              onPress={() => this.props.navigation.navigate('Give')}
              style={{width: 200, marginBottom: 20}}
            />
          </View>
          <View style={styles.standardview}>
            <Button
              title="Pedir um conselho"
              onPress={() => this.props.navigation.navigate('Ask')}
            />
          </View>
        </View>
        <View style={{flex: 4}}>
        </View>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  standardview: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
