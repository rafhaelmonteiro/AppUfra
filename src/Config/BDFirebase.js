import React, {Component} from 'react';
import {
  Platform,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button
  
} from 'react-native';
import firebase from 'firebase';

export default class BDFirebase extends Component{

    static navigationOptions = ({navigation}) => ({
        
    });

    constructor(props){
        super(props);
        this.state = {
          nome: '',
          telefone: '',
          endereço: ''
          
        };

        this.cadastrarArena = this.cadastrarArena.bind(this);
      
        let Config = {
          apiKey: "AIzaSyBfXcQWQC7SLNCAtIKuQFLBhUDn0bMIV9M",
          authDomain: "appminhabola.firebaseapp.com",
          databaseURL: "https://appminhabola.firebaseio.com",
          projectId: "appminhabola",
          storageBucket: "",
          messagingSenderId: "606837030916",
          appId: "1:606837030916:web:eb8ca648e7241aa7"
        };
        // Initialize Firebase
        firebase.initializeApp(Config);
      
    }
    cadastrarArena(){
      if (this.state.nome != '' && this.state.telefone != '' && this.state.endereço != ''){
        
        let Arenas = firebase.database().ref('Arenas');
        let chave = Arenas.push().key;

        Arenas.child(chave).set({
          nome: this.state.nome,
          telefone: this.state.telefone,
          endereço: this.state.endereço

        });

        alert('Cadastrado com Sucesso!') 
         
      }
    }

    render(){
        return(
            <View style={Styles.container}>

              <TextInput underlineColorAndroid='transparent' style={Styles.input1} placeholder='Nome:' 
                   onChangeText={(nome) => {this.setState({nome})}}/>
        
              <TextInput underlineColorAndroid='transparent' style={Styles.input2} placeholder='Telefone:' 
                   onChangeText={(telefone) => {this.setState({telefone})}}/>

              <TextInput underlineColorAndroid='transparent' style={Styles.input3} placeholder='Endereço:' 
                   onChangeText={(endereço) => {this.setState({endereço})}}/>

              <Button style={Styles.botao} title= 'Cadastrar' onPress={this.cadastrarArena}/>

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
      margin: 10,
      width: 320,
      borderWidth: 1,
      borderRadius: 20
   
    },
    input2: {
      margin: 10,
      width: 320,
      borderWidth: 1,
      borderRadius: 20
    },
    input3: {
      margin: 10,
      width: 320,
      borderWidth: 1,
      borderRadius: 20

    },
  });
