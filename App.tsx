import React from 'react'
import {EnterScreen} from './src/screens/enter/EnterScreen'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {RegisterScreen} from './src/screens/register/RegisterScreen'
import {NavigationContainer} from '@react-navigation/native'
import {ConfirmRegisterScreen} from './src/screens/confirm/ConfirmRegisterScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen options={{headerShown: false}} name={'Enter'} component={EnterScreen} />
        <Stack.Screen name={'Register'} component={RegisterScreen} />
        <Stack.Screen name={'Confirm'} component={ConfirmRegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}