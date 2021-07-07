import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../../Screens/Home'
import ProductScreen from '../../Screens/ProductScreen';

export const StackNavigator = createStackNavigator({

 Home: {

  screen: Home,
  navigationOptions: {

   headerShown: false
                 
  }
 },

 ProductScreen: {

  screen: ProductScreen

 }
})