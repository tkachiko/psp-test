import {StyleSheet, View} from 'react-native'
import {EnterScreen} from './src/screens/enter/EnterScreen'

export default function App () {
  return (
    <View style={stylesContainer.container}>
      <EnterScreen />
    </View>
  )
}

export const stylesContainer = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#1E63EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

