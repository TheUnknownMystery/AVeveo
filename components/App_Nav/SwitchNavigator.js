import { createSwitchNavigator } from 'react-navigation'
import { StackNavigator } from './StackNavigator'

export const SwitchNavigator = createSwitchNavigator(
 {

  Home: {

   screen: StackNavigator

  }
 },
)