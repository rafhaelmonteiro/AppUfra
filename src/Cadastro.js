import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
import {StackNavigator, Header} from 'react-navigation';
import firebase from 'firebase';

export default class Cadastro extends Component{

  static navigationOptions = ({navigation}) => ({
    title: 'Cadastro'
});
  render(){
    return(
      <View style={Styles.container}>

        <Text style={Styles.texto1}>Nome</Text>
        <TextInput underlineColorAndroid='transparent' style={Styles.input1} 
                   onChangeText={() => {}}/>
        
        <Text style={Styles.texto2}>Telefone</Text>
        <TextInput underlineColorAndroid='transparent' style={Styles.input2} 
                   onChangeText={() => {}}/>

        <Text style={Styles.texto3}>Endereço:</Text>
        <TextInput underlineColorAndroid='transparent' style={Styles.input3} 
                   onChangeText={() => {}}/>

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
    texto1: {


    },
    texto2: {


    },
    texto3: {


    },
    input1: {


    },
    input2: {


    },
    input3: {


    },
  });

