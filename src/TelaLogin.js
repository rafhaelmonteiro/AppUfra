import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity
} from 'react-native';
import {StackNavigator} from 'react-navigation';

class Botao extends Component{
    
  render(){
    return(
      <TouchableOpacity  onPress={this.props.onPress} >
        <View>
          <Text style={{margin:20}}>Cadastre-se</Text>

        </View>
      </TouchableOpacity>


    );
  }
}

export default class TelaLogin extends Component{

    static navigationOptions = ({navigation}) => ({
        title: 'Home',
        header: null
    });
    
    constructor(props){
      super(props);
      this.state = {};
  
      this.inicio = this.inicio.bind(this);
      this.cadastro = this.cadastro.bind(this);
      this.Firebase = this.Firebase.bind(this);
      
    }
    inicio(){
      this.props.navigation.navigate('Inicio', {nome:'Inicio'})
    }
    cadastro(){
      this.props.navigation.navigate('Cadastrar', {nome:'Cadastro'})
    }
    Firebase(){
      this.props.navigation.navigate('Firebase', {nome:'BDFirebase'})
    }
  
    render(){
      return(
        <View style={Styles.container}>

          <TextInput style={Styles.input1} placeholder = 'Email:' underlineColorAndroid='transparent'/>

          <TextInput style={Styles.input2} placeholder = 'Senha:' underlineColorAndroid='transparent'/>

          <Button style={Styles.botao} title= 'Entre' onPress={this.inicio}/>

          <Button style={Styles.botao} title= 'Firebase' onPress={this.Firebase}/>

          <Botao  onPress={this.cadastro}/>

        </View>
      );
    }
  }

  const Styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f8ff'
    },
    input1: {
      margin: 5,
      borderWidth: 1,
      width: 280,
      borderColor: '#006400',
      borderRadius: 20
    },
    input2: {
      margin: 10,
      borderWidth: 1,
      width: 280,
      borderColor: '#006400',
      borderRadius: 20
    },
    
  });

  