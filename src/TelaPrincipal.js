import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import {StackNavigator, Header} from 'react-navigation';
import {TabNavigator} from 'react-navigation';


export default class TelaPrincipal extends Component{

  static navigationOptions = ({navigation}) => ({
    tabBarlabel: 'Inicio',
    header: null
});
  render(){
    return(
      <View style={Styles.container}>

        <View style={{backgroundColor:'#ccc'}}>
        
        </View>
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

