import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BottomTab from './src/Navigator/BottomTab'
import SplashScreen from './src/Screens/SplashScreen'
import Login from './src/Screens/Registrations/Login'
const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
      <Stack.Screen name='BottomTab' component={BottomTab} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  )

 
}

export default App

const styles = StyleSheet.create({})