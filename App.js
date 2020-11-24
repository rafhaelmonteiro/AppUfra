import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';

import TelaLogin from './src/TelaLogin';
import TelaPrincipal from './src/TelaPrincipal';
import TelaMinhaBola from './src/TelaMinhaBola';
import Cadastro from './src/Cadastro';
import BDFirebase from './src/Config/BDFirebase';

console.disableYellowBox=true;

const Navegador = StackNavigator({
  Login: {screen: TelaLogin},
  Inicio: {screen: TelaPrincipal },
  MinhaBola: {screen: TelaMinhaBola},
  Cadastrar: {screen: Cadastro},
  Firebase: {screen: BDFirebase}

},{
  tabBarPosition: 'bottom'
});

export default Navegador;

