import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import {StackNavigator, Header} from 'react-navigation';

export default class Cadastro extends Component{

  static navigationOptions = ({navzigation}) => ({
    tabBarLabel: 'MinhaBola'
});
  render(){
    return(
      <View style={Styles.container}>
        <Text>Tela Minha Bola</Text>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
  });
