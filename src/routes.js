import React, {Component} from 'react';
import {StackNavigator, createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import TelaLogin from './src/TelaLogin';
import TelaPrincipal from './src/TelaPrincipal';
import TelaMinhaBola from './src/TelaMinhaBola';

const TelaLoginStack = createStackNavigator({
    TelaLogin: TelaLogin,
});

export default createAppContainer( TelaLoginStack,
    createBottomTabNavigator({
        TelaPrincipal,
        TelaMinhaBola
    }

    )
);


  