import React from 'react'
import {EnterScreen} from './src/screens/enter/EnterScreen'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {RegisterScreen} from './src/screens/register/RegisterScreen'
import {NavigationContainer} from '@react-navigation/native'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name={'Enter'} component={EnterScreen} />
        <Stack.Screen name={'Register'} component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}