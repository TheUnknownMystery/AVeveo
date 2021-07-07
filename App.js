import * as React from 'react';
import { View, Text } from 'react-native';
import { SwitchNavigator } from './components/App_Nav/SwitchNavigator';
import { createAppContainer } from 'react-navigation';

export default class App extends React.Component {

  render() {

    return (

       <AppContainer /> 

    )
  }
}

const AppContainer = createAppContainer(SwitchNavigator)